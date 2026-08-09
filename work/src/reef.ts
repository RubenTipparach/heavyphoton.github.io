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
  kelp: [0x5aa877, 0x6cbb86, 0x4f9b70, 0x77c894, 0x63a97f],
  grass: [0x6aa87a, 0x7bb98a, 0x5b9b6c],
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

    const blades = 9 + Math.floor(rng() * 6);
    for (let b = 0; b < blades; b++) {
      const t = 0.18 + (b / blades) * 0.78 + (rng() - 0.5) * 0.05;
      const bl = 0.32 + rng() * 0.5;
      const blade = new THREE.Mesh(new THREE.PlaneGeometry(0.1, bl, 1, 3), bladeMat);
      // droop the blade along its length instead of leaving it a flat plank
      const bp = blade.geometry.attributes.position;
      for (let v = 0; v < bp.count; v++) {
        const u = (bp.getY(v) + bl / 2) / bl;
        bp.setZ(v, bp.getZ(v) - u * u * bl * 0.35);
      }
      blade.geometry.translate(0, bl / 2, 0);
      blade.geometry.computeVertexNormals();
      blade.position.set(Math.sin(t * Math.PI * 0.75) * t * lean * 2.2, t * h, 0);
      blade.rotation.y = b * 2.399 + rng() * 0.6;
      blade.rotation.z = 1.15 + rng() * 0.35;
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

// --- instanced, GPU-animated plant fields ----------------------------------
/**
 * One clock for every swaying thing in the scene. Sway is computed in the
 * vertex shader from a per-vertex bend weight and a per-instance
 * (phase, speed, amplitude), so a meadow of 200 tufts costs one draw call and
 * zero per-frame CPU work.
 */
export const swayTime = { value: 0 };

/**
 * Bake "how much does this vertex move" into the geometry. 0 at the root,
 * rising toward the tip, so plants bend from the base like they are anchored.
 */
export function addBendWeight(geo: THREE.BufferGeometry, exponent = 1.7): THREE.BufferGeometry {
  const pos = geo.attributes.position;
  let maxY = 0;
  for (let i = 0; i < pos.count; i++) maxY = Math.max(maxY, pos.getY(i));
  const bend = new Float32Array(pos.count);
  for (let i = 0; i < pos.count; i++) {
    bend[i] = maxY > 1e-6 ? Math.pow(Math.max(pos.getY(i), 0) / maxY, exponent) : 0;
  }
  geo.setAttribute('aBend', new THREE.BufferAttribute(bend, 1));
  return geo;
}

const SWAY_ATTRS = `
attribute vec3 iSway;   // phase, speed, amplitude
attribute float aBend;  // 0 at the root, 1 at the tip
uniform float uTime;
`;

const SWAY_BODY = `
  float swayT = uTime * iSway.y + iSway.x;
  float swayA = aBend * iSway.z;
  transformed.x += sin(swayT) * swayA;
  transformed.z += cos(swayT * 0.73 + 1.3) * swayA * 0.65;
  // a little vertical give so tips do not stretch as they lean
  transformed.y -= (1.0 - cos(sin(swayT) * swayA * 0.6)) * aBend * 0.35;
`;

function injectSway(shader: { vertexShader: string; uniforms: any }): void {
  shader.uniforms.uTime = swayTime;
  shader.vertexShader = SWAY_ATTRS + shader.vertexShader;
  shader.vertexShader = shader.vertexShader.replace(
    '#include <begin_vertex>',
    '#include <begin_vertex>\n' + SWAY_BODY,
  );
}

/** A lit material that sways, plus the matching depth material so the shadow
 *  it casts sways with it instead of standing still. */
export function makeSwayMaterial(opts: { side?: THREE.Side; roughness?: number } = {}) {
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,          // per-instance colour supplies the hue
    roughness: opts.roughness ?? 0.9,
    metalness: 0,
    side: opts.side ?? THREE.DoubleSide,
    flatShading: true,
  });
  material.onBeforeCompile = injectSway;
  material.customProgramCacheKey = () => 'reef-sway';

  const depthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  depthMaterial.onBeforeCompile = injectSway;
  depthMaterial.customProgramCacheKey = () => 'reef-sway-depth';

  return { material, depthMaterial };
}

export interface Placement {
  x: number; z: number;
  scale: number; spin: number; slope: number; sink: number;
  colour: THREE.Color;
  sway: [number, number, number];   // phase, speed, amplitude
}

