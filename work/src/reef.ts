/**
 * Reef generation for the underwater scene.
 *
 * Everything here is deterministic: one seeded RNG and one noise function, so
 * the seabed a prop is *placed* against is provably the seabed that gets
 * *drawn*. That is the whole reason the old props sat wrong — the floor mixed
 * `Math.random()` into its displacement, which no sampler could reproduce.
 */

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// --- deterministic randomness ---------------------------------------------
/** mulberry32 — small, fast, and repeatable across reloads. */
export function makeRng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash2(x: number, y: number): number {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

/** Value noise with smoothstep interpolation — continuous, so props seat. */
function valueNoise(x: number, y: number): number {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi);
  const c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}

export const FLOOR_BASE_Y = -5;

/**
 * The seabed, as a closed-form function. `buildSeafloor` displaces its
 * vertices with exactly this, so a raycast onto the mesh and a call to this
 * agree to within the triangle-interpolation error of the mesh resolution.
 */
export function terrainHeight(x: number, z: number): number {
  const dunes = Math.sin(x * 0.1) * Math.cos(z * 0.1) * 2;
  const swell = (valueNoise(x * 0.045, z * 0.045) - 0.5) * 2.6;
  const grain = (valueNoise(x * 0.19, z * 0.19) - 0.5) * 0.55;
  // ripples run across the dune faces the way current-formed sand does
  const ripple = Math.sin(x * 1.15 + Math.sin(z * 0.22) * 2.4) * 0.075;
  return FLOOR_BASE_Y + dunes + swell + grain + ripple;
}

/** Surface normal by central difference, for tilting props into the slope. */
export function terrainNormal(x: number, z: number, eps = 0.4): THREE.Vector3 {
  const hx = terrainHeight(x + eps, z) - terrainHeight(x - eps, z);
  const hz = terrainHeight(x, z + eps) - terrainHeight(x, z - eps);
  return new THREE.Vector3(-hx, 2 * eps, -hz).normalize();
}

const UP = new THREE.Vector3(0, 1, 0);

/** Seat an object on the seabed and lean it into the slope. */
export function seat(obj: THREE.Object3D, x: number, z: number, opts: {
  sink?: number;        // how far to settle the base below the sand
  slope?: number;       // 0 = stand upright, 1 = fully follow the ground
  spin?: number;
} = {}): void {
  const { sink = 0, slope = 0, spin } = opts;
  if (spin !== undefined) obj.rotation.y = spin;
  if (slope > 0) {
    const n = terrainNormal(x, z);
    const tilt = new THREE.Quaternion().setFromUnitVectors(UP, n);
    if (slope < 1) tilt.slerp(new THREE.Quaternion(), 1 - slope);
    const spinQ = new THREE.Quaternion().setFromAxisAngle(UP, obj.rotation.y);
    obj.quaternion.copy(tilt).multiply(spinQ);
  }
  obj.position.set(x, 0, z);
  obj.updateMatrixWorld(true);
  // measure the assembled object rather than trusting a predicted height
  const base = new THREE.Box3().setFromObject(obj).min.y;
  obj.position.y = terrainHeight(x, z) - base - sink;
}

// --- palette ---------------------------------------------------------------
export const REEF = {
  sandLight: 0x6e7f74,
  sandDark: 0x3f5450,
  silt: 0x2b4048,
  rock: 0x55606b,
  rockWarm: 0x6a6558,
  coral: [0xff6b6b, 0xff8e72, 0xf7b267, 0xe17055, 0xd63031, 0xc44569, 0xf19066],
  fan: [0xd6336c, 0xe8590c, 0xf06595, 0xd9480f],
  kelp: [0x2f7d4f, 0x3f8f5c, 0x2e6b53, 0x46a06a, 0x27604a],
  grass: [0x4f8f5f, 0x5da06a, 0x3f7d52],
  anemone: [0xff8fa3, 0xffb3c1, 0xc77dff, 0x9d7bff, 0x80ffdb],
  sponge: [0xe8a87c, 0xc38d9e, 0xd88c9a],
  urchin: 0x2b2233,
  star: [0xff9f43, 0xee5a24, 0xf6b93b],
};

const pick = <T,>(rng: () => number, arr: T[]): T => arr[Math.floor(rng() * arr.length)];

