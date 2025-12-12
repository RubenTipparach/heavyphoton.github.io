export interface AboutConfig {
  name: string;
  tagline: string;
  bio: string[];
  mission: string;
  values: string[];
  skills: string[];
}

export const about: AboutConfig = {
  name: 'Heavy Photon',
  tagline: 'Crafting immersive digital experiences',
  bio: [
    'Heavy Photon is a studio led by Ruben Tipparach. We create award-winning games across multiple platforms and mediums.',
    'Our games focus on deep, meaningful mechanics with a strong emphasis on space exploration and immersion.',
    'Based in beautiful Minnesota, we draw inspiration from the wildlife in warmer seasons and the stunning Northern Lights in winter.'
  ],
  mission: 'To craft meaningful interactive experiences that inspire wonder and push the boundaries of what games can be.',
  values: [
    'Creativity over convention',
    'Player experience first',
    'Player driven narratives',
    'Emergent gameplay and simulated systems',
    'Independent spirit',
  ],
  skills: [
    'Game Development',
    'Unity3D',
    'Raylib',
    'Monogame',
    'Pico8',
    'Picotron',
    'Tic80',
    'WebGL & Three.js',
    'Virtual Reality',
    'Interactive Art',
    'Sound Design',
    'Creative Coding',
  ],
};