/**
 * Seat one instance without building an Object3D for it: rotate and scale the
 * prototype's bounding box the same way the instance will be, then drop it
 * until its lowest point meets the sand.
 */
function seatMatrix(protoBox: THREE.Box3, p: Placement): THREE.Matrix4 {
  const spinQ = new THREE.Quaternion().setFromAxisAngle(UP, p.spin);
  const q = new THREE.Quaternion();
  if (p.slope > 0) {
    const tilt = new THREE.Quaternion().setFromUnitVectors(UP, terrainNormal(p.x, p.z));
    if (p.slope < 1) tilt.slerp(new THREE.Quaternion(), 1 - p.slope);
    q.copy(tilt).multiply(spinQ);
  } else {
    q.copy(spinQ);
  }
  const scale = new THREE.Vector3(p.scale, p.scale, p.scale);
  const rs = new THREE.Matrix4().compose(new THREE.Vector3(), q, scale);
  const base = protoBox.clone().applyMatrix4(rs).min.y;
  return new THREE.Matrix4().compose(
    new THREE.Vector3(p.x, terrainHeight(p.x, p.z) - base - p.sink, p.z), q, scale,
  );
}

/**
 * Build one InstancedMesh per prototype and spread the placements across them.
 * Variety comes from having a handful of prototypes plus per-instance scale,
 * spin and colour — not from a unique mesh per plant.
 */
export function buildPlantField(
  prototypes: THREE.BufferGeometry[],
  placements: Placement[],
  opts: { side?: THREE.Side; roughness?: number; castShadow?: boolean } = {},
): THREE.InstancedMesh[] {
  const { material, depthMaterial } = makeSwayMaterial(opts);
  const buckets: Placement[][] = prototypes.map(() => []);
  placements.forEach((p, i) => buckets[i % prototypes.length].push(p));

  const out: THREE.InstancedMesh[] = [];
  prototypes.forEach((geo, gi) => {
    const group = buckets[gi];
    if (!group.length) return;
    geo.computeBoundingBox();
    const box = geo.boundingBox!;

    const mesh = new THREE.InstancedMesh(geo, material, group.length);
    const sway = new Float32Array(group.length * 3);
    group.forEach((p, i) => {
      mesh.setMatrixAt(i, seatMatrix(box, p));
      mesh.setColorAt(i, p.colour);
      sway.set(p.sway, i * 3);
    });
    geo.setAttribute('iSway', new THREE.InstancedBufferAttribute(sway, 3));
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = opts.castShadow ?? true;
    mesh.receiveShadow = true;
    mesh.customDepthMaterial = depthMaterial;
    // the sway moves verts outside the baked bounds; skip the stale test
    mesh.frustumCulled = false;
    out.push(mesh);
  });
  return out;
}

/** Merge a built prop down to one geometry, ready to be a prototype. */
export function toPrototype(source: THREE.Object3D): THREE.BufferGeometry {
  const flat = flattenProp(source);
  const geos: THREE.BufferGeometry[] = [];
  flat.traverse((o) => {
    const m = o as THREE.Mesh;
    if (m.isMesh) geos.push(m.geometry.clone());
  });
  const merged = geos.length === 1 ? geos[0] : mergeGeometries(geos, false)!;
  return addBendWeight(merged);
}

// --- fish -------------------------------------------------------------------
/**
 * Fish are lofted from a profile rather than assembled out of primitives.
 *
 * The old ones were a sphere scaled `(length, height, width)` on `(x, y, z)`
 * while every other part used +Z as forward — so the body was a pancake turned
 * broadside to the direction of travel and the head, tail and teeth floated in
 * the gaps around it. Building the whole animal from one envelope function
 * means there are no gaps to get wrong: the fins grow off the surface the body
 * actually has, and the eyes sit on it by construction.
 *
 * Forward is +Z, up is +Y, and `s` runs 0 at the snout to 1 at the tail root.
 */

export const FISH = {
  // reef fish, picked to sit with the coral and anemone palettes
  prey: [0xffc23d, 0xff8b3d, 0x3fd0c9, 0x4aa3ff, 0xff6f91, 0xf2f0e9, 0xffe27a, 0x9d7bff],
  // predators read as silhouettes: cold, desaturated, low value
  predator: [0x53646f, 0x3d4a58, 0x5d5066, 0x466876, 0x415044],
};