/**
 * Bake a prop built from many small meshes down to one mesh per material.
 * A branching coral is ~30 cylinders; left as a Group that is 30 draw calls
 * every frame, for a thing the size of a thumbnail on screen.
 */
export function flattenProp(group: THREE.Object3D): THREE.Group {
  const byMaterial = new Map<THREE.Material, THREE.BufferGeometry[]>();
  group.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();

  group.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const geo = mesh.geometry.clone();
    geo.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, mesh.matrixWorld));
    // merging needs a consistent attribute set
    for (const attr of Object.keys(geo.attributes)) {
      if (attr !== 'position' && attr !== 'normal' && attr !== 'uv') geo.deleteAttribute(attr);
    }
    if (!geo.attributes.uv) {
      geo.setAttribute('uv', new THREE.BufferAttribute(
        new Float32Array((geo.attributes.position.count) * 2), 2));
    }
    const mat = mesh.material as THREE.Material;
    (byMaterial.get(mat) ?? byMaterial.set(mat, []).get(mat)!).push(geo);
  });

  const out = new THREE.Group();
  out.userData = { ...group.userData };
  for (const [mat, geos] of byMaterial) {
    const merged = mergeGeometries(geos.map(g => g.index ? g.toNonIndexed() : g), false);
    geos.forEach(g => g.dispose());
    if (!merged) continue;
    const mesh = new THREE.Mesh(merged, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    out.add(mesh);
  }
  return out;
}

/** One material per look, shared by every prop that wears it. */
export class MaterialCache {
  private cache = new Map<string, THREE.MeshStandardMaterial>();
  get(color: number, o: { roughness?: number; metalness?: number; side?: THREE.Side } = {}) {
    const key = `${color}|${o.roughness ?? 0.9}|${o.metalness ?? 0}|${o.side ?? THREE.FrontSide}`;
    let m = this.cache.get(key);
    if (!m) {
      m = new THREE.MeshStandardMaterial({
        color, roughness: o.roughness ?? 0.9, metalness: o.metalness ?? 0,
        side: o.side ?? THREE.FrontSide, flatShading: true,
      });
      this.cache.set(key, m);
    }
    return m;
  }
  get size() { return this.cache.size; }
}

// --- seabed ----------------------------------------------------------------
export function buildSeafloor(size = 200, segments = 220): THREE.Mesh {
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const light = new THREE.Color(REEF.sandLight);
  const dark = new THREE.Color(REEF.sandDark);
  const c = new THREE.Color();

  // The plane is rotated -90deg about X, so local +y maps to world -z. Sample
  // terrainHeight in world space so the mesh and the sampler cannot drift.
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const worldZ = -pos.getY(i);
    const h = terrainHeight(x, worldZ);
    pos.setZ(i, h - FLOOR_BASE_Y);

    // silt gathers in the hollows, clean sand catches the crests
    const t = THREE.MathUtils.clamp((h - FLOOR_BASE_Y) / 3.2 + 0.5, 0, 1);
    const patch = valueNoise(x * 0.08 + 40, worldZ * 0.08 - 17);
    c.copy(dark).lerp(light, t * 0.75 + patch * 0.25);
    c.toArray(colors, i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();

  const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: 0.96, metalness: 0.02,
  }));
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = FLOOR_BASE_Y;
  mesh.receiveShadow = true;
  return mesh;
}

// --- rocks -----------------------------------------------------------------
/**
 * Displacement is a pure function of the vertex *position*, not its index.
 * IcosahedronGeometry is non-indexed, so index-based noise moves each copy of
 * a shared corner somewhere different and rips the shell open along every
 * edge — which is exactly what the old rocks did.
 */
export function buildRock(rng: () => number, mats: MaterialCache, scale = 1): THREE.Mesh {
  const r = (0.8 + rng() * 1.6) * scale;
  const squash = 0.45 + rng() * 0.4;
  const geo = new THREE.IcosahedronGeometry(r, 1);
  const pos = geo.attributes.position;
  const seedX = rng() * 100, seedZ = rng() * 100;
  const v = new THREE.Vector3();

  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const n = valueNoise(v.x * 1.1 + seedX, v.z * 1.1 + seedZ) - 0.5;
    const m = valueNoise(v.y * 2.2 + seedZ, v.x * 2.2 + seedX) - 0.5;
    const push = 1 + n * 0.38 + m * 0.16;
    pos.setXYZ(i, v.x * push, v.y * squash * push, v.z * push);
  }
  geo.computeVertexNormals();

  const rock = new THREE.Mesh(geo, mats.get(
    rng() < 0.25 ? REEF.rockWarm : REEF.rock,
    { roughness: 0.95, metalness: 0.04 },
  ));
  rock.castShadow = true;
  rock.receiveShadow = true;
  return rock;
}

