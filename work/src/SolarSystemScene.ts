import * as THREE from 'three';
import { SeededRandom } from './utils/seededRandom';

export interface Planet {
  name: string;
  mesh: THREE.Mesh;
  orbitLine: THREE.Line;
  radius: number;
  orbitalRadius: number;
  orbitalSpeed: number;
  orbitalAngle: number;
  color: THREE.Color;
  hasRings: boolean;
  ringMesh?: THREE.Mesh;
  moons: Moon[];
  rotationSpeed: number;
}

interface Moon {
  mesh: THREE.Mesh;
  orbitalRadius: number;
  orbitalSpeed: number;
  orbitalAngle: number;
}

interface CameraState {
  mode: 'overview' | 'focused' | 'orbiting';
  targetPosition: THREE.Vector3;
  targetLookAt: THREE.Vector3;
  focusedPlanet: Planet | null;
}

export class SolarSystemScene {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private clock: THREE.Clock;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;

  private planets: Planet[] = [];
  private star: THREE.Mesh | null = null;
  private starGlow: THREE.Mesh | null = null;
  private starfield: THREE.Points | null = null;

  private random: SeededRandom;
  private currentSeed: string;

  private cameraState: CameraState;
  private isAnimating = false;
  private animationId: number | null = null;

  // Mouse interaction
  private isMouseDown = false;
  private mouseDownTime = 0;
  private lastMouseX = 0;
  private lastMouseY = 0;
  private orbitAngleX = 0;
  private orbitAngleY = 0.3; // Start with slight downward angle

  // Overview camera orbit state
  private overviewOrbitAngleX = 0;
  private overviewOrbitAngleY = 0.5; // Slight top-down view
  private overviewDistance = 600;

  // Callbacks
  private onPlanetSelect?: (planet: Planet | null) => void;
  private onSeedChange?: (seed: string) => void;

  constructor(_container: HTMLElement, renderer: THREE.WebGLRenderer, seed?: string) {
    this.renderer = renderer;
    this.clock = new THREE.Clock();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.currentSeed = seed || '';
    this.random = new SeededRandom(seed);
    if (!seed) {
      this.currentSeed = this.random.getSeed();
    }

    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000008);

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    this.camera.position.set(0, 300, 500);
    this.camera.lookAt(0, 0, 0);

    this.cameraState = {
      mode: 'overview',
      targetPosition: new THREE.Vector3(0, 300, 500),
      targetLookAt: new THREE.Vector3(0, 0, 0),
      focusedPlanet: null,
    };