export interface FishProfile {
  length: number;     // snout to tail root
  depth: number;      // greatest body height
  width: number;      // greatest body width — always the smallest of the three
  peak: number;       // where along the body it is deepest
  noseRound: number;  // <1 blunt, >1 pointed
  peduncle: number;   // fraction of the envelope surviving at the tail root
  taperPow: number;
  belly: number;      // >1 gives a fuller underside than back
  tailSpread: number;
  tailLength: number;
  tailFork: number;   // 0 straight trailing edge, 1 deeply forked
  dorsal: number;     // dorsal fin height, as a fraction of depth
  bands: number;      // vertical bars; 0 for none
}

/** Body half-thickness at `s`, as a fraction of the maximum. */
function envelope(s: number, p: FishProfile): number {
  const nose = Math.pow(Math.min(s / p.peak, 1), p.noseRound);
  const t = Math.max(s - p.peak, 0) / (1 - p.peak);
  return nose * (1 - (1 - p.peduncle) * Math.pow(t, p.taperPow));
}

const FISH_STATIONS = 15;
const FISH_RADIAL = 12;

/** The head is rigid — real fish do not bend forward of the gills, and it
 *  means the eyes and jaw can be static geometry that still lines up. */
const RIGID = 0.3;

/** A point on the body surface. `k` is the radial step, 0 = spine, half = belly. */
function surface(s: number, k: number, p: FishProfile, out = new THREE.Vector3()): THREE.Vector3 {
  const e = envelope(s, p);
  const a = (k / FISH_RADIAL) * Math.PI * 2;
  const cy = Math.cos(a), sx = Math.sin(a);
  const hh = p.depth * 0.5 * e;
  return out.set(
    sx * p.width * 0.5 * e,
    cy >= 0 ? cy * hh : cy * hh * p.belly,
    p.length * (0.5 - s),
  );
}

/**
 * Triangle soup with a shade multiplier and a swim weight per vertex.
 * Non-indexed on purpose: `computeVertexNormals` then gives per-face normals,
 * which is the faceted look the rest of the reef is built in.
 */
class Soup {
  private p: number[] = [];
  private c: number[] = [];
  private w: number[] = [];

  vert(v: THREE.Vector3, shade: number | THREE.Color, wave: number): void {
    this.p.push(v.x, v.y, v.z);
    if (typeof shade === 'number') this.c.push(shade, shade, shade);
    else this.c.push(shade.r, shade.g, shade.b);
    this.w.push(wave);
  }

  tri(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3,
      sa: number | THREE.Color, sb: number | THREE.Color, sc: number | THREE.Color,
      wa: number, wb = wa, wc = wa): void {
    this.vert(a, sa, wa); this.vert(b, sb, wb); this.vert(c, sc, wc);
  }

  quad(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, d: THREE.Vector3,
       sa: number | THREE.Color, sb: number | THREE.Color, sc: number | THREE.Color, sd: number | THREE.Color,
       wa: number, wb: number, wc: number, wd: number): void {
    this.tri(a, b, c, sa, sb, sc, wa, wb, wc);
    this.tri(a, c, d, sa, sc, sd, wa, wc, wd);
  }

  /** Fold a primitive in, transformed — for eyeballs and teeth. */
  add(geo: THREE.BufferGeometry, m: THREE.Matrix4, shade: number | THREE.Color, wave: number): void {
    const g = geo.index ? geo.toNonIndexed() : geo;
    const pos = g.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) this.vert(v.fromBufferAttribute(pos, i).applyMatrix4(m), shade, wave);
    if (g !== geo) g.dispose();
  }

  get empty(): boolean { return this.p.length === 0; }

  geometry(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.setAttribute('aWave', new THREE.Float32BufferAttribute(this.w, 1));
    g.computeVertexNormals();
    return g;
  }
}

/**
 * Counter-shading, plus the markings that make a low-poly fish read as a fish:
 * dark back, pale belly, a gill arc behind the head and a mouth line on the
 * jaw. All of it is vertex shade on geometry that already exists, so none of
 * it can drift out of place.
 */
function bodyShade(s: number, k: number, p: FishProfile): number {
  const a = (k / FISH_RADIAL) * Math.PI * 2;
  const t = Math.cos(a);                               // +1 spine, -1 belly
  let shade = t >= 0 ? 1 - 0.46 * t : 1 + 0.34 * -t;
  if (p.bands > 0) {
    const bar = Math.sin(s * p.bands * Math.PI * 2 + 0.7);
    if (bar > 0.45) shade *= 0.6;
  }
  const gill = Math.abs(s - 0.27);
  if (gill < 0.022) shade *= 0.55;                     // operculum seam
  const jaw = Math.abs(s - 0.1) < 0.075 && t < -0.25 && t > -0.86;
  if (jaw) shade *= 0.42;                              // mouth line
  return shade;
}

