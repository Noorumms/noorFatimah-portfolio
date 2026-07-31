// ---------- Content data ----------
// Edit these arrays / values to update site content — no HTML editing required.

const RESUME_HREF = 'assets/NoorFatima_Resume.pdf';

const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/noor-fatimah-8b86322a7',
  github: 'https://github.com/Noorumms',
  portfolio: 'https://noorumms.vercel.app',
  email: 'noorefatimah0@gmail.com'
};

const TOOLS = [
  { name: 'Python', abbr: 'Py' },
  { name: 'C++', abbr: 'C++' },
  { name: 'C#', abbr: 'C#' },
  { name: 'ASP.NET Core', abbr: '.NET' },
  { name: 'OpenCV', abbr: 'CV2' },
  { name: 'Scikit-learn', abbr: 'SKL' },
  { name: 'Git & GitHub', abbr: 'Git' },
  { name: 'VS Code', abbr: 'VS' }
];

// Add more projects by adding another object to this array.
const PROJECTS = [
  {
    name: 'virtual-paint',
    desc: 'Real-time computer vision application that enables webcam-based drawing using OpenCV and HSV color detection.',
    url: 'https://github.com/Noorumms/virtual-paint'
  },
  {
    name: 'FelineGallery',
    desc: 'Full-stack ASP.NET Core MVC web application with SQL Server, Entity Framework Core, and layered architecture.',
    url: 'https://github.com/Noorumms/FelineGallery'
  },
  {
    name: 'spam-checker-app',
    desc: 'Machine learning pipeline using TF-IDF and multiple classifiers achieving 97%+ accuracy with a Streamlit deployment.',
    url: 'https://spam-checker-app.streamlit.app/'
  },
  {
    name: 'preloved-wheels',
    desc: 'End-to-end regression pipeline for used car price prediction using Scikit-learn and Streamlit.',
    url: 'https://preloved-wheels.streamlit.app/'
  },
  {
    name: 'ml_from_scratch',
    desc: 'Implemented Decision Tree (ID3), K-Means, Linear Regression, and Logistic Regression from scratch without Scikit-learn.',
    url: 'https://github.com/Noorumms/ml_from_scratch'
  },
  {
    name: 'MNIST-Digit-Classification',
    desc: 'Classical machine learning pipeline using handcrafted image features for handwritten digit recognition.',
    url: 'https://github.com/Noorumms/MNIST-Digit-Classification-Using-Handcrafted-Features'
  },
  {
    name: 'RPG-Adventure',
    desc: 'Object-oriented C++ text-based RPG featuring inheritance, polymorphism, combat mechanics, and file persistence.',
    url: 'https://github.com/Noorumms/RPG-Adventure'
  }
];

// ---------- Component templates ----------

function iconColumnHTML(variant) {
  if (variant === 'left') {
    return `
      <a href="#about" class="icon-item rotate-neg">
        <div class="icon-avatar"><span>N</span></div>
        <span class="label">profile</span>
      </a>
      <a href="#works" class="icon-item rotate-pos">
        <div class="icon-folder"><div class="tab"></div><div class="body"></div></div>
        <span class="label">works</span>
      </a>`;
  }
  return `
    <a href="#contact" class="icon-item rotate-pos">
      <div class="icon-folder"><div class="tab"></div><div class="body"></div></div>
      <span class="label">contact</span>
    </a>
    <a href="${RESUME_HREF}" target="_blank" rel="noopener" class="icon-item rotate-neg">
      <div class="icon-folder"><div class="tab"></div><div class="body"></div></div>
      <span class="label">resume</span>
    </a>`;
}

function mobileNavHTML() {
  return `
    <a href="#about" class="icon-item rotate-neg">
      <div class="icon-avatar"><span>N</span></div>
      <span class="label">profile</span>
    </a>
    <a href="#works" class="icon-item rotate-pos">
      <div class="icon-folder"><div class="tab"></div><div class="body"></div></div>
      <span class="label">works</span>
    </a>
    <a href="#contact" class="icon-item rotate-pos">
      <div class="icon-folder"><div class="tab"></div><div class="body"></div></div>
      <span class="label">contact</span>
    </a>
    <a href="${RESUME_HREF}" target="_blank" rel="noopener" class="icon-item rotate-neg">
      <div class="icon-folder"><div class="tab"></div><div class="body"></div></div>
      <span class="label">resume</span>
    </a>`;
}

function socialDockHTML() {
  return `
    <a href="${SOCIAL_LINKS.linkedin}" target="_blank" rel="noopener" class="dock-icon dock-icon-dark" aria-label="LinkedIn">
      <span>in</span>
    </a>
    <a href="${SOCIAL_LINKS.github}" target="_blank" rel="noopener" class="dock-icon dock-icon-light" aria-label="GitHub">
      <span>gh</span>
    </a>
    <a href="${SOCIAL_LINKS.portfolio}" target="_blank" rel="noopener" class="dock-icon dock-icon-dark" aria-label="Portfolio website">
      <span>web</span>
    </a>
    <a href="mailto:${SOCIAL_LINKS.email}" class="dock-icon dock-icon-light" aria-label="Email">
      <span>@</span>
    </a>`;
}

function toolItemHTML(tool, index) {
  return `
    <div class="tool-item" style="--i:${index}">
      <div class="tool-icon"><span>${tool.abbr}</span></div>
      <span class="tool-name">${tool.name}</span>
    </div>`;
}

function projectCardHTML(proj, index) {
  return `
    <a href="${proj.url}" target="_blank" rel="noopener" class="project-card-link" style="--i:${index}">
      <div class="project-card-wrap">
        <div class="project-card-tab"></div>
        <div class="project-card">
          <div class="project-name">${proj.name}</div>
          <div class="project-desc">${proj.desc}</div>
        </div>
      </div>
    </a>`;
}

