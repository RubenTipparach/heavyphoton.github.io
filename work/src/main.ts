import { UnderwaterScene } from './UnderwaterScene';
import { UnderwaterAudio } from './UnderwaterAudio';
import { SceneManager } from './SceneManager';
import { games, about, projects, socials, contactInfo } from './config';

const container = document.getElementById('underwater-canvas');
if (!container) {
  throw new Error('Canvas container not found');
}

const underwaterScene = new UnderwaterScene(container);
underwaterScene.start();

// Boot sequence: hold the black #preloader until the scene is actually
// painting and our own images have decoded, then cross-fade the site in.
//
// Deliberately not waiting on `window.load`: the Steam wishlist iframe is
// injected before load fires, so a slow store.steampowered.com would pin the
// visitor to a black screen. A hard timeout backs the whole thing up.
(function runBootSequence() {
  const MIN_BLACK_MS = 500;
  const MAX_WAIT_MS = 6000;
  const started = performance.now();
  let done = false;

  const reveal = () => {
    if (done) return;
    done = true;
    const wait = Math.max(0, MIN_BLACK_MS - (performance.now() - started));
    window.setTimeout(() => {
      document.body.classList.add('ready');
      // drop the overlay out of the tree once its fade has finished
      window.setTimeout(() => document.body.classList.add('booted'), 1000);
    }, wait);
  };

  // two rendered frames means the WebGL scene is genuinely on screen
  const framesPainted = new Promise<void>(resolve => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

  const domReady = new Promise<void>(resolve => {
    if (document.readyState !== 'loading') resolve();
    else document.addEventListener('DOMContentLoaded', () => resolve(), { once: true });
  });

  const imagesDecoded = domReady.then(() => {
    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>('img'));
    return Promise.all(imgs.map(img => img.decode().catch(() => undefined)));
  });

  Promise.all([framesPainted, imagesDecoded]).then(reveal);
  window.setTimeout(reveal, MAX_WAIT_MS);
})();

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

// Steam widget management
const steamWidgetContainer = document.querySelector('#panel-home .steam-widget');
const STEAM_IFRAME_HTML = '<iframe src="https://store.steampowered.com/widget/4342510/" frameborder="0" width="100%" height="190" style="max-width: 646px; border-radius: 8px;"></iframe>';

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

  // Manage Steam widget iframe lifecycle
  if (steamWidgetContainer) {
    if (location === 'home') {
      steamWidgetContainer.innerHTML = STEAM_IFRAME_HTML;
    } else {
      steamWidgetContainer.innerHTML = '';
    }
  }

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

// Audio preference storage
const AUDIO_PREF_KEY = 'heavyphoton-audio-enabled';
const getAudioPreference = (): boolean => localStorage.getItem(AUDIO_PREF_KEY) === 'true';
const setAudioPreference = (enabled: boolean) => localStorage.setItem(AUDIO_PREF_KEY, String(enabled));

// Audio toggle button
const audioButton = document.getElementById('audio-toggle');
let audioInitialized = false;

const updateAudioButton = (playing: boolean) => {
  if (audioButton) {
    audioButton.textContent = playing ? '🔊' : '🔇';
    audioButton.classList.toggle('active', playing);
  }
};

if (audioButton) {
  audioButton.addEventListener('click', (e) => {
    console.log('[Audio] Button clicked', {
      currentSceneType,
      audioInitialized,
      underwaterAudioPlaying: underwaterAudio.playing,
      target: e.target,
      currentTarget: e.currentTarget,
    });
    e.stopPropagation(); // Don't trigger location click

    if (currentSceneType === 'underwater') {
      if (!audioInitialized) {
        // First click initializes audio - start it
        console.log('[Audio] Initializing underwater audio');
        audioInitialized = true;
        underwaterAudio.start();
        setAudioPreference(true);
        updateAudioButton(true);
      } else {
        console.log('[Audio] Toggling underwater audio');
        underwaterAudio.toggle();
        setAudioPreference(underwaterAudio.playing);
        updateAudioButton(underwaterAudio.playing);
      }
    } else {
      // Toggle space audio when in astronautics mode
      const spaceAudio = sceneManager.getSpaceAudio();
      console.log('[Audio] Toggling space audio, currently playing:', spaceAudio.playing);
      if (!spaceAudio.playing) {
        spaceAudio.start();
      } else {
        spaceAudio.stop();
      }
      setAudioPreference(spaceAudio.playing);
      updateAudioButton(spaceAudio.playing);
    }
  });

  // Debug: Log when pointer events might be blocked
  audioButton.addEventListener('pointerdown', (e) => {
    console.log('[Audio] Pointer down on audio button', { x: e.clientX, y: e.clientY });
  });
}

// Debug: Global click logger to see what's capturing clicks
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const rect = audioButton?.getBoundingClientRect();
  const isInAudioButtonArea = rect &&
    e.clientX >= rect.left && e.clientX <= rect.right &&
    e.clientY >= rect.top && e.clientY <= rect.bottom;

  if (isInAudioButtonArea) {
    console.log('[Debug] Click in audio button area captured by:', {
      tagName: target.tagName,
      id: target.id,
      className: target.className,
      isAudioButton: target === audioButton,
    });
  }
}, true); // Use capture phase

// Initialize audio button state from saved preference (but don't auto-play)
// Audio will only start when user clicks the audio button
if (getAudioPreference()) {
  // User had audio enabled before - show the unmuted icon but wait for click to actually start
  // This is handled in the click handler above
}

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

// Render contact info from config
function renderContact() {
  const emailContainer = document.getElementById('contact-email');
  const locationContainer = document.getElementById('contact-location');
  const socialLinksContainer = document.getElementById('contact-socials');
  const socialBadgesContainer = document.getElementById('social-badges-container');

  if (emailContainer) {
    emailContainer.innerHTML = `<a href="mailto:${contactInfo.email}">${contactInfo.email}</a>`;
  }

  if (locationContainer) {
    locationContainer.textContent = contactInfo.location;
  }

  const socialsHTML = socials.map(social => `
    <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${social.name}">
      ${social.icon}
    </a>
  `).join('');

  if (socialLinksContainer) {
    socialLinksContainer.innerHTML = socialsHTML;
  }

  // Also render the footer social badges
  if (socialBadgesContainer) {
    const badgesHTML = socials.map(social => `
      <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-badge" title="${social.name}">
        ${social.icon}
      </a>
    `).join('');
    socialBadgesContainer.innerHTML = badgesHTML;
  }
}

renderContact();