function buildFishBody(soup: Soup, p: FishProfile, wave: (z: number) => number): void {
  const a = new THREE.Vector3(), b = new THREE.Vector3();
  const c = new THREE.Vector3(), d = new THREE.Vector3();
  // stations bunch toward the snout, where the envelope turns hardest
  const st = (i: number) => Math.pow(i / (FISH_STATIONS - 1), 1.35);

  for (let i = 0; i < FISH_STATIONS - 1; i++) {
    const s0 = st(i), s1 = st(i + 1);
    for (let k = 0; k < FISH_RADIAL; k++) {
      const k1 = (k + 1) % FISH_RADIAL;
      surface(s0, k, p, a); surface(s0, k1, p, b);
      surface(s1, k1, p, c); surface(s1, k, p, d);
      const w0 = wave(a.z), w1 = wave(d.z);
      if (i === 0) {
        // the nose ring is a point; fan rather than degenerate quads
        soup.tri(a, c, d, bodyShade(s0, k, p), bodyShade(s1, k1, p), bodyShade(s1, k, p), w0, w1, w1);
      } else {
        soup.quad(a, b, c, d,
          bodyShade(s0, k, p), bodyShade(s0, k1, p), bodyShade(s1, k1, p), bodyShade(s1, k, p),
          w0, w0, w1, w1);
      }
    }
  }
  // close the caudal peduncle
  const centre = new THREE.Vector3(0, 0, -p.length * 0.5);
  const wEnd = wave(centre.z);
  for (let k = 0; k < FISH_RADIAL; k++) {
    surface(1, k, p, a); surface(1, (k + 1) % FISH_RADIAL, p, b);
    soup.tri(centre, b, a, 0.8, 0.8, 0.8, wEnd);
  }
}

/** A fin that grows off the spine (dorsal) or the belly (anal). */
function ridgeFin(soup: Soup, p: FishProfile, wave: (z: number) => number,
                  s0: number, s1: number, height: number, up: boolean, rake: number): void {
  const SEG = 6;
  const k = up ? 0 : FISH_RADIAL / 2;
  const base = new THREE.Vector3(), tip = new THREE.Vector3();
  const nBase = new THREE.Vector3(), nTip = new THREE.Vector3();
  for (let i = 0; i < SEG; i++) {
    const u0 = i / SEG, u1 = (i + 1) / SEG;
    // a rounded sail: tallest in the middle, tapering into the body at both ends
    const h = (u: number) => height * Math.sin(Math.PI * Math.pow(u, 0.8));
    const at = (u: number, bv: THREE.Vector3, tv: THREE.Vector3) => {
      const s = s0 + (s1 - s0) * u;
      surface(s, k, p, bv);
      tv.set(0, bv.y + (up ? h(u) : -h(u)), bv.z - h(u) * rake);
    };
    at(u0, base, tip); at(u1, nBase, nTip);
    const wb = wave(base.z), wt = wave(tip.z), wnb = wave(nBase.z), wnt = wave(nTip.z);
    soup.quad(base.clone(), tip.clone(), nTip.clone(), nBase.clone(),
      0.62, 0.8, 0.8, 0.62, wb, wt, wnt, wnb);
  }
}

/** The caudal fin, as a span across the trailing edge rather than a cone. */
function caudalFin(soup: Soup, p: FishProfile, wave: (z: number) => number): void {
  const SPAN = 8;
  const zr = -p.length * 0.5;
  const rootH = p.depth * 0.5 * p.peduncle;
  const pt = (v: number, edge: boolean) => {
    const m = Math.abs(v);
    return edge
      ? new THREE.Vector3(0, p.tailSpread * v,
          zr - p.tailLength * (1 - p.tailFork + p.tailFork * m))
      : new THREE.Vector3(0, rootH * v * 1.1, zr + p.tailLength * 0.06 * (1 - m));
  };
  for (let i = 0; i < SPAN; i++) {
    const v0 = -1 + (2 * i) / SPAN, v1 = -1 + (2 * (i + 1)) / SPAN;
    const b0 = pt(v0, false), t0 = pt(v0, true);
    const b1 = pt(v1, false), t1 = pt(v1, true);
    soup.quad(b0, t0, t1, b1, 0.7, 1.0, 1.0, 0.7,
      wave(b0.z), wave(t0.z), wave(t1.z), wave(b1.z));
  }
}