// ---------- Render ----------

function renderComponents() {
  document.querySelectorAll('.icon-col').forEach((el) => {
    el.innerHTML = iconColumnHTML(el.dataset.variant);
  });

  document.querySelectorAll('.social-dock').forEach((el) => {
    el.innerHTML = socialDockHTML();
  });

  const mobileNav = document.getElementById('mobile-nav');
  if (mobileNav) mobileNav.innerHTML = mobileNavHTML();

  const toolsGrid = document.getElementById('tools-grid');
  if (toolsGrid) toolsGrid.innerHTML = TOOLS.map(toolItemHTML).join('');

  const worksGrid = document.getElementById('works-grid');
  if (worksGrid) worksGrid.innerHTML = PROJECTS.map(projectCardHTML).join('');
}

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Boot sequence ----------

function initBootScreen() {
  const screen = document.getElementById('boot-screen');
  const textEl = document.getElementById('boot-text');
  if (!screen || !textEl) return;

  if (REDUCED_MOTION) {
    screen.classList.add('boot-hidden');
    return;
  }

  const lines = [
    '> booting noor_os v2.6...',
    '> loading portfolio modules... done',
    '> mounting C:\\NOOR\\ ... ok',
    '> welcome, visitor.'
  ];

  let hidden = false;
  const hide = () => {
    if (hidden) return;
    hidden = true;
    screen.classList.add('boot-hidden');
    document.removeEventListener('keydown', hide);
    screen.removeEventListener('click', hide);
  };

  screen.addEventListener('click', hide);
  document.addEventListener('keydown', hide);

  let out = '';
  let li = 0;
  let ci = 0;

  function typeNext() {
    if (hidden) return;
    if (li >= lines.length) {
      setTimeout(hide, 500);
      return;
    }
    const line = lines[li];
    if (ci < line.length) {
      out += line[ci];
      ci += 1;
      textEl.textContent = out;
      setTimeout(typeNext, 16);
    } else {
      out += '\n';
      li += 1;
      ci = 0;
      textEl.textContent = out;
      setTimeout(typeNext, 120);
    }
  }

  typeNext();
}

// ---------- Hero typewriter ----------

function initTypewriter() {
  const target = document.getElementById('wordmark-type');
  if (!target) return;
  const text = 'Noor Fatima — Software Engineer';

  if (REDUCED_MOTION) {
    target.textContent = text;
    return;
  }

  let i = 0;
  function type() {
    if (i <= text.length) {
      target.textContent = text.slice(0, i);
      i += 1;
      setTimeout(type, 45);
    }
  }
  setTimeout(type, 900);
}

// ---------- Ticker ----------

function initTicker() {
  const track = document.getElementById('ticker-track');
  if (!track) return;
  const items = [
    'AVAILABLE FOR OPPORTUNITIES',
    'SOFTWARE ENGINEER',
    'AI &amp; COMPUTER VISION',
    'FULL-STACK DEVELOPER',
    'ALWAYS SHIPPING'
  ];
  const chunk = items.map((t) => `<span>${t}</span>&bull;`).join('');
  track.innerHTML = chunk + chunk;
}

// ---------- Custom cursor ----------

function initCustomCursor() {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const ring = document.getElementById('cursor-ring');
  const dot = document.getElementById('cursor-dot');
  if (!canHover || REDUCED_MOTION || !ring || !dot) return;

  document.body.classList.add('custom-cursor-on');

  let ringX = window.innerWidth / 2;
  let ringY = window.innerHeight / 2;
  let targetX = ringX;
  let targetY = ringY;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.left = `${targetX}px`;
    dot.style.top = `${targetY}px`;
    document.body.classList.add('cursor-ready');
  });

  function raf() {
    ringX += (targetX - ringX) * 0.2;
    ringY += (targetY - ringY) * 0.2;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const hoverSelector = 'a, button, .icon-item, .dock-icon, .btn, .window-close, .project-card-link';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelector)) ring.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelector)) ring.classList.remove('cursor-hover');
  });
}

// ---------- Project card tilt ----------

function initTilt() {
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!canHover || REDUCED_MOTION) return;

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.project-card-link');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const inner = card.querySelector('.project-card');
    if (inner) {
      inner.style.transform = `rotateX(${py * -10}deg) rotateY(${px * 10}deg) translateZ(6px)`;
    }
  });

  document.addEventListener(
    'mouseleave',
    (e) => {
      if (!e.target.classList || !e.target.classList.contains('project-card-link')) return;
      const inner = e.target.querySelector('.project-card');
      if (inner) inner.style.transform = '';
    },
    true
  );
}

// ---------- Scroll-spy active nav ----------

function initScrollSpy() {
  const sectionIds = ['about', 'works', 'contact'];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  if (!sections.length || !('IntersectionObserver' in window)) return;

  const setActive = (id) => {
    document.querySelectorAll('.icon-item').forEach((el) => {
      const match = el.getAttribute('href') === `#${id}`;
      el.classList.toggle('active', match);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

// ---------- Button ripple ----------

function initRipple() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.className = 'btn-ripple';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
}

// ---------- Scroll-in animation ----------

function initScrollAnimation() {
  const windows = document.querySelectorAll('.window');
  if (!('IntersectionObserver' in window)) {
    windows.forEach((w) => w.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  windows.forEach((w) => observer.observe(w));
}

document.addEventListener('DOMContentLoaded', () => {
  renderComponents();
  initScrollAnimation();
  initBootScreen();
  initTypewriter();
  initTicker();
  initCustomCursor();
  initTilt();
  initScrollSpy();
  initRipple();
});
