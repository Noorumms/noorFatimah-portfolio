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

function toolItemHTML(tool) {
  return `
    <div class="tool-item">
      <div class="tool-icon"><span>${tool.abbr}</span></div>
      <span class="tool-name">${tool.name}</span>
    </div>`;
}

function projectCardHTML(proj) {
  return `
    <a href="${proj.url}" target="_blank" rel="noopener" class="project-card-link">
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
});
