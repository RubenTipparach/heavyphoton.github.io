import * as THREE from 'three';
import { UnderwaterScene } from './UnderwaterScene';
import { SolarSystemScene, Planet } from './SolarSystemScene';
import { UnderwaterAudio } from './UnderwaterAudio';
import { SpaceAudio } from './SpaceAudio';

type SceneType = 'underwater' | 'astronautics';

interface TransitionState {
  isTransitioning: boolean;
  fromScene: SceneType;
  toScene: SceneType;
  progress: number;
}

export class SceneManager {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private underwaterCanvas: HTMLCanvasElement | null = null;

  private underwaterScene: UnderwaterScene;
  private solarSystemScene: SolarSystemScene | null = null;

  private underwaterAudio: UnderwaterAudio;
  private spaceAudio: SpaceAudio;

  private currentScene: SceneType = 'underwater';
  private transitionOverlay: HTMLElement;

  private transitionState: TransitionState = {
    isTransitioning: false,
    fromScene: 'underwater',
    toScene: 'underwater',
    progress: 0,
  };

  // UI elements
  private astronauticsUI: HTMLElement;
  private seedDisplay: HTMLElement;
  private planetInfo: HTMLElement;
  private planetNameEl: HTMLElement;
  private planetRadiusEl: HTMLElement;
  private planetPeriodEl: HTMLElement;
  private planetDistanceEl: HTMLElement;
  private planetMoonsEl: HTMLElement;
  private randomizeBtn: HTMLElement;
  private zoomOutBtn: HTMLElement;

  // Callbacks - reserved for future use
  // private onLocationChange?: (location: string) => void;