/**
 * A paired fin — pectorals at the shoulder, pelvics under the belly. The leaf
 * sweeps *back* along the flank rather than standing straight out, which is
 * both what a fin does and what keeps it from reading as a wing.
 * `outY` tilts the span: 0 is horizontal, -1 straight down.
 */
function pairedFin(soup: Soup, p: FishProfile, wave: (z: number) => number,
                   s: number, k: number, len: number, outY: number,
                   waveFloor: number): void {
  const root = surface(s, k, p);
  const outX = Math.sqrt(Math.max(1 - outY * outY, 0));
  for (const side of [1, -1]) {
    const anchor = new THREE.Vector3(root.x * side, root.y, root.z);
    // t runs back along the flank, spread runs out across the fin
    const at = (t: number, spread: number) => new THREE.Vector3(
      anchor.x + outX * side * len * spread,
      anchor.y + outY * len * spread,
      anchor.z - len * t,
    );
    const a = anchor.clone();
    const b = at(0.1, 0.56);
    const c = at(0.62, 0.6);
    const d = at(0.95, 0.13);
    const w = (v: THREE.Vector3) => Math.max(wave(v.z), waveFloor);
    soup.tri(a, b, c, 0.6, 0.78, 0.74, w(a), w(b), w(c));
    soup.tri(a, c, d, 0.6, 0.74, 0.66, w(a), w(c), w(d));
  }
}

const FISH_ATTRS = `
attribute float aWave;
uniform float uTime;
uniform vec3 uSwim;    // phase, beat rate, amplitude
`;

// A travelling wave down the body: the head barely moves, the peduncle swings,
// the tail trails a beat behind. Same idea as the plant sway, keyed off body
// position instead of height.
const FISH_BODY = `
  float swimPh = uTime * uSwim.y + uSwim.x - aWave * 2.6;
  transformed.x += sin(swimPh) * uSwim.z * aWave;
`;

/** One shared program for every fish; the uniforms differ per animal. */
function injectSwim(shader: { vertexShader: string; uniforms: any }, swim: { value: THREE.Vector3 }): void {
  shader.uniforms.uTime = swayTime;
  shader.uniforms.uSwim = swim;
  shader.vertexShader = FISH_ATTRS + shader.vertexShader;
  shader.vertexShader = shader.vertexShader.replace(
    '#include <begin_vertex>', '#include <begin_vertex>\n' + FISH_BODY);
}

export interface FishRig {
  group: THREE.Group;
  body: THREE.Mesh;
  material: THREE.MeshStandardMaterial;
  swim: { value: THREE.Vector3 };   // phase, beat rate, amplitude
  cruise: number;                   // resting beat rate
  length: number;
}

/** Eyes and teeth: white/black regardless of what colour the fish is, and
 *  forward of the rigid line, so one static material serves the whole shoal. */
let fishTrimMaterial: THREE.MeshBasicMaterial | null = null;
function trimMaterial(): THREE.MeshBasicMaterial {
  if (!fishTrimMaterial) {
    fishTrimMaterial = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
  }
  return fishTrimMaterial;
}

export function fishProfile(rng: () => number, isPredator: boolean): FishProfile {
  if (isPredator) {
    return {
      length: 1.7 + rng() * 0.5,
      depth: 0.46, width: 0.30,
      peak: 0.28, noseRound: 0.62, peduncle: 0.13, taperPow: 1.45, belly: 1.12,
      tailSpread: 0.42, tailLength: 0.46, tailFork: 0.55,
      dorsal: 0.42, bands: 0,
    };
  }
  // reef fish: short, deep-bodied and laterally compressed
  return {
    length: 0.72 + rng() * 0.26,
    depth: 0.5, width: 0.19,
    peak: 0.38, noseRound: 0.5, peduncle: 0.17, taperPow: 1.2, belly: 1.2,
    tailSpread: 0.3, tailLength: 0.26, tailFork: 0.34,
    dorsal: 0.42, bands: rng() < 0.45 ? 3 : 0,
  };
}

