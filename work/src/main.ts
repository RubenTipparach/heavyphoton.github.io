import { UnderwaterScene } from './UnderwaterScene';
import { UnderwaterAudio } from './UnderwaterAudio';
import { SceneManager } from './SceneManager';
import { games, about, projects } from './config';

const container = document.getElementById('underwater-canvas');
if (!container) {
  throw new Error('Canvas container not found');
}

const underwaterScene = new UnderwaterScene(container);
underwaterScene.start();

const underwaterAudio = new UnderwaterAudio();

// Initialize Scene Manager for handling astronautics transitions
const sceneManager = new SceneManager(container, underwaterScene, underwaterAudio);

// Content panels
const panels = {
  home: document.getElementById('panel-home'),
  about: document.getElementById('panel-about'),
  games: document.getElementById('panel-games'),
  projects: document.getElementById('panel-projects'),
  contact: document.getElementById('panel-contact'),
};

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const socialBadges = document.querySelector('.social-badges');

// Mobile menu
const navMenuBtn = document.getElementById('nav-menu-btn');
const navLinksContainer = document.getElementById('nav-links');

if (navMenuBtn && navLinksContainer) {
  navMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinksContainer.classList.toggle('open');
    navMenuBtn.innerHTML = navLinksContainer.classList.contains('open') ? '&#10005;' : '&#9776;';
  });

  // Close menu when clicking a link
  navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('open');
      navMenuBtn.innerHTML = '&#9776;';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinksContainer.contains(e.target as Node) && !navMenuBtn.contains(e.target as Node)) {
      navLinksContainer.classList.remove('open');
      navMenuBtn.innerHTML = '&#9776;';
    }
  });
}

// Track current scene for UI updates
let currentSceneType: 'underwater' | 'astronautics' = 'underwater';

function showPanel(location: string) {
  // Don't show panels when in astronautics mode
  if (currentSceneType === 'astronautics' && location !== 'astronautics') {
    return;
  }

  // Hide all panels
  Object.values(panels).forEach(panel => {
    if (panel) {
      panel.classList.remove('active');
    }
  });

  // Show the target panel (not for astronautics - it has its own UI)
  if (location !== 'astronautics') {
    const targetPanel = panels[location as keyof typeof panels];
    if (targetPanel) {
      setTimeout(() => {
        targetPanel.classList.add('active');
      }, 300); // Delay to let camera start moving
    }
  }

  // Update nav active state
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-location') === location) {
      link.classList.add('active');
    }
  });

  // Hide social badges on contact and astronautics pages
  if (socialBadges) {
    if (location === 'contact' || location === 'astronautics') {
      socialBadges.classList.add('hidden');
    } else {
      socialBadges.classList.remove('hidden');
    }
  }
}

// Set up location change callback
underwaterScene.setLocationChangeCallback((location) => {
  showPanel(location);

  // Update URL hash without triggering navigation
  history.pushState(null, '', `#${location}`);
});

// Handle nav clicks
navLinks.forEach(link => {
  link.addEventListener('click', async (e) => {
    e.preventDefault();
    const location = link.getAttribute('data-location');
    if (!location) return;

    if (location === 'astronautics') {
      // Transition to astronautics scene
      currentSceneType = 'astronautics';
      await sceneManager.transitionTo('astronautics');
      showPanel('astronautics');
      history.pushState(null, '', `#astronautics`);
    } else {
      // If coming from astronautics, transition back to underwater
      if (currentSceneType === 'astronautics') {
        currentSceneType = 'underwater';
        await sceneManager.transitionTo('underwater');
      }
      underwaterScene.navigateTo(location);
    }
  });
});

// Handle initial hash
const initialHash = window.location.hash.slice(1);
if (initialHash && ['about', 'games', 'projects', 'contact'].includes(initialHash)) {
  underwaterScene.navigateTo(initialHash);
  showPanel(initialHash);
} else if (initialHash === 'astronautics') {
  // Start with astronautics scene
  currentSceneType = 'astronautics';
  // Small delay to ensure DOM is ready
  setTimeout(async () => {
    await sceneManager.transitionTo('astronautics');
    showPanel('astronautics');
  }, 100);
} else {
  // Navigate to home to ensure camera position matches home location
  underwaterScene.navigateTo('home');
  showPanel('home');
}