// --- corals ----------------------------------------------------------------
/** Recursive branching coral — the old one was a fistful of bare cylinders. */
function branchInto(
  parent: THREE.Object3D, rng: () => number, mat: THREE.Material,
  len: number, rad: number, depth: number,
): void {
  const geo = new THREE.CylinderGeometry(rad * 0.6, rad, len, 6, 1);
  geo.translate(0, len / 2, 0);
  const seg = new THREE.Mesh(geo, mat);
  seg.castShadow = true;
  parent.add(seg);

  if (depth <= 0) {
    const tip = new THREE.Mesh(new THREE.SphereGeometry(rad * 0.75, 6, 5), mat);
    tip.position.y = len;
    seg.add(tip);
    return;
  }
  const forks = rng() < 0.32 ? 3 : 2;
  for (let i = 0; i < forks; i++) {
    const node = new THREE.Group();
    node.position.y = len * (0.68 + rng() * 0.28);
    node.rotation.y = (i / forks) * Math.PI * 2 + rng() * 0.9;
    node.rotation.z = 0.42 + rng() * 0.42;
    seg.add(node);
    branchInto(node, rng, mat, len * (0.6 + rng() * 0.2), rad * 0.68, depth - 1);
  }
}

export function buildBranchingCoral(rng: () => number, mats: MaterialCache): THREE.Group {
  const g = new THREE.Group();
  const mat = mats.get(pick(rng, REEF.coral), { roughness: 0.85 });
  const trunks = 1 + Math.floor(rng() * 3);
  for (let i = 0; i < trunks; i++) {
    const node = new THREE.Group();
    node.position.set((rng() - 0.5) * 0.7, 0, (rng() - 0.5) * 0.7);
    node.rotation.z = (rng() - 0.5) * 0.22;
    node.rotation.x = (rng() - 0.5) * 0.22;
    g.add(node);
    branchInto(node, rng, mat, 0.9 + rng() * 0.8, 0.15 + rng() * 0.09, 2 + Math.floor(rng() * 2));
  }
  return g;
}

/** Sea fan — a flat ribbed blade that catches the current broadside. */
export function buildSeaFan(rng: () => number, mats: MaterialCache): THREE.Group {
  const g = new THREE.Group();
  const mat = mats.get(pick(rng, REEF.fan), { roughness: 0.8, side: THREE.DoubleSide });
  const h = 1.4 + rng() * 1.6;
  const w = h * (0.75 + rng() * 0.5);
  const ribs = 7 + Math.floor(rng() * 5);

  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.11, h * 0.35, 5), mat);
  stem.position.y = h * 0.175;
  g.add(stem);

  for (let i = 0; i < ribs; i++) {
    const t = i / (ribs - 1) - 0.5;
    const rl = h * (0.72 - Math.abs(t) * 0.55) + rng() * 0.12;
    const rib = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.05, rl, 4), mat);
    rib.geometry.translate(0, rl / 2, 0);
    rib.position.set(t * w * 0.5, h * 0.3, 0);
    rib.rotation.z = -t * 0.85;
    g.add(rib);
  }
  // webbing between the ribs
  const web = new THREE.Mesh(new THREE.CircleGeometry(h * 0.46, 14, Math.PI * 0.1, Math.PI * 0.8), mat);
  web.position.y = h * 0.42;
  web.scale.set(w / (h * 0.9), 1, 1);
  g.add(web);
  g.rotation.y = rng() * Math.PI;
  return g;
}

