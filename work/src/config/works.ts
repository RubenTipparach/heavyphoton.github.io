export interface GameProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  playUrl?: string;
  featured?: boolean;
}

export const games: GameProject[] = [
  {
    id: 'dark-nebula',
    title: 'Dark Nebula',
    description: 'Navigate through the void of space.',
    tags: ['Space', 'Browser'],
    imageUrl: 'https://img.itch.zone/aW1nLzI0MDUzOTMxLnBuZw==/347x500/BYsyzr.png',
    playUrl: 'https://ruben-tipparach.itch.io/dark-nebula',
    featured: true,
  },
  {
    id: 'temple',
    title: 'Temple',
    description: 'Solve ancient puzzles in mysterious ruins.',
    tags: ['Puzzle', 'Browser'],
    imageUrl: 'https://img.itch.zone/aW1hZ2UvNDA2MzQzMy8yNDIyNTMzOC5wbmc=/347x500/Fvr5XO.png',
    playUrl: 'https://ruben-tipparach.itch.io/temple',
  },
  {
    id: 'return-of-tom-lander',
    title: 'The Return of Tom Lander',
    description: 'Action-packed sequel to a classic adventure.',
    tags: ['Action', 'Browser'],
    imageUrl: 'https://img.itch.zone/aW1nLzIzNDkwNjU1LnBuZw==/315x250%23c/5iSd%2BR.png',
    playUrl: 'https://ruben-tipparach.itch.io/the-return-of-tom-lander',
    featured: true,
  },

  {
    id: 'landers-revenge',
    title: "Lander's Revenge",
    description: 'Continue the Lander saga in this thrilling installment.',
    tags: ['Action', 'Browser'],
    imageUrl: "https://img.itch.zone/aW1nLzIyODU3MTYzLnBuZw==/315x250%23c/Rr1%2Fxu.png",
    playUrl: 'https://ruben-tipparach.itch.io/landers-revenge',
  },
  {
    id: 'nightboarder',
    title: 'Nightboarder',
    description: "You're on a ship alone, fighting an enemy that outguns and outnumbers you.",
    tags: ['Simulation', 'Browser'],
    imageUrl: 'https://img.itch.zone/aW1nLzM4NjQ0OTMucG5n/315x250%23c/pjYY4k.png',
    playUrl: 'https://ruben-tipparach.itch.io/nightboarder',
  },
  {
    id: 'shadow-of-the-elders',
    title: 'Shadow of the Elders',
    description: 'Embark on an adventure uncovering ancient mysteries.',
    tags: ['Adventure', 'RPG'],
    imageUrl: 'https://img.itch.zone/aW1nLzg3MzUxNDAucG5n/315x250%23c/MojAxW.png',
    playUrl: 'https://ruben-tipparach.itch.io/shadow-of-the-elders',
  },
  {
    id: 'sky-chasers',
    title: 'Sky Chasers',
    description: 'An atmospheric UFO hunting game. Track anomalies across the night sky.',
    tags: ['Simulation', 'Atmospheric'],
    imageUrl: 'https://img.itch.zone/aW1nLzcyMjc4NjAuanBn/315x250%23c/yqohtp.jpg',
    playUrl: 'https://ruben-tipparach.itch.io/sky-chasers',
  },
  {
    id: 'fathom-commander',
    title: 'FATHOM COMMANDER',
    description: 'Take command of deep sea operations in this immersive simulation.',
    tags: ['Simulation', 'Strategy'],
    imageUrl: 'https://img.itch.zone/aW1nLzU3OTE3OTYuanBn/315x250%23c/lAEk0A.jpg',
    playUrl: 'https://ruben-tipparach.itch.io/fathom-commander',
  },
  {
    id: 'dark-forest-in-heaven',
    title: 'The Dark Forest in Heaven',
    description: 'A spaceship themed dungeon crawler inspired by Doom RPG.',
    tags: ['Adventure', 'Dungeon Crawler'],
    imageUrl: 'https://img.itch.zone/aW1nLzU2MTQxMDEucG5n/315x250%23c/i1FPR1.png',
    playUrl: 'https://ruben-tipparach.itch.io/the-dark-forest-in-heaven',
  },
  {
    id: 'formation',
    title: 'FORMATION',
    description: 'Short story about a lost arctic expedition.',
    tags: ['Adventure', 'Narrative'],
    imageUrl: 'https://img.itch.zone/aW1nLzUwNzg5MzUucG5n/315x250%23c/bHi2Cq.png',
    playUrl: 'https://ruben-tipparach.itch.io/formation',
  },
  {
    id: 'sacred-garden',
    title: 'Sacred Garden',
    description: 'Through blood and sacrifice, you must serve the garden.',
    tags: ['Action', 'Dark'],
    imageUrl: 'https://img.itch.zone/aW1nLzQxNTk5ODAucG5n/315x250%23c/7ycN2d.png',
    playUrl: 'https://ruben-tipparach.itch.io/sacred-garden',
  },
  {
    id: 'planet-of-the-beast',
    title: 'Planet of the Beast',
    description: 'A role-playing experience on a dangerous alien world.',
    tags: ['RPG', 'Sci-Fi'],
    imageUrl: "https://img.itch.zone/aW1nLzg2NzE3MTIucG5n/315x250%23c/a0jQgx.png",
    playUrl: 'https://ruben-tipparach.itch.io/planet-of-the-beast',
  },
  {
    id: 'comet-raiders',
    title: 'Comet Raiders',
    description: 'Strategic space combat among the asteroids.',
    tags: ['Strategy', 'Browser'],
    imageUrl: "https://img.itch.zone/aW1nLzEwMTg5NTEzLnBuZw==/315x250%23c/xzjQ%2BW.png",
    playUrl: 'https://ruben-tipparach.itch.io/comet-raiders',
  },
  {
    id: 'fallen-tribes',
    title: 'Fallen Tribes',
    description: 'Lead your tribe to survival in a harsh world.',
    tags: ['Strategy'],
    imageUrl: "https://img.itch.zone/aW1nLzE2NDQ4Mzg1LmpwZWc=/315x250%23c/L6mXRl.jpeg",
    playUrl: 'https://ruben-tipparach.itch.io/fallen-tribes',
  },
  {
    id: 'catnip-express',
    title: 'Catnip Express',
    description: 'Oh no, not another cat game.',
    tags: ['Casual'],
    imageUrl:"https://img.itch.zone/aW1nLzEyMDU4ODY4LnBuZw==/315x250%23c/DIIWQz.png",
    playUrl: 'https://ruben-tipparach.itch.io/catnip-express',
  }

];
