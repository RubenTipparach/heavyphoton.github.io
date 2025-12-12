export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  linkText: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'tenebris',
    title: 'TENEBRIS',
    description: 'Hexagonal voxel solar system game with a focus on survival, crafting, and space exploration. A strong emphasis on hard sci-fi and rocket building logistics.',
    tags: ['Space', 'Survival', 'Crafting'],
    url: 'https://heavyphoton.com/tenebris',
    linkText: 'Learn More',
    featured: true,
  },
  {
    id: 'delta-v',
    title: 'Delta-V',
    description: 'A physics simulation for turn-based spacecraft movement across a grid. Unlimited speed with future positions mapped out ahead of you.',
    tags: ['Physics', 'Turn-Based', 'Space'],
    url: 'https://heavyphoton.com/boat-movement.html',
    linkText: 'Try Demo',
  },
];
