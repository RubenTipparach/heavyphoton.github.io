/**
 * Seeded random number generator using mulberry32 algorithm
 * Provides deterministic random numbers based on a seed
 */

export function createSeededRandom(seed: number): () => number {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedFromString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function generateRandomSeed(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let seed = '';
  for (let i = 0; i < 8; i++) {
    seed += chars[Math.floor(Math.random() * chars.length)];
  }
  return seed;
}

// Planet name generation helpers
const prefixes = [
  'Zy',
  'Kep',
  'Ve',
  'Or',
  'Nex',
  'Pho',
  'Tri',
  'Ax',
  'Cel',
  'Dra',
  'El',
  'Fen',
  'Gor',
  'Hel',
  'Ion',
  'Jor',
  'Kra',
  'Lum',
  'Mor',
  'Nyr',
];

const suffixes = [
  'lon',
  'ra',
  'nis',
  'thos',
  'mir',
  'xis',
  'don',
  'var',
  'eon',
  'ath',
  'ux',
  'en',
  'or',
  'ix',
  'ar',
  'us',
  'ia',
  'on',
  'is',
  'um',
];

export function generatePlanetName(random: () => number): string {
  const prefix = prefixes[Math.floor(random() * prefixes.length)];
  const suffix = suffixes[Math.floor(random() * suffixes.length)];
  return prefix + suffix;
}

// Helper class for easier use
export class SeededRandom {
  private random: () => number;
  private seedString: string;

  constructor(seed?: string) {
    this.seedString = seed || generateRandomSeed();
    const numericSeed = seedFromString(this.seedString);
    this.random = createSeededRandom(numericSeed);
  }

  getSeed(): string {
    return this.seedString;
  }

  next(): number {
    return this.random();
  }

  range(min: number, max: number): number {
    return min + this.random() * (max - min);
  }

  int(min: number, max: number): number {
    return Math.floor(this.range(min, max));
  }

  bool(probability = 0.5): boolean {
    return this.random() < probability;
  }

  pick<T>(array: T[]): T {
    return array[Math.floor(this.random() * array.length)];
  }

  planetName(): string {
    return generatePlanetName(this.random);
  }
}
