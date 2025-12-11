import { UnderwaterScene } from './UnderwaterScene';
import { UnderwaterAudio } from './UnderwaterAudio';

const container = document.getElementById('underwater-canvas');
if (!container) {
  throw new Error('Canvas container not found');
}

const underwaterScene = new UnderwaterScene(container);
underwaterScene.start();

const underwaterAudio = new UnderwaterAudio();

// Content panels
const panels = {
  home: document.getElementById('panel-home'),
  about: document.getElementById('panel-about'),
  work: document.getElementById('panel-work'),
  contact: document.getElementById('panel-contact'),
};

// Navigation
const navLinks = document.querySelectorAll('.nav-link');

function showPanel(location: string) {
  // Hide all panels
  Object.values(panels).forEach(panel => {
    if (panel) {
      panel.classList.remove('active');
    }
  });

  // Show the target panel
  const targetPanel = panels[location as keyof typeof panels];
  if (targetPanel) {
    setTimeout(() => {
      targetPanel.classList.add('active');
    }, 300); // Delay to let camera start moving
  }

  // Update nav active state
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-location') === location) {
      link.classList.add('active');
    }
  });
}

// Set up location change callback
underwaterScene.setLocationChangeCallback((location) => {
  showPanel(location);

  // Update URL hash without triggering navigation
  history.pushState(null, '', `#${location}`);
});

// Handle nav clicks
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const location = link.getAttribute('data-location');
    if (location) {
      underwaterScene.navigateTo(location);
    }
  });
});

// Handle initial hash
const initialHash = window.location.hash.slice(1);
if (initialHash && ['about', 'work', 'contact'].includes(initialHash)) {
  underwaterScene.navigateTo(initialHash);
  showPanel(initialHash);
} else {
  showPanel('home');
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const hash = window.location.hash.slice(1) || 'home';
  underwaterScene.navigateTo(hash);
  showPanel(hash);
});

// Audio toggle button
const audioButton = document.getElementById('audio-toggle');
if (audioButton) {
  audioButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Don't trigger location click
    underwaterAudio.toggle();
    audioButton.textContent = underwaterAudio.playing ? '🔊' : '🔇';
    audioButton.classList.toggle('active', underwaterAudio.playing);
  });
}

// Start audio on first user interaction (required by browsers)
const startAudioOnInteraction = () => {
  if (!underwaterAudio.playing) {
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
