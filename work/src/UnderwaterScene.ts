import * as THREE from 'three';
import * as Reef from './reef';

interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  originalY: number;
}

interface Fish {
  group: THREE.Group;
  velocity: THREE.Vector3;
  targetDirection: THREE.Vector3;
  changeTimer: number;
  isPredator: boolean;
  speed: number;
  baseSpeed: number;
  isAlive: boolean;
  fleeTarget: Fish | null;
  chaseTarget: Fish | null;
  glowingUntil: number; // timestamp when glow effect ends
}

interface SeaPlant {
  mesh: THREE.Mesh;
  group: THREE.Group;
  phase: number;
  speed: number;
}

interface LocationPoint {
  name: string;
  position: THREE.Vector3;
  rotation: THREE.Euler; // Camera rotation in Euler angles (x=pitch, y=yaw, z=roll)
  marker: THREE.Group;
  lightColor: number;
  fogDensity: number;
  ambientIntensity: number;
}

export class UnderwaterScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private clock: THREE.Clock;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;

  private particles: Particle[] = [];
  private fish: Fish[] = [];
  private seaPlants: SeaPlant[] = [];
  private rng = Reef.makeRng(20260809);
  private mats = new Reef.MaterialCache();
  private anemones: Reef.Anemone[] = [];
  private jellies: Reef.Jelly[] = [];
  private schools: Reef.School[] = [];
  private reefClock = 0;
  private causticPlanes: THREE.Mesh[] = [];
  private godRays: THREE.Mesh[] = [];

  private mouseX = 0;
  private mouseY = 0;

  // Camera transition
  private cameraTarget: THREE.Vector3;
  private cameraTargetRotation: THREE.Euler;
  private isTransitioning = false;
  private currentLocation: string = 'home';

  // Location points
  private locations: Map<string, LocationPoint> = new Map();
  private locationMarkers: THREE.Group[] = [];

  // Lighting
  private ambientLight!: THREE.AmbientLight;
  private sunLight!: THREE.DirectionalLight;
  private currentLightColor = new THREE.Color(0x88ccff);
  private targetLightColor = new THREE.Color(0x88ccff);
  private currentFogDensity = 0.015;
  private targetFogDensity = 0.015;

  // Callbacks
  private onLocationChange?: (location: string) => void;

  // Fish settings
  private readonly PREDATOR_COUNT = 5;
  private readonly PREY_COUNT = 20;
  private readonly PREDATOR_SPEED = 0.12;
  private readonly PREY_SPEED = 0.08;
  private readonly CHASE_DISTANCE = 15;
  private readonly FLEE_DISTANCE = 12;
  private readonly EAT_DISTANCE = 1.5;

  constructor(container: HTMLElement) {
    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a3550);
    this.scene.fog = new THREE.FogExp2(0x0d3f5e, 0.0115);

    // Camera setup - start at home position looking into the scene
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // Home position: set camera position and rotation (Euler angles)
    this.camera.position.set(0, 8, -25);
    this.cameraTargetRotation = new THREE.Euler(0, Math.PI, 0); // 180 degrees yaw - looking toward -Z
    this.camera.rotation.copy(this.cameraTargetRotation);
    this.cameraTarget = this.camera.position.clone();

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    container.appendChild(this.renderer.domElement);

    this.setupLighting();
    this.createSeaFloor();
    this.createParticles();
    this.createFishEcosystem();
    this.createCorals();
    this.createSeaPlants();
    this.createGodRays();
    this.createCaustics();
    this.createRocks();
    this.createBubbles();
    this.createReefLife();
    this.createLocationPoints();

    this.setupMouseControls();
    this.setupClickHandler();
  }

  setLocationChangeCallback(callback: (location: string) => void): void {
    this.onLocationChange = callback;
  }

  private setupLighting(): void {
    // Water this shallow scatters a lot of light back up; the old ambient was
    // so dim the coral palette never showed.
    this.ambientLight = new THREE.AmbientLight(0x2f6f96, 1.05);
    this.scene.add(this.ambientLight);

    this.sunLight = new THREE.DirectionalLight(0xbfe8ff, 2.1);
    this.sunLight.position.set(10, 50, 10);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 100;
    this.sunLight.shadow.camera.left = -50;
    this.sunLight.shadow.camera.right = 50;
    this.sunLight.shadow.camera.top = 50;
    this.sunLight.shadow.camera.bottom = -50;
    this.scene.add(this.sunLight);

    const fillLight = new THREE.DirectionalLight(0x4d9dbf, 0.75);
    fillLight.position.set(-10, 20, -10);
    this.scene.add(fillLight);

    // bounce off the sand, so props are not silhouettes from below
    const bounce = new THREE.HemisphereLight(0x86c6d8, 0x54604f, 0.55);
    this.scene.add(bounce);

    const glowLight1 = new THREE.PointLight(0x00ffaa, 0.7, 30);
    glowLight1.position.set(-15, 2, -10);
    this.scene.add(glowLight1);

    const glowLight2 = new THREE.PointLight(0x4488ff, 0.7, 30);
    glowLight2.position.set(15, 3, -15);
    this.scene.add(glowLight2);
  }

  private createLocationPoints(): void {
    // Home - camera looking forward (Euler: x=pitch down/up, y=yaw left/right, z=roll)
    this.locations.set('home', {
      name: 'home',
      position: new THREE.Vector3(0, 8, -15),
      rotation: new THREE.Euler(0, Math.PI, 0), // 180 degrees yaw - looking toward -Z
      marker: new THREE.Group(),
      lightColor: 0x88ccff,
      fogDensity: 0.015,
      ambientIntensity: 0.4,
    });

    // About - left side, orb in front of home camera
    const aboutMarker = this.createLocationMarker('About', 0x4ecdc4);
    aboutMarker.position.set(-12, 6, 0);
    this.scene.add(aboutMarker);
    this.locationMarkers.push(aboutMarker);
    this.locations.set('about', {
      name: 'about',
      position: new THREE.Vector3(-6, 6, -10),
      rotation: new THREE.Euler(0, Math.PI, 0), // Yaw left toward the orb
      marker: aboutMarker,
      lightColor: 0x4ecdc4,
      fogDensity: 0.012,
      ambientIntensity: 0.5,
    });

    // Games - right side, orb in front of home camera
    const gamesMarker = this.createLocationMarker('Games', 0xff6b6b);
    gamesMarker.position.set(12, 4, 5);
    this.scene.add(gamesMarker);
    this.locationMarkers.push(gamesMarker);
    this.locations.set('games', {
      name: 'games',
      position: new THREE.Vector3(6, 5, -8),
      rotation: new THREE.Euler(0, Math.PI, 0), // Yaw right toward the orb
      marker: gamesMarker,
      lightColor: 0xff8866,
      fogDensity: 0.018,
      ambientIntensity: 0.45,
    });

    // Contact - deeper into scene, center
    const contactMarker = this.createLocationMarker('Contact', 0xaa96da);
    contactMarker.position.set(0, 3, 15);
    this.scene.add(contactMarker);
    this.locationMarkers.push(contactMarker);
    this.locations.set('contact', {
      name: 'contact',
      position: new THREE.Vector3(0, 5, 0),
      rotation: new THREE.Euler(0, Math.PI, 0), // Looking straight forward
      marker: contactMarker,
      lightColor: 0xaa96da,
      fogDensity: 0.025,
      ambientIntensity: 0.3,
    });

    // Projects - upper center area
    const projectsMarker = this.createLocationMarker('Projects', 0x64c896);
    projectsMarker.position.set(-6, 8, 8);
    this.scene.add(projectsMarker);
    this.locationMarkers.push(projectsMarker);
    this.locations.set('projects', {
      name: 'projects',
      position: new THREE.Vector3(-3, 6, -5),
      rotation: new THREE.Euler(0, Math.PI, 0),
      marker: projectsMarker,
      lightColor: 0x64c896,
      fogDensity: 0.014,
      ambientIntensity: 0.45,
    });
  }

  private createLocationMarker(label: string, color: number): THREE.Group {
    const group = new THREE.Group();
    group.userData = { type: 'location', label: label.toLowerCase() };

    // Glowing orb
    const orbGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.6,
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    group.add(orb);

    // Outer glow
    const glowGeometry = new THREE.SphereGeometry(2.2, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    group.add(glow);

    // Pulsing ring
    const ringGeometry = new THREE.RingGeometry(2.5, 3, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    // Point light
    const light = new THREE.PointLight(color, 1, 20);
    group.add(light);

    return group;
  }

  private createSeaFloor(): void {
    this.scene.add(Reef.buildSeafloor());
  }

  private createParticles(): void {
    const particleGeometry = new THREE.SphereGeometry(0.05, 5, 4);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0xaaddff,
      transparent: true,
      opacity: 0.6,
    });

    for (let i = 0; i < 500; i++) {
      // one shared material: the clone gave every mote its own draw call and
      // nothing ever varied per particle
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      particle.position.set(
        (Math.random() - 0.5) * 80,
        Math.random() * 40 - 5,
        (Math.random() - 0.5) * 80
      );

      this.particles.push({
        mesh: particle,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          Math.random() * 0.01 + 0.005,
          (Math.random() - 0.5) * 0.02
        ),
        originalY: particle.position.y,
      });

      this.scene.add(particle);
    }
  }

  private createBubbles(): void {
    const bubbleGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const bubbleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      roughness: 0,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0,
    });

    for (let i = 0; i < 100; i++) {
      const scale = Math.random() * 0.8 + 0.2;
      const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial.clone());
      bubble.scale.setScalar(scale);
      bubble.position.set(
        (Math.random() - 0.5) * 60,
        Math.random() * 30 - 5,
        (Math.random() - 0.5) * 60
      );

      this.particles.push({
        mesh: bubble,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          Math.random() * 0.03 + 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        originalY: bubble.position.y,
      });

      this.scene.add(bubble);
    }
  }

  private createFishEcosystem(): void {
    // Create predators (larger, darker colors)
    for (let i = 0; i < this.PREDATOR_COUNT; i++) {
      this.spawnFish(true);
    }

    // Create prey (smaller, brighter colors)
    for (let i = 0; i < this.PREY_COUNT; i++) {
      this.spawnFish(false);
    }
  }

  private spawnFish(isPredator: boolean, offScreen: boolean = false): void {
    const fish = this.createSingleFish(isPredator);

    let x: number, y: number, z: number;

    if (offScreen) {
      // Spawn off screen
      const side = Math.floor(Math.random() * 4);
      y = Math.random() * 15 + 2;
      switch (side) {
        case 0: x = -40; z = (Math.random() - 0.5) * 60; break;
        case 1: x = 40; z = (Math.random() - 0.5) * 60; break;
        case 2: x = (Math.random() - 0.5) * 60; z = -50; break;
        default: x = (Math.random() - 0.5) * 60; z = 30; break;
      }
    } else {
      x = (Math.random() - 0.5) * 50;
      y = Math.random() * 15 + 2;
      z = (Math.random() - 0.5) * 50 - 10;
    }

    fish.group.position.set(x, y, z);

    const direction = new THREE.Vector3(
      Math.random() - 0.5,
      (Math.random() - 0.5) * 0.2,
      Math.random() - 0.5
    ).normalize();

    const speed = isPredator ? this.PREDATOR_SPEED : this.PREY_SPEED;

    const fishData: Fish = {
      group: fish.group,
      velocity: direction.multiplyScalar(speed * (0.8 + Math.random() * 0.4)),
      targetDirection: direction.clone(),
      changeTimer: Math.random() * 5,
      isPredator,
      speed,
      baseSpeed: speed,
      isAlive: true,
      fleeTarget: null,
      chaseTarget: null,
      glowingUntil: 0,
    };

    this.fish.push(fishData);
    this.scene.add(fish.group);
  }

  private createSingleFish(isPredator: boolean): { group: THREE.Group } {
    const group = new THREE.Group();

    // Create a container that we'll rotate to align with lookAt
    const fishContainer = new THREE.Group();

    // Predators: dark, menacing colors. Prey: bright, colorful
    const predatorColors = [0x2d3436, 0x636e72, 0x4a0e0e, 0x1e3d59, 0x0d0d0d];
    const preyColors = [0xff6b6b, 0x4ecdc4, 0xffe66d, 0x95e1d3, 0xf38181, 0xaa96da, 0x74b9ff];

    const colors = isPredator ? predatorColors : preyColors;
    const fishColor = colors[Math.floor(Math.random() * colors.length)];

    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: fishColor,
      roughness: isPredator ? 0.6 : 0.3,
      metalness: isPredator ? 0.2 : 0.5,
    });

    // Fish body - ellipsoid shape (main body)
    const bodyLength = isPredator ? 1.5 : 0.8;
    const bodyHeight = isPredator ? 0.5 : 0.3;
    const bodyWidth = isPredator ? 0.4 : 0.25;
    const bodyGeometry = new THREE.SphereGeometry(1, 16, 12);
    bodyGeometry.scale(bodyLength / 2, bodyHeight / 2, bodyWidth / 2);
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.castShadow = true;
    fishContainer.add(body);

    // Head - pointed cone at the front (merged with body smoothly)
    const headLength = isPredator ? 0.6 : 0.35;
    const headGeometry = new THREE.ConeGeometry(bodyHeight / 2.2, headLength, 12);
    headGeometry.rotateX(-Math.PI / 2); // Point forward (+Z)
    const head = new THREE.Mesh(headGeometry, bodyMaterial);
    head.position.z = bodyLength / 2.5;
    head.castShadow = true;
    fishContainer.add(head);

    // Tail fin - V-shaped at the back
    const tailFinGeometry = new THREE.ConeGeometry(
      isPredator ? 0.45 : 0.28,
      isPredator ? 0.7 : 0.45,
      4
    );
    tailFinGeometry.rotateX(Math.PI / 2); // Point backward (-Z)
    tailFinGeometry.rotateZ(Math.PI / 4); // Diamond shape
    const tailFin = new THREE.Mesh(tailFinGeometry, bodyMaterial);
    tailFin.position.z = -bodyLength / 2 - (isPredator ? 0.25 : 0.15);
    tailFin.castShadow = true;
    fishContainer.add(tailFin);

    // Tail connector (narrow part before tail)
    const tailConnectorGeometry = new THREE.CylinderGeometry(
      isPredator ? 0.06 : 0.04,
      isPredator ? 0.12 : 0.08,
      isPredator ? 0.3 : 0.2,
      8
    );
    tailConnectorGeometry.rotateX(Math.PI / 2);
    const tailConnector = new THREE.Mesh(tailConnectorGeometry, bodyMaterial);
    tailConnector.position.z = -bodyLength / 2;
    fishContainer.add(tailConnector);

    // Eyes - on the sides of the head
    const eyeGeometry = new THREE.SphereGeometry(isPredator ? 0.08 : 0.045, 8, 8);
    const eyeMaterial = new THREE.MeshBasicMaterial({
      color: isPredator ? 0xff0000 : 0x111111
    });
    const eyePupilGeometry = new THREE.SphereGeometry(isPredator ? 0.04 : 0.025, 8, 8);
    const eyePupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

    const eyeZ = bodyLength / 4;
    const eyeX = bodyWidth / 2 + (isPredator ? 0.03 : 0.02);
    const eyeY = isPredator ? 0.1 : 0.06;

    const eye1 = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eye1.position.set(eyeX, eyeY, eyeZ);
    fishContainer.add(eye1);

    const pupil1 = new THREE.Mesh(eyePupilGeometry, eyePupilMaterial);
    pupil1.position.set(eyeX + 0.02, eyeY, eyeZ + 0.02);
    fishContainer.add(pupil1);

    const eye2 = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eye2.position.set(-eyeX, eyeY, eyeZ);
    fishContainer.add(eye2);

    const pupil2 = new THREE.Mesh(eyePupilGeometry, eyePupilMaterial);
    pupil2.position.set(-eyeX - 0.02, eyeY, eyeZ + 0.02);
    fishContainer.add(pupil2);

    // Dorsal fin - on top of body (triangular shape)
    const dorsalFinShape = new THREE.Shape();
    dorsalFinShape.moveTo(0, 0);
    dorsalFinShape.lineTo(isPredator ? 0.4 : 0.25, isPredator ? 0.4 : 0.25);
    dorsalFinShape.lineTo(isPredator ? 0.5 : 0.3, 0);
    dorsalFinShape.lineTo(0, 0);

    const dorsalFinGeometry = new THREE.ExtrudeGeometry(dorsalFinShape, {
      depth: 0.02,
      bevelEnabled: false
    });
    dorsalFinGeometry.rotateX(-Math.PI / 2);
    dorsalFinGeometry.rotateY(Math.PI);
    const dorsalFin = new THREE.Mesh(dorsalFinGeometry, bodyMaterial);
    dorsalFin.position.set(0.01, bodyHeight / 2 - 0.02, isPredator ? 0.1 : 0.05);
    dorsalFin.castShadow = true;
    fishContainer.add(dorsalFin);

    // Side fins (pectoral fins) - more fin-like shape
    const pectoralFinShape = new THREE.Shape();
    pectoralFinShape.moveTo(0, 0);
    pectoralFinShape.lineTo(isPredator ? 0.3 : 0.18, isPredator ? 0.15 : 0.1);
    pectoralFinShape.lineTo(isPredator ? 0.35 : 0.22, 0);
    pectoralFinShape.lineTo(0, 0);

    const pectoralFinGeometry = new THREE.ExtrudeGeometry(pectoralFinShape, {
      depth: 0.015,
      bevelEnabled: false
    });

    const leftFin = new THREE.Mesh(pectoralFinGeometry, bodyMaterial);
    leftFin.position.set(bodyWidth / 2, -0.02, bodyLength / 6);
    leftFin.rotation.z = -0.5;
    leftFin.rotation.y = 0.3;
    fishContainer.add(leftFin);

    const rightFin = new THREE.Mesh(pectoralFinGeometry.clone(), bodyMaterial);
    rightFin.position.set(-bodyWidth / 2 - 0.02, -0.02, bodyLength / 6);
    rightFin.rotation.z = 0.5;
    rightFin.rotation.y = -0.3;
    rightFin.scale.x = -1;
    fishContainer.add(rightFin);

    // Predators have teeth/mouth
    if (isPredator) {
      const teethMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const mouthZ = bodyLength / 2.5 + headLength - 0.15;
      for (let i = 0; i < 4; i++) {
        const tooth = new THREE.Mesh(
          new THREE.ConeGeometry(0.025, 0.08, 4),
          teethMaterial
        );
        tooth.position.set((i - 1.5) * 0.06, -0.08, mouthZ);
        tooth.rotation.x = Math.PI;
        fishContainer.add(tooth);
      }
    }

    group.add(fishContainer);

    const scale = isPredator
      ? 1.0 + Math.random() * 0.4
      : 0.5 + Math.random() * 0.4;
    group.scale.setScalar(scale);

    group.userData = { isPredator, fishContainer };

    return { group };
  }

  // Sample terrain height at a given x, z position
  // Uses the same formula as createSeaFloor for consistency
  private createCorals(): void {
    // Reef heads cluster; bare sand between them is what makes them read.
    const heads = 7;
    for (let h = 0; h < heads; h++) {
      const ha = (h / heads) * Math.PI * 2 + this.rng() * 0.8;
      const hd = 12 + this.rng() * 26;
      const hx = Math.cos(ha) * hd;
      const hz = Math.sin(ha) * hd;
      const members = 5 + Math.floor(this.rng() * 6);

      for (let i = 0; i < members; i++) {
        const r = this.rng();
        const raw =
          r < 0.44 ? Reef.buildBranchingCoral(this.rng, this.mats)
          : r < 0.68 ? Reef.buildBrainCoral(this.rng, this.mats)
          : r < 0.86 ? Reef.buildSeaFan(this.rng, this.mats)
          : Reef.buildTubeSponge(this.rng, this.mats);
        const coral = Reef.flattenProp(raw);
        coral.userData.reef = 'coral';
        const sa = this.rng() * Math.PI * 2;
        const sd = Math.sqrt(this.rng()) * 5.5;
        Reef.seat(coral, hx + Math.cos(sa) * sd, hz + Math.sin(sa) * sd, {
          sink: 0.12, slope: 0.55, spin: this.rng() * Math.PI * 2,
        });
        this.scene.add(coral);
      }
    }
  }

  private createSeaPlants(): void {
    // Kelp stands, thickest away from the reef heads.
    for (let i = 0; i < 46; i++) {
      const kelp = Reef.buildKelp(this.rng, this.mats);
      kelp.group = Reef.flattenProp(kelp.group);
      kelp.group.userData.reef = 'kelp';
      const a = this.rng() * Math.PI * 2;
      const d = 8 + Math.sqrt(this.rng()) * 40;
      Reef.seat(kelp.group, Math.cos(a) * d, Math.sin(a) * d, {
        sink: 0.15, slope: 0.4, spin: this.rng() * Math.PI * 2,
      });
      this.seaPlants.push({
        mesh: kelp.group.children[0] as THREE.Mesh,
        group: kelp.group,
        phase: kelp.phase,
        speed: kelp.speed,
      });
      this.scene.add(kelp.group);
    }

    // Seagrass meadows — a few dense patches rather than an even sprinkle.
    for (let m = 0; m < 9; m++) {
      const ma = this.rng() * Math.PI * 2;
      const md = 10 + this.rng() * 34;
      const mx = Math.cos(ma) * md;
      const mz = Math.sin(ma) * md;
      const tufts = 14 + Math.floor(this.rng() * 16);
      for (let i = 0; i < tufts; i++) {
        const tuft = Reef.flattenProp(Reef.buildSeagrass(this.rng, this.mats));
        tuft.userData.reef = 'grass';
        const a = this.rng() * Math.PI * 2;
        const d = Math.sqrt(this.rng()) * 4.5;
        Reef.seat(tuft, mx + Math.cos(a) * d, mz + Math.sin(a) * d, {
          sink: 0.08, slope: 0.75, spin: this.rng() * Math.PI * 2,
        });
        this.seaPlants.push({
          mesh: tuft.children[0] as THREE.Mesh,
          group: tuft,
          phase: this.rng() * Math.PI * 2,
          speed: 0.9 + this.rng() * 0.8,
        });
        this.scene.add(tuft);
      }
    }
  }

  private createGodRays(): void {
    const rayGeometry = new THREE.CylinderGeometry(0.5, 3, 50, 8, 1, true);
    const rayMaterial = new THREE.MeshBasicMaterial({
      color: 0x88ccff,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });

    for (let i = 0; i < 8; i++) {
      const ray = new THREE.Mesh(rayGeometry, rayMaterial.clone());
      ray.position.set(
        (Math.random() - 0.5) * 60,
        20,
        (Math.random() - 0.5) * 60 - 20
      );
      ray.rotation.x = Math.PI + (Math.random() - 0.5) * 0.2;
      ray.rotation.z = (Math.random() - 0.5) * 0.2;

      this.godRays.push(ray);
      this.scene.add(ray);
    }
  }

  private createCaustics(): void {
    const causticGeometry = new THREE.PlaneGeometry(200, 200, 50, 50);
    const causticMaterial = new THREE.MeshBasicMaterial({
      color: 0x88ddff,
      transparent: true,
      opacity: 0.1,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });

    const causticPlane = new THREE.Mesh(causticGeometry, causticMaterial);
    causticPlane.rotation.x = -Math.PI / 2;
    causticPlane.position.y = -4.9;
    this.causticPlanes.push(causticPlane);
    this.scene.add(causticPlane);
  }

  private createReefLife(): void {
    // Anemones and urchins tuck against the reef; starfish sit on open sand.
    for (let i = 0; i < 34; i++) {
      const a = this.rng() * Math.PI * 2;
      const d = 6 + Math.sqrt(this.rng()) * 40;
      const x = Math.cos(a) * d, z = Math.sin(a) * d;
      const anem = Reef.buildAnemone(this.rng, this.mats);
      anem.mesh = Reef.flattenProp(anem.mesh);
      anem.mesh.userData.reef = 'anemone';
      Reef.seat(anem.mesh, x, z, { sink: 0.05, slope: 0.85, spin: this.rng() * Math.PI * 2 });
      this.anemones.push(anem);
      this.scene.add(anem.mesh);
    }
    for (let i = 0; i < 40; i++) {
      const a = this.rng() * Math.PI * 2;
      const d = 5 + Math.sqrt(this.rng()) * 42;
      const urchin = Reef.flattenProp(Reef.buildUrchin(this.rng, this.mats));
      urchin.userData.reef = 'urchin';
      Reef.seat(urchin, Math.cos(a) * d, Math.sin(a) * d, { sink: 0.1, slope: 0.9 });
      this.scene.add(urchin);
    }
    for (let i = 0; i < 22; i++) {
      const a = this.rng() * Math.PI * 2;
      const d = 6 + Math.sqrt(this.rng()) * 42;
      const star = Reef.flattenProp(Reef.buildStarfish(this.rng, this.mats));
      star.userData.reef = 'starfish';
      Reef.seat(star, Math.cos(a) * d, Math.sin(a) * d, { sink: 0.02, slope: 1, spin: this.rng() * Math.PI * 2 });
      this.scene.add(star);
    }

    for (let i = 0; i < 7; i++) {
      const jelly = Reef.buildJellyfish(this.rng);
      const a = this.rng() * Math.PI * 2;
      const d = Math.sqrt(this.rng()) * 34;
      jelly.group.position.set(Math.cos(a) * d, 2 + this.rng() * 9, Math.sin(a) * d);
      jelly.group.userData.reef = 'jelly';
      this.jellies.push(jelly);
      this.scene.add(jelly.group);
    }

    const schoolColours = [0xffd166, 0x8ecae6, 0xffb4a2, 0x90e0ef];
    for (let i = 0; i < 4; i++) {
      const school = Reef.buildSchool(this.rng, 34 + Math.floor(this.rng() * 26), schoolColours[i]);
      this.schools.push(school);
      this.scene.add(school.mesh);
    }
  }

  private updateReefLife(delta: number): void {
    this.reefClock += delta;
    const t = this.reefClock;
    for (const a of this.anemones) {
      const s = 1 + Math.sin(t * 1.1 + a.phase) * 0.07;
      a.mesh.scale.set(s, 1 / s, s);
    }
    for (const j of this.jellies) {
      const pulse = Math.sin(t * j.speed * 2.4 + j.phase);
      j.group.scale.set(1 + pulse * 0.11, 1 - pulse * 0.16, 1 + pulse * 0.11);
      j.group.position.y += (pulse > 0 ? 0.006 : -0.002) * j.speed;
      j.group.position.add(j.drift);
      if (j.group.position.y > 13) j.group.position.y = 2;
      if (j.group.position.length() > 46) j.drift.negate();
    }
    for (const s of this.schools) Reef.updateSchool(s, t);
  }

  private createRocks(): void {
    // Boulders, then a rubble field of smaller stones around them.
    for (let i = 0; i < 26; i++) {
      const rock = Reef.buildRock(this.rng, this.mats);
      rock.userData.reef = 'rock';
      const a = this.rng() * Math.PI * 2;
      const d = Math.sqrt(this.rng()) * 44;
      Reef.seat(rock, Math.cos(a) * d, Math.sin(a) * d, {
        sink: 0.22 + this.rng() * 0.3,   // settled into the sand, not balanced on it
        slope: 0.7,
        spin: this.rng() * Math.PI * 2,
      });
      this.scene.add(rock);
    }
    this.scene.add(Reef.buildScatter(this.rng, this.mats, {
      count: 260, radius: 52, geometry: new THREE.IcosahedronGeometry(0.22, 0),
      color: Reef.REEF.rock, minScale: 0.5, maxScale: 1.9, sink: 0.4,
    }));
    this.scene.add(Reef.buildScatter(this.rng, this.mats, {
      count: 120, radius: 48, geometry: new THREE.DodecahedronGeometry(0.13, 0),
      color: Reef.REEF.rockWarm, minScale: 0.4, maxScale: 1.2, sink: 0.45,
    }));
  }

  private setupMouseControls(): void {
    document.addEventListener('mousemove', (event) => {
      this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = (event.clientY / window.innerHeight) * 2 - 1;
      this.mouse.x = this.mouseX;
      this.mouse.y = -this.mouseY;
    });
  }

  private setupClickHandler(): void {
    this.renderer.domElement.addEventListener('click', (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);

      // Check for fish clicks first
      const fishGroups = this.fish.map(f => f.group);
      const fishIntersects = this.raycaster.intersectObjects(fishGroups, true);

      if (fishIntersects.length > 0) {
        // Find which fish was clicked
        let clickedObject = fishIntersects[0].object;
        while (clickedObject.parent && !fishGroups.includes(clickedObject as THREE.Group)) {
          clickedObject = clickedObject.parent as THREE.Object3D;
        }
        const clickedFish = this.fish.find(f => f.group === clickedObject);
        if (clickedFish && clickedFish.isAlive) {
          this.activateFishGlow(clickedFish);
          return; // Don't check location markers if fish was clicked
        }
      }

      const intersects = this.raycaster.intersectObjects(
        this.locationMarkers.flatMap(m => m.children),
        true
      );

      if (intersects.length > 0) {
        let parent = intersects[0].object.parent;
        while (parent && !parent.userData.type) {
          parent = parent.parent;
        }
        if (parent && parent.userData.type === 'location') {
          this.navigateTo(parent.userData.label);
        }
      }
    });

    // Change cursor on hover
    this.renderer.domElement.addEventListener('mousemove', () => {
      this.raycaster.setFromCamera(this.mouse, this.camera);

      // Check fish hover
      const fishGroups = this.fish.map(f => f.group);
      const fishIntersects = this.raycaster.intersectObjects(fishGroups, true);

      if (fishIntersects.length > 0) {
        this.renderer.domElement.style.cursor = 'pointer';
        return;
      }

      const intersects = this.raycaster.intersectObjects(
        this.locationMarkers.flatMap(m => m.children),
        true
      );
      this.renderer.domElement.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
    });
  }

  private activateFishGlow(fish: Fish): void {
    const now = this.clock.elapsedTime;
    fish.glowingUntil = now + 10; // Glow for 10 seconds
    fish.speed = fish.baseSpeed * 2; // Double speed

    // Change fish material to yellow glow
    const fishContainer = fish.group.userData.fishContainer as THREE.Group;
    if (fishContainer) {
      fishContainer.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          // Store original color if not already stored
          if (!child.userData.originalColor) {
            child.userData.originalColor = child.material.color.getHex();
            child.userData.originalEmissive = child.material.emissive.getHex();
            child.userData.originalEmissiveIntensity = child.material.emissiveIntensity;
          }
          // Set yellow glow
          child.material.color.setHex(0xffff00);
          child.material.emissive.setHex(0xffaa00);
          child.material.emissiveIntensity = 0.8;
        }
      });
    }
  }

  private updateFishGlow(fish: Fish): void {
    const now = this.clock.elapsedTime;

    if (fish.glowingUntil > 0 && now >= fish.glowingUntil) {
      // Glow period ended - restore original appearance
      fish.glowingUntil = 0;
      fish.speed = fish.baseSpeed;

      const fishContainer = fish.group.userData.fishContainer as THREE.Group;
      if (fishContainer) {
        fishContainer.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
            if (child.userData.originalColor !== undefined) {
              child.material.color.setHex(child.userData.originalColor);
              child.material.emissive.setHex(child.userData.originalEmissive || 0x000000);
              child.material.emissiveIntensity = child.userData.originalEmissiveIntensity || 0;
            }
          }
        });
      }
    }
  }

  navigateTo(locationName: string): void {
    const location = this.locations.get(locationName);
    if (!location) return;

    this.isTransitioning = true;
    this.currentLocation = locationName;
    this.cameraTarget = location.position.clone();
    this.cameraTargetRotation = location.rotation.clone();
    this.targetLightColor.setHex(location.lightColor);
    this.targetFogDensity = location.fogDensity;

    if (this.onLocationChange) {
      this.onLocationChange(locationName);
    }
  }

  getCurrentLocation(): string {
    return this.currentLocation;
  }

  private updateParticles(): void {
    for (const particle of this.particles) {
      particle.mesh.position.add(particle.velocity);

      if (particle.mesh.position.y > 35) {
        particle.mesh.position.y = -5;
      }
      if (particle.mesh.position.x > 40) particle.mesh.position.x = -40;
      if (particle.mesh.position.x < -40) particle.mesh.position.x = 40;
      if (particle.mesh.position.z > 40) particle.mesh.position.z = -40;
      if (particle.mesh.position.z < -40) particle.mesh.position.z = 40;

      particle.mesh.position.x += Math.sin(this.clock.elapsedTime + particle.originalY) * 0.002;
    }
  }

  private updateFish(delta: number): void {
    const alivePrey = this.fish.filter(f => !f.isPredator && f.isAlive);
    const alivePredators = this.fish.filter(f => f.isPredator && f.isAlive);

    for (const fish of this.fish) {
      if (!fish.isAlive) continue;

      // Update glow effect (check if it should expire)
      this.updateFishGlow(fish);

      if (fish.isPredator) {
        // Predator behavior: hunt prey
        this.updatePredator(fish, alivePrey, delta);
      } else {
        // Prey behavior: flee from predators
        this.updatePrey(fish, alivePredators, delta);
      }

      // Apply velocity
      fish.group.position.add(fish.velocity);

      // Make fish look in movement direction
      if (fish.velocity.length() > 0.001) {
        const lookTarget = fish.group.position.clone().add(fish.velocity);
        fish.group.lookAt(lookTarget);
      }

      // Tail wiggle - faster when fleeing/chasing
      const wiggleSpeed = (fish.fleeTarget || fish.chaseTarget) ? 20 : 10;
      const tailWiggle = Math.sin(this.clock.elapsedTime * wiggleSpeed) * 0.3;
      const fishContainer = fish.group.userData.fishContainer as THREE.Group;
      if (fishContainer && fishContainer.children.length > 3) {
        // Tail fin is at index 2, tail connector at index 3
        fishContainer.children[2].rotation.y = tailWiggle;
        fishContainer.children[3].rotation.y = tailWiggle * 0.5;
      }

      // Boundary handling
      this.handleFishBoundaries(fish);
    }

    // Clean up dead fish and respawn
    this.cleanupAndRespawn();
  }

  private updatePredator(predator: Fish, prey: Fish[], delta: number): void {
    // Find nearest prey
    let nearestPrey: Fish | null = null;
    let nearestDistance = Infinity;

    for (const p of prey) {
      const distance = predator.group.position.distanceTo(p.group.position);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestPrey = p;
      }
    }

    if (nearestPrey && nearestDistance < this.CHASE_DISTANCE) {
      // Chase!
      predator.chaseTarget = nearestPrey;
      const direction = nearestPrey.group.position.clone()
        .sub(predator.group.position)
        .normalize();

      predator.targetDirection.lerp(direction, 0.1);
      predator.velocity.lerp(
        predator.targetDirection.clone().multiplyScalar(this.PREDATOR_SPEED * 1.3),
        0.08
      );

      // Check for eating
      if (nearestDistance < this.EAT_DISTANCE) {
        this.eatFish(nearestPrey);
        predator.chaseTarget = null;
      }
    } else {
      // Wander
      predator.chaseTarget = null;
      predator.changeTimer -= delta;

      if (predator.changeTimer <= 0) {
        predator.targetDirection = new THREE.Vector3(
          Math.random() - 0.5,
          (Math.random() - 0.5) * 0.2,
          Math.random() - 0.5
        ).normalize();
        predator.changeTimer = 2 + Math.random() * 4;
      }

      predator.velocity.lerp(
        predator.targetDirection.clone().multiplyScalar(predator.speed * 0.7),
        0.02
      );
    }
  }

  private updatePrey(prey: Fish, predators: Fish[], delta: number): void {
    // Find nearest predator
    let nearestPredator: Fish | null = null;
    let nearestDistance = Infinity;

    for (const p of predators) {
      const distance = prey.group.position.distanceTo(p.group.position);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestPredator = p;
      }
    }

    if (nearestPredator && nearestDistance < this.FLEE_DISTANCE) {
      // Flee!
      prey.fleeTarget = nearestPredator;
      const direction = prey.group.position.clone()
        .sub(nearestPredator.group.position)
        .normalize();

      // Add some randomness to fleeing
      direction.x += (Math.random() - 0.5) * 0.3;
      direction.z += (Math.random() - 0.5) * 0.3;
      direction.normalize();

      prey.targetDirection.lerp(direction, 0.15);
      prey.velocity.lerp(
        prey.targetDirection.clone().multiplyScalar(this.PREY_SPEED * 1.5),
        0.1
      );
    } else {
      // Calm swimming
      prey.fleeTarget = null;
      prey.changeTimer -= delta;

      if (prey.changeTimer <= 0) {
        prey.targetDirection = new THREE.Vector3(
          Math.random() - 0.5,
          (Math.random() - 0.5) * 0.2,
          Math.random() - 0.5
        ).normalize();
        prey.changeTimer = 1 + Math.random() * 3;
      }

      prey.velocity.lerp(
        prey.targetDirection.clone().multiplyScalar(prey.speed),
        0.02
      );
    }
  }

  private eatFish(prey: Fish): void {
    prey.isAlive = false;

    // Particle burst effect
    const position = prey.group.position.clone();
    for (let i = 0; i < 10; i++) {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.1),
        new THREE.MeshBasicMaterial({
          color: 0xff6666,
          transparent: true,
          opacity: 0.8
        })
      );
      particle.position.copy(position);
      particle.position.add(new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ));
      this.scene.add(particle);

      // Fade out and remove
      const startTime = this.clock.elapsedTime;
      const animate = () => {
        const elapsed = this.clock.elapsedTime - startTime;
        if (elapsed < 1) {
          (particle.material as THREE.MeshBasicMaterial).opacity = 0.8 * (1 - elapsed);
          particle.position.y += 0.05;
          requestAnimationFrame(animate);
        } else {
          this.scene.remove(particle);
        }
      };
      animate();
    }

    // Remove from scene
    this.scene.remove(prey.group);
  }

  private cleanupAndRespawn(): void {
    // Count alive fish
    const alivePrey = this.fish.filter(f => !f.isPredator && f.isAlive);
    const alivePredators = this.fish.filter(f => f.isPredator && f.isAlive);

    // Remove dead fish from array
    this.fish = this.fish.filter(f => f.isAlive);

    // Respawn prey if needed
    const preyToSpawn = this.PREY_COUNT - alivePrey.length;
    for (let i = 0; i < preyToSpawn; i++) {
      this.spawnFish(false, true);
    }

    // Respawn predators if needed (shouldn't happen, but just in case)
    const predatorsToSpawn = this.PREDATOR_COUNT - alivePredators.length;
    for (let i = 0; i < predatorsToSpawn; i++) {
      this.spawnFish(true, true);
    }
  }

  private handleFishBoundaries(fish: Fish): void {
    const bounds = 35;
    const softBounds = 30;

    // Soft boundary - steer away from edges
    if (Math.abs(fish.group.position.x) > softBounds) {
      fish.targetDirection.x -= Math.sign(fish.group.position.x) * 0.1;
    }
    if (Math.abs(fish.group.position.z) > softBounds) {
      fish.targetDirection.z -= Math.sign(fish.group.position.z) * 0.1;
    }
    fish.targetDirection.normalize();

    // Hard boundary - wrap around
    if (fish.group.position.x > bounds) fish.group.position.x = -bounds;
    if (fish.group.position.x < -bounds) fish.group.position.x = bounds;
    if (fish.group.position.z > bounds) fish.group.position.z = -bounds;
    if (fish.group.position.z < -bounds) fish.group.position.z = bounds;

    // Vertical boundaries
    if (fish.group.position.y > 18) {
      fish.targetDirection.y = -0.3;
      fish.group.position.y = 18;
    }
    const floorY = Reef.terrainHeight(fish.group.position.x, fish.group.position.z);
    const minY = floorY + (fish.isPredator ? 1.1 : 0.65);
    if (fish.group.position.y < minY) {
      fish.velocity.y = Math.abs(fish.velocity.y);
      fish.group.position.y = minY;
    }
  }

  private updateSeaPlants(): void {
    for (const plant of this.seaPlants) {
      // Animate each blade in the group
      for (const child of plant.group.children) {
        const sway = Math.sin(this.clock.elapsedTime * plant.speed + plant.phase) * 0.15;
        child.rotation.x = sway;
        child.rotation.z = Math.cos(this.clock.elapsedTime * plant.speed * 0.7 + plant.phase) * 0.08;
      }
    }
  }

  private updateGodRays(): void {
    for (let i = 0; i < this.godRays.length; i++) {
      const ray = this.godRays[i];
      const material = ray.material as THREE.MeshBasicMaterial;
      material.opacity = 0.03 + Math.sin(this.clock.elapsedTime * 0.5 + i) * 0.02;
    }
  }

  private updateCaustics(): void {
    for (const caustic of this.causticPlanes) {
      const positions = caustic.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        const y = Math.sin(x * 0.1 + this.clock.elapsedTime) *
                  Math.cos(z * 0.1 + this.clock.elapsedTime * 0.8) * 0.3;
        positions.setY(i, y);
      }
      positions.needsUpdate = true;
    }
  }

  private updateLocationMarkers(): void {
    for (const marker of this.locationMarkers) {
      // Pulsing animation
      const pulse = 1 + Math.sin(this.clock.elapsedTime * 2) * 0.1;
      marker.children[0].scale.setScalar(pulse);

      // Ring rotation
      if (marker.children[2]) {
        marker.children[2].rotation.z = this.clock.elapsedTime * 0.5;
      }

      // Make markers face camera
      marker.lookAt(this.camera.position);
    }
  }

  private updateCamera(): void {
    // Smooth transition to target position
    const positionLerpSpeed = this.isTransitioning ? 0.025 : 0.02;
    const rotationLerpSpeed = this.isTransitioning ? 0.03 : 0.02;

    // Store current camera quaternion before any changes
    const currentQuaternion = this.camera.quaternion.clone();

    // Lerp position smoothly
    this.camera.position.lerp(this.cameraTarget, positionLerpSpeed);

    // Check if transition is complete
    if (this.isTransitioning &&
        this.camera.position.distanceTo(this.cameraTarget) < 0.5) {
      this.isTransitioning = false;
    }

    // Subtle mouse influence (less when transitioning)
    // Invert X so camera moves opposite to mouse (look where you point)
    const mouseInfluence = this.isTransitioning ? 0.3 : 1.5;
    const targetX = this.cameraTarget.x - this.mouseX * mouseInfluence;
    const targetY = this.cameraTarget.y - this.mouseY * mouseInfluence * 0.5;

    this.camera.position.x += (targetX - this.camera.position.x) * 0.015;
    this.camera.position.y += (targetY - this.camera.position.y) * 0.015;

    // Gentle floating motion (reduced when transitioning)
    const floatAmount = this.isTransitioning ? 0.3 : 1;
    this.camera.position.y += Math.sin(this.clock.elapsedTime * 0.5) * 0.008 * floatAmount;
    this.camera.position.x += Math.cos(this.clock.elapsedTime * 0.3) * 0.004 * floatAmount;

    // Smooth rotation using quaternion slerp from Euler target
    const targetQuaternion = new THREE.Quaternion();
    targetQuaternion.setFromEuler(this.cameraTargetRotation);

    // Smoothly interpolate rotation
    currentQuaternion.slerp(targetQuaternion, rotationLerpSpeed);
    this.camera.quaternion.copy(currentQuaternion);
  }

  private updateLighting(): void {
    // Smooth color transition
    this.currentLightColor.lerp(this.targetLightColor, 0.02);
    this.sunLight.color.copy(this.currentLightColor);

    // Smooth fog transition
    this.currentFogDensity += (this.targetFogDensity - this.currentFogDensity) * 0.02;
    (this.scene.fog as THREE.FogExp2).density = this.currentFogDensity;
  }

  public onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();

    this.updateParticles();
    this.updateFish(delta);
    this.updateSeaPlants();
    this.updateReefLife(delta);
    this.updateGodRays();
    this.updateCaustics();
    this.updateLocationMarkers();
    this.updateCamera();
    this.updateLighting();

    this.renderer.render(this.scene, this.camera);
  }

  public start(): void {
    this.animate();
  }
}
