export class UnderwaterAudio {
  private audioContext: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private isStopping = false;
  private oscillators: OscillatorNode[] = [];
  private intervalIds: number[] = [];

  async start(): Promise<void> {
    if (this.isPlaying || this.isStopping) return;

    this.audioContext = new AudioContext();
    this.masterGain = this.audioContext.createGain();
    this.masterGain.gain.value = 0.3;
    this.masterGain.connect(this.audioContext.destination);

    this.isPlaying = true;

    // Start all the layers
    this.createDeepDrone();
    this.createBubbles();
    this.createWhaleSound();
    this.createShimmer();
    this.createCurrents();

    // Fade in
    this.masterGain.gain.setValueAtTime(0, this.audioContext.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + 2);
  }

  stop(): void {
    if (!this.isPlaying || !this.audioContext || !this.masterGain) return;

    // Mark as stopped immediately so toggle works correctly
    this.isPlaying = false;
    this.isStopping = true;

    // Fade out
    this.masterGain.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 1);

    // Clean up after fade
    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try { osc.stop(); } catch {}
      });
      this.intervalIds.forEach(id => clearInterval(id));
      this.oscillators = [];
      this.intervalIds = [];
      this.audioContext?.close();
      this.audioContext = null;
      this.isStopping = false;
    }, 1100);
  }

  private createDeepDrone(): void {
    if (!this.audioContext || !this.masterGain) return;

    // Deep bass drone - the foundation
    const frequencies = [55, 82.5, 110]; // A1, E2, A2 - open fifth harmony

    frequencies.forEach((freq, i) => {
      const osc = this.audioContext!.createOscillator();
      const gain = this.audioContext!.createGain();
      const filter = this.audioContext!.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.value = freq;

      // Slow frequency modulation for organic feel
      const lfo = this.audioContext!.createOscillator();
      const lfoGain = this.audioContext!.createGain();
      lfo.type = 'sine';
      lfo.frequency.value = 0.05 + i * 0.02;
      lfoGain.gain.value = 2;
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();
      this.oscillators.push(lfo);

      filter.type = 'lowpass';
      filter.frequency.value = 200;
      filter.Q.value = 1;

      gain.gain.value = 0.15 - i * 0.03;

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start();
      this.oscillators.push(osc);
    });
  }

  private createBubbles(): void {
    if (!this.audioContext || !this.masterGain) return;

    const createBubble = () => {
      if (!this.audioContext || !this.masterGain) return;

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();

      // Random bubble pitch
      const baseFreq = 400 + Math.random() * 800;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, this.audioContext.currentTime);
      osc.frequency.exponentialRampToValueAtTime(
        baseFreq * 2,
        this.audioContext.currentTime + 0.1
      );

      filter.type = 'bandpass';
      filter.frequency.value = baseFreq;
      filter.Q.value = 10;

      gain.gain.setValueAtTime(0, this.audioContext.currentTime);
      gain.gain.linearRampToValueAtTime(0.05, this.audioContext.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.15);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start();
      osc.stop(this.audioContext.currentTime + 0.2);
    };

    // Random bubbles
    const bubbleInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        createBubble();
        // Sometimes create bubble clusters
        if (Math.random() > 0.7) {
          setTimeout(createBubble, 50 + Math.random() * 100);
          setTimeout(createBubble, 100 + Math.random() * 150);
        }
      }
    }, 300);

    this.intervalIds.push(bubbleInterval as unknown as number);
  }

  private createWhaleSound(): void {
    if (!this.audioContext || !this.masterGain) return;

    const createWhaleCall = () => {
      if (!this.audioContext || !this.masterGain) return;

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();

      osc.type = 'sine';

      // Whale-like frequency sweep
      const startFreq = 80 + Math.random() * 60;
      const endFreq = startFreq + (Math.random() > 0.5 ? 40 : -30);
      const duration = 2 + Math.random() * 3;

      osc.frequency.setValueAtTime(startFreq, this.audioContext.currentTime);
      osc.frequency.linearRampToValueAtTime(
        startFreq + (endFreq - startFreq) * 0.3,
        this.audioContext.currentTime + duration * 0.3
      );
      osc.frequency.linearRampToValueAtTime(
        endFreq,
        this.audioContext.currentTime + duration
      );

      filter.type = 'lowpass';
      filter.frequency.value = 300;
      filter.Q.value = 5;

      // Envelope
      gain.gain.setValueAtTime(0, this.audioContext.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, this.audioContext.currentTime + 0.5);
      gain.gain.setValueAtTime(0.08, this.audioContext.currentTime + duration - 0.8);
      gain.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start();
      osc.stop(this.audioContext.currentTime + duration + 0.1);
    };

    // Occasional whale calls
    const whaleInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        createWhaleCall();
      }
    }, 5000);

    this.intervalIds.push(whaleInterval as unknown as number);

    // First call after a short delay
    setTimeout(createWhaleCall, 3000);
  }

  private createShimmer(): void {
    if (!this.audioContext || !this.masterGain) return;

    // High frequency shimmer - like light dancing through water
    const pentatonic = [0, 2, 4, 7, 9, 12, 14, 16]; // Pentatonic intervals
    const baseNote = 440; // A4

    const createChime = () => {
      if (!this.audioContext || !this.masterGain) return;

      const interval = pentatonic[Math.floor(Math.random() * pentatonic.length)];
      const freq = baseNote * Math.pow(2, interval / 12);

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      const filter = this.audioContext.createBiquadFilter();
      const reverb = this.createSimpleReverb();

      osc.type = 'sine';
      osc.frequency.value = freq;

      filter.type = 'highpass';
      filter.frequency.value = 400;

      const duration = 1 + Math.random() * 2;
      gain.gain.setValueAtTime(0, this.audioContext.currentTime);
      gain.gain.linearRampToValueAtTime(0.02, this.audioContext.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(reverb);
      reverb.connect(this.masterGain!);

      osc.start();
      osc.stop(this.audioContext.currentTime + duration);
    };

    const shimmerInterval = setInterval(() => {
      if (Math.random() > 0.5) {
        createChime();
      }
    }, 800);

    this.intervalIds.push(shimmerInterval as unknown as number);
  }

  private createCurrents(): void {
    if (!this.audioContext || !this.masterGain) return;

    // Ocean current sounds using filtered noise
    const bufferSize = this.audioContext.sampleRate * 2;
    const noiseBuffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    // Generate brown noise (deeper than white noise)
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5; // Compensate for volume loss
    }

    const noise = this.audioContext.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 150;
    filter.Q.value = 1;

    // Modulate filter for movement
    const lfo = this.audioContext.createOscillator();
    const lfoGain = this.audioContext.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 0.1;
    lfoGain.gain.value = 50;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();
    this.oscillators.push(lfo);

    const gain = this.audioContext.createGain();
    gain.gain.value = 0.15;

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain!);

    noise.start();
  }

  private createSimpleReverb(): GainNode {
    if (!this.audioContext) throw new Error('No audio context');

    // Simple delay-based reverb effect
    const dry = this.audioContext.createGain();
    const wet = this.audioContext.createGain();
    const output = this.audioContext.createGain();

    dry.gain.value = 0.6;
    wet.gain.value = 0.4;

    const delays = [0.1, 0.2, 0.35, 0.5];

    delays.forEach(time => {
      const delay = this.audioContext!.createDelay();
      const feedback = this.audioContext!.createGain();
      const filter = this.audioContext!.createBiquadFilter();

      delay.delayTime.value = time;
      feedback.gain.value = 0.3;
      filter.type = 'lowpass';
      filter.frequency.value = 2000;

      dry.connect(delay);
      delay.connect(filter);
      filter.connect(feedback);
      feedback.connect(delay);
      filter.connect(wet);
    });

    dry.connect(output);
    wet.connect(output);

    return dry;
  }

  toggle(): void {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }

  fadeIn(duration = 0.5): void {
    if (!this.audioContext || !this.masterGain) return;
    this.masterGain.gain.cancelScheduledValues(this.audioContext.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.audioContext.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + duration);
  }

  fadeOut(duration = 0.5): void {
    if (!this.audioContext || !this.masterGain) return;
    this.masterGain.gain.cancelScheduledValues(this.audioContext.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.audioContext.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
  }

  get playing(): boolean {
    return this.isPlaying;
  }
}