// Handle browser back/forward
window.addEventListener('popstate', async () => {
  const hash = window.location.hash.slice(1) || 'home';

  if (hash === 'astronautics') {
    if (currentSceneType !== 'astronautics') {
      currentSceneType = 'astronautics';
      await sceneManager.transitionTo('astronautics');
    }
    showPanel('astronautics');
  } else {
    if (currentSceneType === 'astronautics') {
      currentSceneType = 'underwater';
      await sceneManager.transitionTo('underwater');
    }
    underwaterScene.navigateTo(hash);
    showPanel(hash);
  }
});

// Audio toggle button
const audioButton = document.getElementById('audio-toggle');
if (audioButton) {
  audioButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Don't trigger location click

    if (currentSceneType === 'underwater') {
      underwaterAudio.toggle();
      audioButton.textContent = underwaterAudio.playing ? '🔊' : '🔇';
      audioButton.classList.toggle('active', underwaterAudio.playing);
    } else {
      // Toggle space audio when in astronautics mode
      const spaceAudio = sceneManager.getSpaceAudio();
      spaceAudio.toggle();
      audioButton.textContent = spaceAudio.playing ? '🔊' : '🔇';
      audioButton.classList.toggle('active', spaceAudio.playing);
    }
  });
}

// Start audio on first user interaction (required by browsers)
const startAudioOnInteraction = () => {
  if (currentSceneType === 'underwater' && !underwaterAudio.playing) {
    underwaterAudio.start();
    if (audioButton) {
      audioButton.textContent = '🔊';
      audioButton.classList.add('active');
    }
  }
  document.removeEventListener('click', startAudioOnInteraction);
  document.removeEventListener('keydown', startAudioOnInteraction);
};

document.addEventListener('click', startAudioOnInteraction);
document.addEventListener('keydown', startAudioOnInteraction);

window.addEventListener('resize', () => {
  underwaterScene.onResize();
});

// Render games from config
function renderGames() {
  const gamesGrid = document.getElementById('games-grid');
  if (!gamesGrid) return;

  const gamesHTML = games.map(game => `
    <a href="${game.playUrl}" target="_blank" rel="noopener noreferrer" class="project-card">
      ${game.imageUrl ? `<img src="${game.imageUrl}" alt="${game.title}" class="project-thumb">` : ''}
      <div class="project-info">
        <h4>${game.title}</h4>
        <div class="tags">
          ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <p>${game.description}</p>
      </div>
    </a>
  `).join('');

  const viewAllHTML = `
    <a href="https://ruben-tipparach.itch.io" target="_blank" rel="noopener noreferrer" class="project-card view-all-card">
      <h4>View All Games</h4>
      <p>See all games on itch.io</p>
    </a>
  `;

  gamesGrid.innerHTML = gamesHTML + viewAllHTML;
}

renderGames();

// Render about from config
function renderAbout() {
  const bioContainer = document.getElementById('about-bio');
  const missionContainer = document.getElementById('about-mission');
  const valuesContainer = document.getElementById('about-values');
  const skillsContainer = document.getElementById('about-skills');

  if (bioContainer) {
    bioContainer.innerHTML = about.bio.map(p => `<p class="panel-text">${p}</p>`).join('');
  }

  if (missionContainer) {
    missionContainer.innerHTML = `<p class="panel-text mission-text">${about.mission}</p>`;
  }

  if (valuesContainer) {
    valuesContainer.innerHTML = about.values.map(v => `<li>${v}</li>`).join('');
  }

  if (skillsContainer) {
    skillsContainer.innerHTML = about.skills.map(s => `<span class="skill-tag">${s}</span>`).join('');
  }
}

renderAbout();

// Render projects from config
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  const projectsHTML = projects.map(project => `
    <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-card${project.featured ? ' featured-project' : ''}">
      <div class="project-info">
        <h4>${project.title}</h4>
        <div class="tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <p>${project.description}</p>
        <span class="learn-more">${project.linkText} &rarr;</span>
      </div>
    </a>
  `).join('');

  projectsGrid.innerHTML = projectsHTML;
}

renderProjects();