/** Boulder/brain coral — a squat lobed dome. */
export function buildBrainCoral(rng: () => number, mats: MaterialCache): THREE.Mesh {
  const r = 0.55 + rng() * 0.85;
  const geo = new THREE.IcosahedronGeometry(r, 2);
  const pos = geo.attributes.position;
  const s = rng() * 50;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const ridge = Math.sin(v.x * 7 + s) * Math.cos(v.z * 7 + s) * 0.055;
    const lump = (valueNoise(v.x * 1.6 + s, v.z * 1.6 + s) - 0.5) * 0.3;
    const push = 1 + ridge / r + lump;
    pos.setXYZ(i, v.x * push, v.y * push * 0.62, v.z * push);
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mats.get(pick(rng, REEF.coral), { roughness: 0.9 }));
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** Tube sponge cluster. */
export function buildTubeSponge(rng: () => number, mats: MaterialCache): THREE.Group {
  const g = new THREE.Group();
  const mat = mats.get(pick(rng, REEF.sponge), { roughness: 0.85, side: THREE.DoubleSide });
  const tubes = 2 + Math.floor(rng() * 4);
  for (let i = 0; i < tubes; i++) {
    const h = 0.7 + rng() * 1.5;
    const r = 0.14 + rng() * 0.13;
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.72, h, 9, 1, true), mat);
    tube.geometry.translate(0, h / 2, 0);
    tube.position.set((rng() - 0.5) * 0.5, 0, (rng() - 0.5) * 0.5);
    tube.rotation.z = (rng() - 0.5) * 0.3;
    tube.castShadow = true;
    g.add(tube);
  }
  return g;
}

// --- kelp ------------------------------------------------------------------
export interface Kelp { group: THREE.Group; phase: number; speed: number; }

/** Kelp with actual blades. The old plant was a bare tapered stick. */
export function buildKelp(rng: () => number, mats: MaterialCache): Kelp {
  const group = new THREE.Group();
  const color = pick(rng, REEF.kelp);
  const stemMat = mats.get(color, { roughness: 0.92 });
  const bladeMat = mats.get(color, { roughness: 0.9, side: THREE.DoubleSide });
  const stalks = 1 + Math.floor(rng() * 3);

  for (let s = 0; s < stalks; s++) {
    const h = 2.4 + rng() * 4.2;
    const segs = 14;
    const geo = new THREE.CylinderGeometry(0.025, 0.075, h, 5, segs);
    geo.translate(0, h / 2, 0);
    const pos = geo.attributes.position;
    const lean = (rng() - 0.5) * 0.9;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const t = y / h;
      pos.setX(i, pos.getX(i) + Math.sin(t * Math.PI * 0.75) * t * lean * 2.2);
    }
    geo.computeVertexNormals();

    const stalk = new THREE.Mesh(geo, stemMat);
    stalk.position.set((rng() - 0.5) * 0.3, 0, (rng() - 0.5) * 0.3);
    stalk.rotation.y = rng() * Math.PI * 2;
    stalk.castShadow = true;

    const blades = 5 + Math.floor(rng() * 5);
    for (let b = 0; b < blades; b++) {
      const t = 0.25 + (b / blades) * 0.7;
      const bl = 0.5 + rng() * 0.85;
      const blade = new THREE.Mesh(new THREE.PlaneGeometry(0.16, bl, 1, 3), bladeMat);
      blade.geometry.translate(0, bl / 2, 0);
      blade.position.set(Math.sin(t * Math.PI * 0.75) * t * lean * 2.2, t * h, 0);
      blade.rotation.y = b * 2.4 + rng();
      blade.rotation.z = 0.9 + rng() * 0.5;
      stalk.add(blade);
    }
    group.add(stalk);
  }
  return { group, phase: rng() * Math.PI * 2, speed: 0.5 + rng() * 0.9 };
}

/** Seagrass tuft — cheap, planted in dense meadows. */
export function buildSeagrass(rng: () => number, mats: MaterialCache): THREE.Group {
  const g = new THREE.Group();
  const mat = mats.get(pick(rng, REEF.grass), { roughness: 0.92, side: THREE.DoubleSide });
  const n = 5 + Math.floor(rng() * 6);
  for (let i = 0; i < n; i++) {
    const h = 0.5 + rng() * 1.1;
    const b = new THREE.Mesh(new THREE.PlaneGeometry(0.09, h, 1, 3), mat);
    b.geometry.translate(0, h / 2, 0);
    const pos = b.geometry.attributes.position;
    const bend = (rng() - 0.5) * 0.8;
    for (let v = 0; v < pos.count; v++) {
      const t = pos.getY(v) / h;
      pos.setX(v, pos.getX(v) + t * t * bend);
    }
    b.geometry.computeVertexNormals();
    b.position.set((rng() - 0.5) * 0.4, 0, (rng() - 0.5) * 0.4);
    b.rotation.y = rng() * Math.PI;
    g.add(b);
  }
  return g;
}

