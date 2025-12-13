/**
 * Procedural space ambient audio generator
 * Creates atmospheric space sounds using Web Audio API
 */

export class SpaceAudio {
  private audioContext: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private isStopping = false;

  // Audio nodes
  private droneOscillators: OscillatorNode[] = [];
  private noiseNode: AudioBufferSourceNode | null = null;
  private pulsarInterval: number | null = null;
  private shimmerOscillators: OscillatorNode[] = [];

  // Volume state
  private targetVolume = 0.3;

  get playing(): boolean {
    return this.isPlaying;
  }

  private initAudioContext(): void {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
      this.masterGain = this.audioContext.createGain();
      this.masterGain.gain.value = 0;
      this.masterGain.connect(this.audioContext.destination);
    }
  }

  async start(): Promise<void> {
    if (this.isPlaying || this.isStopping) return;

    this.initAudioContext();
    if (!this.audioContext || !this.masterGain) return;

    // Resume context if suspended
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    this.isPlaying = true;

    // Create all audio layers
    this.createCosmicDrone();
    this.createSolarWind();
    this.createPulsarPings();
    this.createHarmonicShimmer();

    // Fade in
    this.fadeToVolume(this.targetVolume, 1.5);
  }

  stop(): void {
    if (!this.isPlaying) return;

    // Mark as stopped immediately so toggle works correctly
    this.isPlaying = false;
    this.isStopping = true;

    this.fadeToVolume(0, 0.5);

    setTimeout(() => {
      this.cleanup();
      this.isStopping = false;
    }, 600);
  }

  toggle(): void {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }

  fadeIn(duration = 0.5): void {
    this.fadeToVolume(this.targetVolume, duration);
  }

  fadeOut(duration = 0.5): void {
    this.fadeToVolume(0, duration);
  }

  private fadeToVolume(target: number, duration: number): void {
    if (!this.masterGain || !this.audioContext) return;

    this.masterGain.gain.cancelScheduledValues(this.audioContext.currentTime);
    this.masterGain.gain.setValueAtTime(
      this.masterGain.gain.value,
      this.audioContext.currentTime
    );
    this.masterGain.gain.linearRampToValueAtTime(
      target,
      this.audioContext.currentTime + duration
    );
  }

  private createCosmicDrone(): void {
    if (!this.audioContext || !this.masterGain) return;

    // Deep bass drones at different frequencies
    const droneFrequencies = [40, 60, 80, 120];
    const droneGain = this.audioContext.createGain();
    droneGain.gain.value = 0.15;
    droneGain.connect(this.masterGain);

    for (const freq of droneFrequencies) {
      const osc = this.audioContext.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      // LFO for slow volume modulation
      const lfo = this.audioContext.createOscillator();
      const lfoGain = this.audioContext.createGain();
      lfo.frequency.value = 0.05 + Math.random() * 0.1;
      lfoGain.gain.value = 0.3;
      lfo.connect(lfoGain);

      const oscGain = this.audioContext.createGain();
      oscGain.gain.value = 0.25;
      lfoGain.connect(oscGain.gain);

      osc.connect(oscGain);
      oscGain.connect(droneGain);

      osc.start();
      lfo.start();
      this.droneOscillators.push(osc);
    }
  }

  private createSolarWind(): void {
    if (!this.audioContext || !this.masterGain) return;

    // Create brown noise for solar wind effect
    const bufferSize = this.audioContext.sampleRate * 2;
    const buffer = this.audioContext.createBuffer(
      1,
      bufferSize,
      this.audioContext.sampleRate
    );
    const data = buffer.getChannelData(0);

    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // Gain compensation
    }

    this.noiseNode = this.audioContext.createBufferSource();
    this.noiseNode.buffer = buffer;
    this.noiseNode.loop = true;

    // Sweeping filter
    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 200;
    filter.Q.value = 1;

    // Sweep the filter
    const sweepLfo = this.audioContext.createOscillator();
    const sweepGain = this.audioContext.createGain();
    sweepLfo.frequency.value = 0.03;
    sweepGain.gain.value = 150;
    sweepLfo.connect(sweepGain);
    sweepGain.connect(filter.frequency);

    const noiseGain = this.audioContext.createGain();
    noiseGain.gain.value = 0.08;

    this.noiseNode.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.masterGain);

    sweepLfo.start();
    this.noiseNode.start();
  }

  private createPulsarPings(): void {
    if (!this.audioContext || !this.masterGain) return;

    const createPing = () => {
      if (!this.audioContext || !this.masterGain || !this.isPlaying) return;

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.value = 800 + Math.random() * 1200;

      gain.gain.value = 0;
      gain.gain.setValueAtTime(0, this.audioContext.currentTime);
      gain.gain.linearRampToValueAtTime(
        0.05 + Math.random() * 0.05,
        this.audioContext.currentTime + 0.01
      );
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        this.audioContext.currentTime + 0.3 + Math.random() * 0.5
      );

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.audioContext.currentTime + 1);
    };

    // Random intervals for pulsar pings
    const schedulePing = () => {
      if (!this.isPlaying) return;
      createPing();
      this.pulsarInterval = window.setTimeout(
        schedulePing,
        2000 + Math.random() * 4000
      );
    };

    schedulePing();
  }

  private createHarmonicShimmer(): void {
    if (!this.audioContext || !this.masterGain) return;

    // High ethereal pad sounds
    const shimmerFrequencies = [440, 554, 659, 880];
    const shimmerGain = this.audioContext.createGain();
    shimmerGain.gain.value = 0.03;
    shimmerGain.connect(this.masterGain);

    for (const freq of shimmerFrequencies) {
      const osc = this.audioContext.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      // Slow tremolo
      const lfo = this.audioContext.createOscillator();
      const lfoGain = this.audioContext.createGain();
      lfo.frequency.value = 0.1 + Math.random() * 0.2;
      lfoGain.gain.value = 0.5;
      lfo.connect(lfoGain);

      const oscGain = this.audioContext.createGain();
      oscGain.gain.value = 0.25;
      lfoGain.connect(oscGain.gain);

      osc.connect(oscGain);
      oscGain.connect(shimmerGain);

      osc.start();
      lfo.start();
      this.shimmerOscillators.push(osc);
    }
  }

  private cleanup(): void {
    // Stop all oscillators
    for (const osc of this.droneOscillators) {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        /* ignore */
      }
    }
    this.droneOscillators = [];

    for (const osc of this.shimmerOscillators) {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        /* ignore */
      }
    }
    this.shimmerOscillators = [];

    if (this.noiseNode) {
      try {
        this.noiseNode.stop();
        this.noiseNode.disconnect();
      } catch {
        /* ignore */
      }
      this.noiseNode = null;
    }

    if (this.pulsarInterval) {
      clearTimeout(this.pulsarInterval);
      this.pulsarInterval = null;
    }
  }
}