  constructor(
    container: HTMLElement,
    underwaterScene: UnderwaterScene,
    underwaterAudio: UnderwaterAudio
  ) {
    this.container = container;
    this.underwaterScene = underwaterScene;
    this.underwaterAudio = underwaterAudio;
    this.spaceAudio = new SpaceAudio();

    // Create renderer for solar system scene
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';
    this.renderer.domElement.style.display = 'none'; // Hidden initially
    this.container.appendChild(this.renderer.domElement);

    // Store reference to underwater canvas (it's the first canvas in container)
    this.underwaterCanvas = this.container.querySelector('canvas') as HTMLCanvasElement;

    // Get UI elements
    this.transitionOverlay = document.getElementById('scene-transition')!;
    this.astronauticsUI = document.getElementById('astronautics-ui')!;
    this.seedDisplay = document.getElementById('seed-display')!;
    this.planetInfo = document.getElementById('planet-info')!;
    this.planetNameEl = document.getElementById('planet-name')!;
    this.planetRadiusEl = document.getElementById('planet-radius')!;
    this.planetPeriodEl = document.getElementById('planet-period')!;
    this.planetDistanceEl = document.getElementById('planet-distance')!;
    this.planetMoonsEl = document.getElementById('planet-moons')!;
    this.randomizeBtn = document.getElementById('randomize-btn')!;
    this.zoomOutBtn = document.getElementById('zoom-out-btn')!;

    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // Randomize button
    this.randomizeBtn.addEventListener('click', () => {
      if (this.solarSystemScene) {
        this.solarSystemScene.regenerate();
        this.updateSeedDisplay();
      }
    });

    // Zoom out button
    this.zoomOutBtn.addEventListener('click', () => {
      if (this.solarSystemScene) {
        this.solarSystemScene.zoomOut();
      }
    });

    // Handle resize
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      if (this.solarSystemScene) {
        this.solarSystemScene.onResize();
      }
    });
  }

  getCurrentScene(): SceneType {
    return this.currentScene;
  }

  async transitionTo(scene: SceneType): Promise<void> {
    if (this.transitionState.isTransitioning) return;
    if (scene === this.currentScene) return;

    this.transitionState = {
      isTransitioning: true,
      fromScene: this.currentScene,
      toScene: scene,
      progress: 0,
    };

    // Start fade out
    this.transitionOverlay.classList.add('active');

    // Fade out current audio
    if (this.currentScene === 'underwater') {
      this.underwaterAudio.fadeOut();
    } else {
      this.spaceAudio.fadeOut();
    }

    // Wait for fade
    await this.delay(500);

    // Switch scenes
    if (scene === 'astronautics') {
      await this.switchToAstronautics();
    } else {
      await this.switchToUnderwater();
    }

    this.currentScene = scene;

    // Fade in new audio
    if (scene === 'astronautics') {
      this.spaceAudio.start();
    } else if (this.underwaterAudio.playing) {
      this.underwaterAudio.fadeIn();
    }

    // Wait a moment then fade in
    await this.delay(100);
    this.transitionOverlay.classList.remove('active');

    this.transitionState.isTransitioning = false;
  }

  private async switchToAstronautics(): Promise<void> {
    // Parse seed from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const seedFromUrl = urlParams.get('seed');

    // Initialize solar system scene if needed
    if (!this.solarSystemScene) {
      this.solarSystemScene = new SolarSystemScene(
        this.container,
        this.renderer,
        seedFromUrl || undefined
      );

      this.solarSystemScene.setPlanetSelectCallback((planet) => {
        this.updatePlanetInfo(planet);
      });

      this.solarSystemScene.setSeedChangeCallback((seed) => {
        this.updateUrlSeed(seed);
      });
    } else if (seedFromUrl && seedFromUrl !== this.solarSystemScene.getSeed()) {
      // Regenerate with new seed from URL
      this.solarSystemScene.regenerate(seedFromUrl);
    }

    // Hide underwater canvas, show solar system canvas
    if (this.underwaterCanvas) {
      this.underwaterCanvas.style.display = 'none';
    }
    this.renderer.domElement.style.display = 'block';

    // Start solar system animation
    this.solarSystemScene.start();

    // Show astronautics UI
    this.astronauticsUI.classList.add('active');
    this.updateSeedDisplay();

    // Update URL
    this.updateUrlSeed(this.solarSystemScene.getSeed());
  }

  private async switchToUnderwater(): Promise<void> {
    // Stop solar system animation
    if (this.solarSystemScene) {
      this.solarSystemScene.stop();
    }

    // Hide solar system canvas, show underwater canvas
    this.renderer.domElement.style.display = 'none';
    if (this.underwaterCanvas) {
      this.underwaterCanvas.style.display = 'block';
    }

    // Hide astronautics UI
    this.astronauticsUI.classList.remove('active');
    this.planetInfo.classList.remove('visible');

    // Remove seed from URL
    const url = new URL(window.location.href);
    url.searchParams.delete('seed');
    history.replaceState(null, '', url.toString());
  }

  private updateSeedDisplay(): void {
    if (this.solarSystemScene) {
      this.seedDisplay.textContent = `Seed: ${this.solarSystemScene.getSeed()}`;
    }
  }

  private updateUrlSeed(seed: string): void {
    const url = new URL(window.location.href);
    url.searchParams.set('seed', seed);
    history.replaceState(null, '', url.toString());
  }

  private updatePlanetInfo(planet: Planet | null): void {
    if (planet) {
      this.planetNameEl.textContent = planet.name;
      this.planetRadiusEl.textContent = `${planet.radius.toFixed(1)} units`;

      // Calculate orbital period (simplified)
      const period = (2 * Math.PI) / planet.orbitalSpeed;
      this.planetPeriodEl.textContent = `${period.toFixed(1)} cycles`;

      this.planetDistanceEl.textContent = `${planet.orbitalRadius.toFixed(0)} units`;
      this.planetMoonsEl.textContent = `${planet.moons.length}`;

      this.planetInfo.classList.add('visible');
    } else {
      this.planetInfo.classList.remove('visible');
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Method to check if we should handle a navigation
  shouldHandleNavigation(location: string): boolean {
    return location === 'astronautics';
  }

  // Get the underwater scene for external access
  getUnderwaterScene(): UnderwaterScene {
    return this.underwaterScene;
  }

  // Get space audio for external toggle
  getSpaceAudio(): SpaceAudio {
    return this.spaceAudio;
  }
}