// --- small life ------------------------------------------------------------
export interface Anemone { mesh: THREE.Group; phase: number; }

export function buildAnemone(rng: () => number, mats: MaterialCache): Anemone {
  const g = new THREE.Group();
  const mat = mats.get(pick(rng, REEF.anemone), { roughness: 0.7 });
  const r = 0.22 + rng() * 0.2;
  const base = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.8, r, 0.22, 9), mat);
  base.position.y = 0.11;
  g.add(base);
  const arms = 16 + Math.floor(rng() * 12);
  for (let i = 0; i < arms; i++) {
    const a = (i / arms) * Math.PI * 2;
    const len = 0.28 + rng() * 0.3;
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.032, len, 4), mat);
    t.geometry.translate(0, len / 2, 0);
    t.position.set(Math.cos(a) * r * 0.6, 0.2, Math.sin(a) * r * 0.6);
    t.rotation.z = -Math.cos(a) * (0.6 + rng() * 0.5);
    t.rotation.x = Math.sin(a) * (0.6 + rng() * 0.5);
    g.add(t);
  }
  return { mesh: g, phase: rng() * Math.PI * 2 };
}

export function buildUrchin(rng: () => number, mats: MaterialCache): THREE.Group {
  const g = new THREE.Group();
  const mat = mats.get(REEF.urchin, { roughness: 0.6 });
  const r = 0.16 + rng() * 0.14;
  g.add(new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), mat));
  const spines = 26 + Math.floor(rng() * 16);
  for (let i = 0; i < spines; i++) {
    // even-ish sphere distribution
    const y = 1 - (i / (spines - 1)) * 2;
    const rad = Math.sqrt(Math.max(0, 1 - y * y));
    const th = i * 2.39996;
    const dir = new THREE.Vector3(Math.cos(th) * rad, y, Math.sin(th) * rad);
    const len = r * (1.5 + rng() * 1.3);
    const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.022, len, 4), mat);
    sp.geometry.translate(0, len / 2, 0);
    sp.position.copy(dir.clone().multiplyScalar(r * 0.85));
    sp.quaternion.setFromUnitVectors(UP, dir);
    g.add(sp);
  }
  g.position.y = r;
  const wrap = new THREE.Group();
  wrap.add(g);
  return wrap;
}

export function buildStarfish(rng: () => number, mats: MaterialCache): THREE.Group {
  const g = new THREE.Group();
  const mat = mats.get(pick(rng, REEF.star), { roughness: 0.8 });
  const r = 0.3 + rng() * 0.25;
  g.add(new THREE.Mesh(new THREE.SphereGeometry(r * 0.42, 7, 5), mat));
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + rng() * 0.2;
    const arm = new THREE.Mesh(new THREE.ConeGeometry(r * 0.28, r * 1.25, 5), mat);
    arm.geometry.translate(0, r * 0.62, 0);
    arm.position.set(0, 0, 0);
    arm.rotation.z = Math.PI / 2 - 0.15;
    arm.rotation.y = -a;
    g.add(arm);
  }
  g.scale.y = 0.42;
  g.position.y = r * 0.16;
  const wrap = new THREE.Group();
  wrap.add(g);
  return wrap;
}

export interface Jelly { group: THREE.Group; phase: number; speed: number; drift: THREE.Vector3; }

export function buildJellyfish(rng: () => number): Jelly {
  const group = new THREE.Group();
  const tint = new THREE.Color().setHSL(0.55 + rng() * 0.25, 0.6, 0.72);
  const bellMat = new THREE.MeshPhysicalMaterial({
    color: tint, transparent: true, opacity: 0.42, roughness: 0.25,
    transmission: 0.5, thickness: 0.4, side: THREE.DoubleSide, depthWrite: false,
  });
  const r = 0.35 + rng() * 0.45;
  const bell = new THREE.Mesh(new THREE.SphereGeometry(r, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), bellMat);
  group.add(bell);

  const tentMat = new THREE.MeshBasicMaterial({
    color: tint, transparent: true, opacity: 0.32, depthWrite: false,
  });
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const len = r * (2.2 + rng() * 2.4);
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.022, len, 4), tentMat);
    t.geometry.translate(0, -len / 2, 0);
    t.position.set(Math.cos(a) * r * 0.68, -r * 0.1, Math.sin(a) * r * 0.68);
    group.add(t);
  }
  return {
    group, phase: rng() * Math.PI * 2, speed: 0.4 + rng() * 0.4,
    drift: new THREE.Vector3((rng() - 0.5) * 0.012, 0, (rng() - 0.5) * 0.012),
  };
}