    this.setupLighting();
    this.createStarfield();
    this.createStar();
    this.generateSolarSystem();
    this.setupMouseControls();
  }

  getSeed(): string {
    return this.currentSeed;
  }

  setPlanetSelectCallback(callback: (planet: Planet | null) => void): void {
    this.onPlanetSelect = callback;
  }

  setSeedChangeCallback(callback: (seed: string) => void): void {
    this.onSeedChange = callback;
  }

  regenerate(seed?: string): void {
    // Clear existing planets
    for (const planet of this.planets) {
      this.scene.remove(planet.mesh);
      this.scene.remove(planet.orbitLine);
      if (planet.ringMesh) {
        this.scene.remove(planet.ringMesh);
      }
      for (const moon of planet.moons) {
        this.scene.remove(moon.mesh);
      }
    }
    this.planets = [];

    // Reset camera
    this.cameraState = {
      mode: 'overview',
      targetPosition: new THREE.Vector3(0, 300, 500),
      targetLookAt: new THREE.Vector3(0, 0, 0),
      focusedPlanet: null,
    };

    // Generate new system
    this.random = new SeededRandom(seed);
    this.currentSeed = seed || this.random.getSeed();
    this.generateSolarSystem();

    if (this.onSeedChange) {
      this.onSeedChange(this.currentSeed);
    }

    if (this.onPlanetSelect) {
      this.onPlanetSelect(null);
    }
  }

  private setupLighting(): void {
    // Very dim ambient light - just enough to see silhouettes on dark side
    const ambient = new THREE.AmbientLight(0x111122, 0.1);
    this.scene.add(ambient);

    // Star light (point light at center) - main light source
    // High intensity with decay for realistic falloff
    const starLight = new THREE.PointLight(0xffffee, 4, 0, 0.5);
    starLight.position.set(0, 0, 0);
    this.scene.add(starLight);
  }

  private createStarfield(): void {
    const starCount = 5000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      // Random position on a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 3000 + Math.random() * 2000;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Slight color variation
      const brightness = 0.5 + Math.random() * 0.5;
      colors[i * 3] = brightness;
      colors[i * 3 + 1] = brightness;
      colors[i * 3 + 2] = brightness + Math.random() * 0.2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    this.starfield = new THREE.Points(geometry, material);
    this.scene.add(this.starfield);
  }

  private createStar(): void {
    // Main star body
    const starGeometry = new THREE.SphereGeometry(30, 64, 64);
    const starMaterial = new THREE.MeshBasicMaterial({
      color: 0xffdd88,
    });
    this.star = new THREE.Mesh(starGeometry, starMaterial);
    this.scene.add(this.star);

    // Star glow effect
    const glowGeometry = new THREE.SphereGeometry(45, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide,
    });
    this.starGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    this.scene.add(this.starGlow);

    // Corona effect
    const coronaGeometry = new THREE.SphereGeometry(60, 32, 32);
    const coronaMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6622,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
    const corona = new THREE.Mesh(coronaGeometry, coronaMaterial);
    this.scene.add(corona);
  }

  private generateSolarSystem(): void {
    const planetCount = this.random.int(4, 9);
    let currentOrbitRadius = 80;

    for (let i = 0; i < planetCount; i++) {
      currentOrbitRadius += this.random.range(50, 100);
      const planet = this.createPlanet(currentOrbitRadius, i);
      this.planets.push(planet);
    }
  }

  private createPlanet(orbitalRadius: number, index: number): Planet {
    const radius = this.random.range(4, 20);
    const name = this.random.planetName();

    // Planet color based on type
    const hue = this.random.range(0, 1);
    const saturation = this.random.range(0.3, 0.8);
    const lightness = this.random.range(0.3, 0.6);
    const color = new THREE.Color().setHSL(hue, saturation, lightness);

    // Create planet mesh
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.7,
      metalness: 0.2,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = { type: 'planet', index };

    // Position planet
    const initialAngle = this.random.range(0, Math.PI * 2);
    mesh.position.x = Math.cos(initialAngle) * orbitalRadius;
    mesh.position.z = Math.sin(initialAngle) * orbitalRadius;
    this.scene.add(mesh);

    // Create orbit line
    const orbitLine = this.createOrbitLine(orbitalRadius);
    this.scene.add(orbitLine);

    // Orbital speed (Kepler-ish: slower for outer planets) - much slower for visual appeal
    const orbitalSpeed = 0.02 / Math.sqrt(orbitalRadius / 100);
    const rotationSpeed = this.random.range(0.01, 0.05);

    // Rings (20% chance for larger planets)
    const hasRings = radius > 10 && this.random.bool(0.3);
    let ringMesh: THREE.Mesh | undefined;
    if (hasRings) {
      ringMesh = this.createRings(radius, color);
      ringMesh.position.copy(mesh.position);
      this.scene.add(ringMesh);
    }

    // Moons (0-3)
    const moonCount = this.random.int(0, 4);
    const moons: Moon[] = [];
    for (let m = 0; m < moonCount; m++) {
      const moon = this.createMoon(radius);
      moon.mesh.position.copy(mesh.position);
      this.scene.add(moon.mesh);
      moons.push(moon);
    }

    return {
      name,
      mesh,
      orbitLine,
      radius,
      orbitalRadius,
      orbitalSpeed,
      orbitalAngle: initialAngle,
      color,
      hasRings,
      ringMesh,
      moons,
      rotationSpeed,
    };
  }

  private createOrbitLine(radius: number): THREE.Line {
    const points: THREE.Vector3[] = [];
    const segments = 128;

    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push(
        new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
      );
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color: 0x444466,
      transparent: true,
      opacity: 0.3,
    });

    return new THREE.Line(geometry, material);
  }

  private createRings(planetRadius: number, planetColor: THREE.Color): THREE.Mesh {
    const innerRadius = planetRadius * 1.4;
    const outerRadius = planetRadius * 2.2;

    const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 64);
    const material = new THREE.MeshBasicMaterial({
      color: planetColor.clone().multiplyScalar(0.7),
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });

    const ring = new THREE.Mesh(geometry, material);
    ring.rotation.x = Math.PI / 2 + this.random.range(-0.3, 0.3);
    return ring;
  }

  private createMoon(planetRadius: number): Moon {
    const moonRadius = this.random.range(1, 3);
    const orbitalRadius = planetRadius + this.random.range(8, 20);

    const geometry = new THREE.SphereGeometry(moonRadius, 16, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x888888,
      roughness: 0.9,
    });
    const mesh = new THREE.Mesh(geometry, material);

    return {
      mesh,
      orbitalRadius,
      orbitalSpeed: this.random.range(0.08, 0.2),
      orbitalAngle: this.random.range(0, Math.PI * 2),
    };
  }

  private setupMouseControls(): void {
    const canvas = this.renderer.domElement;

    canvas.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
      this.mouseDownTime = Date.now();
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    });

    canvas.addEventListener('mouseup', (e) => {
      const clickDuration = Date.now() - this.mouseDownTime;

      // Short click = select planet
      if (clickDuration < 200) {
        this.handleClick(e);
      }

      this.isMouseDown = false;
    });

    canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      // Orbit camera when dragging
      if (this.isMouseDown) {
        const deltaX = e.clientX - this.lastMouseX;
        const deltaY = e.clientY - this.lastMouseY;

        if (this.cameraState.mode === 'overview') {
          // Orbit around the solar system center
          this.overviewOrbitAngleX += deltaX * 0.005;
          this.overviewOrbitAngleY = Math.max(
            0.1,
            Math.min(Math.PI / 2 - 0.1, this.overviewOrbitAngleY + deltaY * 0.005)
          );
        } else if (this.cameraState.mode === 'focused' || this.cameraState.mode === 'orbiting') {
          // Orbit around focused planet
          this.orbitAngleX += deltaX * 0.005;
          this.orbitAngleY = Math.max(
            -Math.PI / 3,
            Math.min(Math.PI / 3, this.orbitAngleY + deltaY * 0.005)
          );
          this.cameraState.mode = 'orbiting';
        }

        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      }

      // Update cursor
      this.updateCursor();
    });

    // Prevent context menu on right click
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  private handleClick(e: MouseEvent): void {
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const planetMeshes = this.planets.map((p) => p.mesh);
    const intersects = this.raycaster.intersectObjects(planetMeshes);

    if (intersects.length > 0) {
      const clickedMesh = intersects[0].object as THREE.Mesh;
      const planet = this.planets.find((p) => p.mesh === clickedMesh);

      if (planet) {
        this.focusOnPlanet(planet);
      }
    }
  }

  private updateCursor(): void {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const planetMeshes = this.planets.map((p) => p.mesh);
    const intersects = this.raycaster.intersectObjects(planetMeshes);

    this.renderer.domElement.style.cursor =
      intersects.length > 0 ? 'pointer' : 'default';
  }

  focusOnPlanet(planet: Planet): void {
    this.cameraState.mode = 'focused';
    this.cameraState.focusedPlanet = planet;
    this.orbitAngleX = 0;
    this.orbitAngleY = 0;

    if (this.onPlanetSelect) {
      this.onPlanetSelect(planet);
    }
  }

  zoomOut(): void {
    this.cameraState.mode = 'overview';
    this.cameraState.focusedPlanet = null;
    this.cameraState.targetPosition.set(0, 300, 500);
    this.cameraState.targetLookAt.set(0, 0, 0);

    if (this.onPlanetSelect) {
      this.onPlanetSelect(null);
    }
  }

  private updatePlanets(delta: number): void {
    for (const planet of this.planets) {
      // Orbital motion
      planet.orbitalAngle += planet.orbitalSpeed * delta;
      planet.mesh.position.x =
        Math.cos(planet.orbitalAngle) * planet.orbitalRadius;
      planet.mesh.position.z =
        Math.sin(planet.orbitalAngle) * planet.orbitalRadius;

      // Rotation
      planet.mesh.rotation.y += planet.rotationSpeed;

      // Update rings position
      if (planet.ringMesh) {
        planet.ringMesh.position.copy(planet.mesh.position);
      }

      // Update moons
      for (const moon of planet.moons) {
        moon.orbitalAngle += moon.orbitalSpeed * delta;
        moon.mesh.position.x =
          planet.mesh.position.x +
          Math.cos(moon.orbitalAngle) * moon.orbitalRadius;
        moon.mesh.position.z =
          planet.mesh.position.z +
          Math.sin(moon.orbitalAngle) * moon.orbitalRadius;
        moon.mesh.position.y =
          Math.sin(moon.orbitalAngle * 0.5) * moon.orbitalRadius * 0.2;
      }
    }
  }

  private updateCamera(): void {
    if (this.cameraState.mode === 'overview') {
      // Calculate camera position based on overview orbit angles
      const targetX = Math.sin(this.overviewOrbitAngleX) * Math.cos(this.overviewOrbitAngleY) * this.overviewDistance;
      const targetY = Math.sin(this.overviewOrbitAngleY) * this.overviewDistance;
      const targetZ = Math.cos(this.overviewOrbitAngleX) * Math.cos(this.overviewOrbitAngleY) * this.overviewDistance;

      this.cameraState.targetPosition.set(targetX, targetY, targetZ);
      this.cameraState.targetLookAt.set(0, 0, 0);

      // Smooth camera movement
      this.camera.position.lerp(this.cameraState.targetPosition, 0.05);
      this.camera.lookAt(this.cameraState.targetLookAt);
    } else if (
      this.cameraState.focusedPlanet &&
      (this.cameraState.mode === 'focused' || this.cameraState.mode === 'orbiting')
    ) {
      const planet = this.cameraState.focusedPlanet;
      const distance = planet.radius * 5 + 30;

      // Calculate camera position based on orbit angles
      const targetX =
        planet.mesh.position.x +
        Math.sin(this.orbitAngleX) * Math.cos(this.orbitAngleY) * distance;
      const targetY =
        planet.mesh.position.y + Math.sin(this.orbitAngleY) * distance;
      const targetZ =
        planet.mesh.position.z +
        Math.cos(this.orbitAngleX) * Math.cos(this.orbitAngleY) * distance;

      this.cameraState.targetPosition.set(targetX, targetY, targetZ);
      this.cameraState.targetLookAt.copy(planet.mesh.position);

      // Smooth camera movement
      this.camera.position.lerp(this.cameraState.targetPosition, 0.05);
      this.camera.lookAt(this.cameraState.targetLookAt);
    }
  }

  private updateStar(): void {
    if (this.star && this.starGlow) {
      // Pulsing effect
      const pulse = 1 + Math.sin(this.clock.elapsedTime * 2) * 0.05;
      this.starGlow.scale.setScalar(pulse);
    }
  }

  public onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  private animate(): void {
    if (!this.isAnimating) return;

    this.animationId = requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();

    this.updatePlanets(delta);
    this.updateCamera();
    this.updateStar();

    this.renderer.render(this.scene, this.camera);
  }

  public start(): void {
    this.isAnimating = true;
    this.clock.start();
    this.animate();
  }

  public stop(): void {
    this.isAnimating = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  public getPlanets(): Planet[] {
    return this.planets;
  }

  public getScene(): THREE.Scene {
    return this.scene;
  }

  public getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }
}