export function buildFish(rng: () => number, isPredator: boolean, colour?: number): FishRig {
  const p = fishProfile(rng, isPredator);
  const span = p.length * 0.5 + p.tailLength;
  const zRigid = p.length * (0.5 - RIGID);
  // 0 through the head, rising to 1 at the tail tip
  const wave = (z: number) => {
    const t = Math.min(Math.max((zRigid - z) / (zRigid + span), 0), 1);
    return Math.pow(t, 1.5);
  };

  const body = new Soup();
  buildFishBody(body, p, wave);
  caudalFin(body, p, wave);
  // predators carry two short dorsals; reef fish one long sail
  if (isPredator) {
    ridgeFin(body, p, wave, 0.32, 0.55, p.depth * p.dorsal, true, 0.35);
    ridgeFin(body, p, wave, 0.65, 0.83, p.depth * 0.2, true, 0.3);
  } else {
    ridgeFin(body, p, wave, 0.32, 0.86, p.depth * p.dorsal, true, 0.35);
  }
  ridgeFin(body, p, wave, 0.64, 0.9, p.depth * (isPredator ? 0.18 : 0.26), false, 0.3);
  pairedFin(body, p, wave, 0.32, 3, p.length * (isPredator ? 0.24 : 0.3), -0.55, 0.26);
  pairedFin(body, p, wave, 0.47, 5, p.length * (isPredator ? 0.11 : 0.15), -0.88, 0.12);

  const geo = body.geometry();
  // the swim pushes vertices past the baked bounds; keep culling honest
  geo.computeBoundingSphere();
  geo.boundingSphere!.radius += p.length * 0.14;

  const swim = { value: new THREE.Vector3(rng() * Math.PI * 2, 0, p.length * 0.1) };
  const material = new THREE.MeshStandardMaterial({
    color: colour ?? pick(rng, isPredator ? FISH.predator : FISH.prey),
    roughness: isPredator ? 0.62 : 0.42,
    metalness: isPredator ? 0.18 : 0.34,
    vertexColors: true,
    side: THREE.DoubleSide,
    flatShading: true,
  });
  material.onBeforeCompile = (s) => injectSwim(s, swim);
  material.customProgramCacheKey = () => 'reef-swim';

  const mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = true;

  // --- eyes and jaw, on the rigid head
  const trim = new Soup();
  const eyeS = isPredator ? 0.14 : 0.17;
  const eyeK = FISH_RADIAL * 0.19;            // up on the flank, not on the spine
  const eyeAt = surface(eyeS, eyeK, p);
  const r = p.depth * (isPredator ? 0.095 : 0.115);
  const ball = new THREE.SphereGeometry(r, 8, 6);
  const pupil = new THREE.SphereGeometry(r * 0.55, 6, 5);
  const iris = new THREE.Color(isPredator ? 0xd41d2b : 0xd9d3c6);
  const black = new THREE.Color(0x05070a);
  for (const side of [1, -1]) {
    const at = new THREE.Vector3(eyeAt.x * side * 0.72, eyeAt.y, eyeAt.z);
    trim.add(ball, new THREE.Matrix4().makeTranslation(at.x, at.y, at.z), iris, 0);
    trim.add(pupil, new THREE.Matrix4().makeTranslation(
      at.x + r * 0.62 * side, at.y, at.z + r * 0.42), black, 0);
  }
  if (isPredator) {
    // a lower jaw of teeth, seated on the jaw line instead of floating past it
    const tooth = new THREE.ConeGeometry(p.depth * 0.032, p.depth * 0.13, 4);
    const white = new THREE.Color(0xf2f0e9);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI, 0, 0));
    const one = new THREE.Vector3(1, 1, 1);
    for (let i = 0; i < 5; i++) {
      const s = 0.05 + i * 0.032;
      const at = surface(s, FISH_RADIAL * 0.42, p);
      for (const side of [1, -1]) {
        trim.add(tooth, m.compose(
          new THREE.Vector3(at.x * side, at.y + p.depth * 0.04, at.z), q, one), white, 0);
      }
    }
    tooth.dispose();
  }
  ball.dispose(); pupil.dispose();

  const trimMesh = new THREE.Mesh(trim.geometry(), trimMaterial());

  const group = new THREE.Group();
  group.add(mesh, trimMesh);
  const rig: FishRig = {
    group, body: mesh, material, swim,
    cruise: isPredator ? 5.5 : 8.5,
    length: p.length + p.tailLength,
  };
  setFishGait(rig, 0, rig.cruise);
  return rig;
}

/**
 * Change the tail-beat rate without the tail jumping: re-base the phase so the
 * stroke is continuous across the rate change.
 */
export function setFishGait(rig: FishRig, t: number, rate: number): void {
  const s = rig.swim.value;
  s.x += t * (s.y - rate);
  s.y = rate;
}