// --- instanced scatter -----------------------------------------------------
/**
 * Pebbles, shells and rubble, drawn as one mesh each. Hundreds of props for
 * two draw calls — this is what pays for the density the reef needs.
 */
export function buildScatter(
  rng: () => number, mats: MaterialCache,
  opts: { count: number; radius: number; geometry: THREE.BufferGeometry; color: number;
          minScale: number; maxScale: number; sink?: number },
): THREE.InstancedMesh {
  const { count, radius, geometry, color, minScale, maxScale, sink = 0.3 } = opts;
  const mesh = new THREE.InstancedMesh(geometry, mats.get(color, { roughness: 0.95 }), count);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const s = new THREE.Vector3();
  const p = new THREE.Vector3();
  const e = new THREE.Euler();

  for (let i = 0; i < count; i++) {
    const a = rng() * Math.PI * 2;
    const d = Math.sqrt(rng()) * radius;
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    const sc = minScale + rng() * (maxScale - minScale);
    p.set(x, terrainHeight(x, z) - sc * sink, z);
    e.set(rng() * Math.PI, rng() * Math.PI * 2, rng() * Math.PI);
    q.setFromEuler(e);
    s.set(sc, sc * (0.6 + rng() * 0.5), sc);
    mesh.setMatrixAt(i, m.compose(p, q, s));
  }
  mesh.instanceMatrix.needsUpdate = true;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/** A school of small fish, instanced, orbiting a drifting centre. */
export interface School {
  mesh: THREE.InstancedMesh;
  centre: THREE.Vector3;
  drift: THREE.Vector3;
  offsets: THREE.Vector3[];
  phases: number[];
  radius: number;
}

export function buildSchool(rng: () => number, count: number, colour: number): School {
  const body = new THREE.ConeGeometry(0.075, 0.3, 5);
  body.rotateX(Math.PI / 2);
  const mesh = new THREE.InstancedMesh(
    body,
    new THREE.MeshStandardMaterial({ color: colour, roughness: 0.4, metalness: 0.45, flatShading: true }),
    count,
  );
  const offsets: THREE.Vector3[] = [];
  const phases: number[] = [];
  const radius = 1.6 + rng() * 1.8;
  for (let i = 0; i < count; i++) {
    offsets.push(new THREE.Vector3(
      (rng() - 0.5) * radius * 2,
      (rng() - 0.5) * radius,
      (rng() - 0.5) * radius * 2,
    ));
    phases.push(rng() * Math.PI * 2);
  }
  const a = rng() * Math.PI * 2;
  return {
    mesh, offsets, phases, radius,
    centre: new THREE.Vector3((rng() - 0.5) * 50, 1 + rng() * 7, (rng() - 0.5) * 50),
    drift: new THREE.Vector3(Math.cos(a) * 0.03, 0, Math.sin(a) * 0.03),
  };
}

export function updateSchool(s: School, t: number): void {
  s.centre.add(s.drift);
  // turn back toward the middle rather than wrapping across the scene
  if (s.centre.length() > 46) {
    s.drift.x -= s.centre.x * 0.00016;
    s.drift.z -= s.centre.z * 0.00016;
  }
  s.centre.y = Math.max(terrainHeight(s.centre.x, s.centre.z) + 2.2, Math.min(s.centre.y, 14));
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const p = new THREE.Vector3();
  const scl = new THREE.Vector3(1, 1, 1);
  const heading = new THREE.Vector3(s.drift.x, 0, s.drift.z).normalize();
  q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), heading.lengthSq() ? heading : new THREE.Vector3(0, 0, 1));
  for (let i = 0; i < s.offsets.length; i++) {
    const o = s.offsets[i];
    const wob = Math.sin(t * 2.2 + s.phases[i]) * 0.16;
    p.set(s.centre.x + o.x + wob, s.centre.y + o.y + Math.cos(t * 1.7 + s.phases[i]) * 0.12, s.centre.z + o.z);
    s.mesh.setMatrixAt(i, m.compose(p, q, scl));
  }
  s.mesh.instanceMatrix.needsUpdate = true;
}
