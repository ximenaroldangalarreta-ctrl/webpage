/**
 * macOS Desktop with Windows XP Bliss Wallpaper
 * Interactive Desktop, Folder Hover Physics & Finder Project Planner
 */

// Initial default projects dataset
const DEFAULT_PROJECTS = [
  // --- IDEAS (With User's Uploaded Photos) ---
  {
    id: "proj-idea-1",
    title: "Terminal Retro con Pantalla Globo",
    category: "ideas",
    priority: "Alta",
    progress: 15,
    image: "assets/ideas/terminal.jpg",
    description: "Diseño y prototipado de estación de trabajo retrofuturista con pantalla esférica y teclado mecánico beige.",
    tags: ["Hardware", "Industrial Design", "Retro"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1
  },
  {
    id: "proj-idea-2",
    title: "Sistema de Diseño & Plugins en Figma",
    category: "ideas",
    priority: "Alta",
    progress: 25,
    image: "assets/ideas/figma.svg",
    description: "Creación de librería de componentes, tokens globales y automatizaciones con la API de plugins de Figma.",
    tags: ["Figma", "UI/UX", "Design System"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2
  },
  {
    id: "proj-idea-3",
    title: "Videojuego Pixel Art Kirby Retro",
    category: "ideas",
    priority: "Media",
    progress: 10,
    image: "assets/ideas/kirby.jpg",
    description: "Desarrollo de animaciones de inhalación y mecánicas de plataformas 2D con estética clásica pixel art 16-bit.",
    tags: ["Pixel Art", "Game Dev", "Animación"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3
  },
  {
    id: "proj-idea-4",
    title: "Analizador de Espectro WiFi con ESP32",
    category: "ideas",
    priority: "Alta",
    progress: 20,
    image: "assets/ideas/wifi_analyzer.jpg",
    description: "Dispositivo compacto portátil para escaneo y análisis visual en tiempo real de canales y frecuencias WiFi 2.4GHz.",
    tags: ["ESP32", "Electrónica", "Redes"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4
  },
  {
    id: "proj-idea-5",
    title: "Colección Vintage & Stickers LPS",
    category: "ideas",
    priority: "Media",
    progress: 5,
    image: "assets/ideas/stickers.jpg",
    description: "Serie de stickers holográficos aesthetic inspirados en figuritas coleccionables retro de animalitos tiernos.",
    tags: ["Ilustración", "Stickers", "Colección"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5
  },

  // --- EN PROGRESO ---
  {
    id: "proj-prog-1",
    title: "Rediseño de Portafolio Personal 2026",
    category: "progress",
    priority: "Alta",
    progress: 75,
    description: "Sitio web interactivo estilo sistema operativo con animaciones fluidas, modo oscuro y vitrina de casos de estudio.",
    tags: ["Frontend", "Tailwind", "JavaScript"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 8
  },
  {
    id: "proj-6",
    title: "API REST de Facturación y Pagos",
    category: "progress",
    priority: "Alta",
    progress: 60,
    description: "Microservicio escalable con autenticación JWT, integración de Stripe y webhooks para e-commerce.",
    tags: ["Node.js", "PostgreSQL", "Backend"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 14
  },
  {
    id: "proj-7",
    title: "Dashboard de Control de Gastos Personales",
    category: "progress",
    priority: "Media",
    progress: 85,
    description: "Panel de control financiero con gráficos interactivos, categorización automática y proyecciones de ahorro.",
    tags: ["Frontend", "Chart.js", "Finanzas"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 18
  },

  // --- FINALIZADOS ---
  {
    id: "proj-8",
    title: "Landing Page para Startup SaaS",
    category: "completed",
    priority: "Alta",
    progress: 100,
    description: "Página web de alta conversión con copy persuasivo, formulario interactivo y optimización de carga ultrarrápida.",
    tags: ["Frontend", "SEO", "Diseño UI"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30
  },
  {
    id: "proj-9",
    title: "Bot de Automatización de Tareas para Telegram",
    category: "completed",
    priority: "Media",
    progress: 100,
    description: "Bot programado en Python para envío diario de recordatorios, cotizaciones de divisas y backups programados.",
    tags: ["Python", "Backend", "Automatización"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 45
  },
  {
    id: "proj-10",
    title: "Extensión de Modo Lectura Limpia",
    category: "completed",
    priority: "Baja",
    progress: 100,
    description: "Extensión para Chrome que elimina anuncios, banners y contenido irrelevante para una lectura sin distracciones.",
    tags: ["Frontend", "Extensiones", "UX"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 60
  },

  // --- INSPIRACIÓN ---
  {
    id: "proj-insp-1",
    title: "Paleta Y2K & Pixel Art Bliss",
    category: "inspiration",
    priority: "Alta",
    progress: 90,
    description: "Referencias de estética digital retro nostálgica, paletas pastel Windows XP (#fffabf, #ffe7ff, #b2f9e7) y texturas pixeladas.",
    tags: ["Pixel Art", "Paleta", "Estética Y2K"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7
  },
  {
    id: "proj-insp-2",
    title: "Moodboard Cute Tech & Figuras LPS",
    category: "inspiration",
    priority: "Media",
    progress: 70,
    description: "Colección visual de animalitos vintage con manchitas, medusas marinas de cristal, stickers con brillos y papelería japonesa.",
    tags: ["Moodboard", "Inspiración", "Cute Tech"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 12
  },
  {
    id: "proj-insp-3",
    title: "Sistemas de Diseño Lúdicos & Microinteracciones",
    category: "inspiration",
    priority: "Alta",
    progress: 85,
    description: "Estudio de animaciones fluidas, physics hover en carpetas, ventanas flotantes estilo Mac y widgets de escritorio interactivos.",
    tags: ["UI/UX", "Interacciones", "Diseño"],
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 20
  }
];

// App State
let projects = [];
let currentCategoryFilter = "ideas";
let currentTagFilter = null;
let currentSearchQuery = "";
let currentSort = "recent";
let isListView = false;

const CATEGORY_ICONS = {
  ideas: "💡",
  progress: "⏳",
  completed: "✅",
  inspiration: "✨"
};

const CATEGORY_NAMES = {
  ideas: "Ideas",
  progress: "En proceso",
  completed: "Finalizados",
  inspiration: "Inspiración"
};

// Below this width folders snap to a tidy grid instead of scattered positions
const COMPACT_BREAKPOINT = 700;

// Visitors get a read-only portfolio. Opening the page once with ?editar
// unlocks editing on that browser; ?ver switches back to the visitor view.
const OWNER_MODE_KEY = "ximena_owner_mode";
let ownerMode = false;

function initOwnerMode() {
  const params = new URLSearchParams(window.location.search);
  try {
    if (params.has("editar")) localStorage.setItem(OWNER_MODE_KEY, "1");
    if (params.has("ver")) localStorage.removeItem(OWNER_MODE_KEY);
    ownerMode = localStorage.getItem(OWNER_MODE_KEY) === "1";
  } catch (e) {
    ownerMode = params.has("editar");
  }
  document.body.classList.toggle("owner-mode", ownerMode);

  const hint = document.getElementById("statusSelectionInfo");
  if (hint) {
    hint.textContent = ownerMode
      ? "Modo edición: crea, edita o mueve proyectos"
      : "Haz clic en un proyecto para ver los detalles";
  }
}

// Audio context for authentic synthesized macOS sound effects
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playPop() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(420, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  playWindowOpen() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(520, this.ctx.currentTime + 0.14);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
    } catch (e) {}
  }

  playTrash() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }

  playKawaiiSparkle() {
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        const startTime = this.ctx.currentTime + idx * 0.045;
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.06, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.22);
      });
    } catch (e) {}
  }
}

const sounds = new SoundEffects();

// DOM Elements
const desktopArea = document.getElementById("desktopArea");
const windowOverlay = document.getElementById("windowOverlay");
const finderWindow = document.getElementById("finderWindow");
const windowTitle = document.getElementById("windowTitle");
const windowIcon = document.getElementById("windowIcon");
const breadcrumbFolder = document.getElementById("breadcrumbFolder");
const categoryTitle = document.getElementById("categoryTitle");
const categoryDesc = document.getElementById("categoryDesc");
const projectsContainer = document.getElementById("projectsContainer");
const emptyState = document.getElementById("emptyState");
const projectSearchInput = document.getElementById("projectSearchInput");
const sortProjects = document.getElementById("sortProjects");
const statusItemCount = document.getElementById("statusItemCount");

// Modals
const projectFormModal = document.getElementById("projectFormModal");
const projectForm = document.getElementById("projectForm");
const formModalTitle = document.getElementById("formModalTitle");
const aboutModal = document.getElementById("aboutModal");
const spotlightOverlay = document.getElementById("spotlightOverlay");
const spotlightInput = document.getElementById("spotlightInput");
const spotlightResults = document.getElementById("spotlightResults");
const contextMenu = document.getElementById("contextMenu");
const appleDropdown = document.getElementById("appleDropdown");

// "Sobre mí" Profile Modal Elements
const aboutMeOverlay = document.getElementById("aboutMeOverlay");
const aboutMeWindow = document.getElementById("aboutMeWindow");
const aboutMeParagraph = document.getElementById("aboutMeParagraph");
const aboutMeInput = document.getElementById("aboutMeInput");
const aboutMeTextDisplay = document.getElementById("aboutMeTextDisplay");
const aboutMeEditCard = document.getElementById("aboutMeEditCard");
const btnEditBio = document.getElementById("btnEditBio");
const btnEditBioIcon = document.getElementById("btnEditBioIcon");
const btnEditBioText = document.getElementById("btnEditBioText");
const aboutMeSaveStatus = document.getElementById("aboutMeSaveStatus");

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initOwnerMode();
  loadProjects();
  initClock();
  initRandomFolderPositions();
  setupFolderInteractions();
  setupWindowControls();
  setupSidebarNavigation();
  setupSearchAndSort();
  setupProjectForm();
  setupMarqueeSelection();
  setupSpotlight();
  setupContextMenu();
  setupKeyboardShortcuts();
  initAboutMe();
  setupAestheticStickers();
  restoreFolderPhotos();
  setupPixelWallpaper();
  setupProjectDetail();
  setupCompactLayoutWatcher();

  // Show a welcome toast on first launch
  setTimeout(() => {
    if (ownerMode) {
      showToast("Modo edición", "Puedes crear y editar proyectos. Abre la página con ?ver para ver la vista de visitante.");
    } else if (window.matchMedia("(hover: none)").matches) {
      showToast("Página personal", "Toca una carpeta para ver mis proyectos.");
    } else {
      showToast("Página personal", "Pasa el mouse sobre las carpetas o haz clic para ver mis proyectos.");
    }
  }, 900);
});

// Load projects from localStorage or default
function loadProjects() {
  const saved = localStorage.getItem("mac_xp_projects_v3");
  if (saved) {
    try {
      projects = JSON.parse(saved);
    } catch (e) {
      projects = [...DEFAULT_PROJECTS];
    }
    mergeNewDefaultProjects();
  } else {
    projects = [...DEFAULT_PROJECTS];
    markDefaultProjectsSeen();
    saveProjects();
  }
  updateFolderCounters();
}

// Add default projects shipped after the visitor's first load, without
// bringing back defaults they already deleted.
function mergeNewDefaultProjects() {
  let seen = null;
  try {
    seen = JSON.parse(localStorage.getItem("mac_xp_seen_defaults"));
  } catch (e) {}

  if (Array.isArray(seen)) {
    const fresh = DEFAULT_PROJECTS.filter(d => !seen.includes(d.id) && !projects.some(p => p.id === d.id));
    if (fresh.length) {
      projects.push(...fresh);
      saveProjects();
    }
  }
  markDefaultProjectsSeen();
}

function markDefaultProjectsSeen() {
  localStorage.setItem("mac_xp_seen_defaults", JSON.stringify(DEFAULT_PROJECTS.map(d => d.id)));
}

function saveProjects() {
  localStorage.setItem("mac_xp_projects_v3", JSON.stringify(projects));
  updateFolderCounters();
}

// Update badges on desktop folders and sidebar
function updateFolderCounters() {
  const counts = {
    ideas: projects.filter(p => p.category === "ideas").length,
    progress: projects.filter(p => p.category === "progress").length,
    completed: projects.filter(p => p.category === "completed").length,
    inspiration: projects.filter(p => p.category === "inspiration").length,
    all: projects.length
  };

  const countIdeasEl = document.getElementById("count-ideas");
  const countProgressEl = document.getElementById("count-progress");
  const countCompletedEl = document.getElementById("count-completed");
  const countInspirationEl = document.getElementById("count-inspiration");

  if (countIdeasEl) countIdeasEl.textContent = counts.ideas;
  if (countProgressEl) countProgressEl.textContent = counts.progress;
  if (countCompletedEl) countCompletedEl.textContent = counts.completed;
  if (countInspirationEl) countInspirationEl.textContent = counts.inspiration;

  // Sidebar badges
  const badgeIdeas = document.getElementById("badgeIdeas");
  const badgeProgress = document.getElementById("badgeProgress");
  const badgeCompleted = document.getElementById("badgeCompleted");
  const badgeInspiration = document.getElementById("badgeInspiration");
  const badgeAll = document.getElementById("badgeAll");

  if (badgeIdeas) badgeIdeas.textContent = counts.ideas;
  if (badgeProgress) badgeProgress.textContent = counts.progress;
  if (badgeCompleted) badgeCompleted.textContent = counts.completed;
  if (badgeInspiration) badgeInspiration.textContent = counts.inspiration;
  if (badgeAll) badgeAll.textContent = counts.all;
}

// macOS Clock in Menubar
function initClock() {
  const clockEl = document.getElementById("clockDisplay");
  function updateTime() {
    const now = new Date();
    const days = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
    const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"];
    const dayName = days[now.getDay()];
    const dayNum = now.getDate();
    const monthName = months[now.getMonth()];
    let hours = now.getHours();
    const mins = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    clockEl.textContent = `${dayName} ${dayNum} ${monthName} • ${hours}:${mins} ${ampm}`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// ==========================================================================
// Random Scattered Folder Positioning & Drag & Drop Physics
// ==========================================================================

const MOCKUP_DEFAULT_RATIOS = {
  "folder-ideas": { rx: 0.118, ry: 0.259 },
  "folder-completed": { rx: 0.503, ry: 0.167 },
  "folder-progress": { rx: 0.328, ry: 0.460 },
  "folder-inspiration": { rx: 0.834, ry: 0.516 }
};

function isCompactLayout() {
  return window.innerWidth < COMPACT_BREAKPOINT;
}

// Staggered pop-in shared by both layouts
function revealFolder(folder, idx) {
  folder.style.opacity = "0";
  folder.style.transform = "scale(0.85) translateY(20px)";
  setTimeout(() => {
    folder.style.transition = "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease";
    folder.style.opacity = "1";
    folder.style.transform = "scale(1) translateY(0)";
  }, idx * 75);
}

// Phones: a 2x2 grid in folder order. Scattered desktop coordinates would pile
// the folders on top of each other on a narrow screen.
function layoutFoldersCompact(folders) {
  const order = ["ideas", "progress", "completed", "inspiration"];
  const sorted = Array.from(folders).sort((a, b) =>
    order.indexOf(a.getAttribute("data-category")) - order.indexOf(b.getAttribute("data-category")));
  const colWidth = window.innerWidth / 2;
  const rowHeight = 170;

  sorted.forEach((folder, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    folder.style.left = `${Math.round(colWidth * col + (colWidth - folder.offsetWidth) / 2)}px`;
    folder.style.top = `${36 + row * rowHeight}px`;
    revealFolder(folder, idx);
  });
}

function setupCompactLayoutWatcher() {
  let wasCompact = isCompactLayout();
  let timer = null;
  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const compact = isCompactLayout();
      if (compact !== wasCompact) {
        wasCompact = compact;
        initRandomFolderPositions();
      }
    }, 200);
  });
}

function initRandomFolderPositions(forceRandom = false) {
  const folders = document.querySelectorAll(".tucked-folder");
  if (!folders.length) return;

  if (isCompactLayout()) {
    layoutFoldersCompact(folders);
    return;
  }

  const savedPos = localStorage.getItem("mac_folder_positions_v3");
  let positions = {};

  if (savedPos && !forceRandom) {
    try {
      positions = JSON.parse(savedPos);
    } catch (e) {
      positions = {};
    }
  }

  // Calculate safe bounding area
  const deskWidth = window.innerWidth || document.documentElement.clientWidth || 1200;
  const deskHeight = window.innerHeight || document.documentElement.clientHeight || 800;

  const minX = 40;
  const maxX = Math.max(minX + 200, deskWidth - 180);
  const minY = 50;
  const maxY = Math.max(minY + 200, deskHeight - 190);

  const placedPositions = [];

  folders.forEach((folder, idx) => {
    const id = folder.id;

    if (positions[id] && !forceRandom) {
      // Use saved coordinates if valid
      let x = Math.min(maxX, Math.max(minX, positions[id].x));
      let y = Math.min(maxY, Math.max(minY, positions[id].y));
      folder.style.left = `${x}px`;
      folder.style.top = `${y}px`;
      placedPositions.push({ x, y });
    } else if (!forceRandom && MOCKUP_DEFAULT_RATIOS[id]) {
      // Position exactly according to user's layout mockup
      let x = Math.round(deskWidth * MOCKUP_DEFAULT_RATIOS[id].rx);
      let y = Math.round(deskHeight * MOCKUP_DEFAULT_RATIOS[id].ry);
      x = Math.min(maxX, Math.max(minX, x));
      y = Math.min(maxY, Math.max(minY, y));
      folder.style.left = `${x}px`;
      folder.style.top = `${y}px`;
      placedPositions.push({ x, y });
      positions[id] = { x, y };
    } else {
      // Generate scattered random position with collision avoidance
      let attempts = 0;
      let x = 0;
      let y = 0;
      let safe = false;

      while (!safe && attempts < 100) {
        x = Math.floor(minX + Math.random() * (maxX - minX));
        y = Math.floor(minY + Math.random() * (maxY - minY));

        // Check distance against already placed folders
        safe = placedPositions.every(pos => {
          const dx = pos.x - x;
          const dy = pos.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          return dist >= 165; // Safe distance
        });

        attempts++;
      }

      folder.style.left = `${x}px`;
      folder.style.top = `${y}px`;
      placedPositions.push({ x, y });
      positions[id] = { x, y };
    }

    revealFolder(folder, idx);
  });

  localStorage.setItem("mac_folder_positions_v3", JSON.stringify(positions));
}

function setupFolderInteractions() {
  const folders = document.querySelectorAll(".tucked-folder");

  folders.forEach(folder => {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let moved = false;

    // Pointer events cover mouse, touch and pen; stop the browser from
    // scrolling/zooming while a folder is being dragged on touch screens.
    folder.style.touchAction = "none";

    // Drag and drop physics on desktop
    folder.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return; // Only left click / primary touch
      sounds.playPop();
      isDragging = true;
      moved = false;
      startX = e.clientX;
      startY = e.clientY;

      // offsetLeft/Top ignore hover transforms, so the folder doesn't jump on grab
      currentX = folder.offsetLeft;
      currentY = folder.offsetTop;

      folders.forEach(f => f.classList.remove("selected"));
      folder.classList.add("selected");

      function onMouseMove(ev) {
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;

        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
          moved = true;
        }

        if (moved) {
          folder.style.left = `${currentX + dx}px`;
          folder.style.top = `${currentY + dy}px`;
          folder.style.zIndex = "100";
        }
      }

      function onMouseUp(ev) {
        isDragging = false;
        window.removeEventListener("pointermove", onMouseMove);
        window.removeEventListener("pointerup", onMouseUp);
        window.removeEventListener("pointercancel", onMouseUp);

        if (moved) {
          folder.style.zIndex = "";
          // Constrain within screen
          const deskWidth = window.innerWidth;
          const deskHeight = window.innerHeight;
          let finalX = Math.max(30, Math.min(deskWidth - 150, currentX + (ev.clientX - startX)));
          let finalY = Math.max(40, Math.min(deskHeight - 160, currentY + (ev.clientY - startY)));

          folder.style.left = `${finalX}px`;
          folder.style.top = `${finalY}px`;

          // Only desktop positions are remembered; the phone grid is always recomputed
          if (isCompactLayout()) return;

          // Save position
          const savedPos = localStorage.getItem("mac_folder_positions_v3");
          let positions = savedPos ? JSON.parse(savedPos) : {};
          positions[folder.id] = { x: finalX, y: finalY };
          localStorage.setItem("mac_folder_positions_v3", JSON.stringify(positions));
        } else {
          // Click to open Finder Modal
          const cat = folder.getAttribute("data-category") || "ideas";
          if (ev.type !== "pointercancel") openFolderModal(cat);
        }
      }

      window.addEventListener("pointermove", onMouseMove);
      window.addEventListener("pointerup", onMouseUp);
      window.addEventListener("pointercancel", onMouseUp);
    });

    // Keyboard accessibility
    folder.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        const cat = folder.getAttribute("data-category") || "ideas";
        openFolderModal(cat);
      }
    });

    // Support Drag and Drop files onto folder to customize preview photos
    folder.addEventListener("dragover", (e) => {
      e.preventDefault();
      folder.classList.add("drag-hover");
    });

    folder.addEventListener("dragleave", () => {
      folder.classList.remove("drag-hover");
    });

    folder.addEventListener("drop", (e) => {
      e.preventDefault();
      folder.classList.remove("drag-hover");
      if (ownerMode && e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleDroppedPhotos(folder, e.dataTransfer.files);
      }
    });
  });
}

// Handle photos dropped directly onto a folder
function handleDroppedPhotos(folder, files) {
  const photoSlots = folder.querySelectorAll(".polaroid-photo");
  const label = folder.querySelector(".folder-label-aesthetic");
  const folderName = label ? label.textContent : folder.id;
  const images = Array.from(files).filter(file => file.type.startsWith("image/"));

  images.slice(0, 3).forEach((file, index) => {
    if (!photoSlots[index]) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      // Shrink before storing: full-size data URLs quickly exceed the localStorage quota
      const thumb = await downscaleImage(ev.target.result, 320);
      setPhotoSlot(photoSlots[index], thumb);
      saveFolderPhoto(folder.id, index, thumb);
      showToast("Foto añadida", `Imagen colocada en vista previa de "${folderName}".`);
    };
    reader.readAsDataURL(file);
  });
}

function setPhotoSlot(slot, url) {
  slot.innerHTML = `<img src="${escapeHtml(url)}" alt="Vista previa" style="width:100%;height:100%;object-fit:cover;">`;
}

function downscaleImage(dataUrl, maxSize) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.82));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

function loadFolderPhotos() {
  try {
    return JSON.parse(localStorage.getItem("mac_folder_photos_v1")) || {};
  } catch (e) {
    return {};
  }
}

function saveFolderPhoto(folderId, index, url) {
  const photos = loadFolderPhotos();
  photos[folderId] = photos[folderId] || {};
  photos[folderId][index] = url;
  try {
    localStorage.setItem("mac_folder_photos_v1", JSON.stringify(photos));
  } catch (e) {
    showToast("Sin espacio", "La foto se muestra, pero no se pudo guardar para la próxima visita.");
  }
}

function restoreFolderPhotos() {
  const photos = loadFolderPhotos();
  Object.keys(photos).forEach(folderId => {
    const folder = document.getElementById(folderId);
    if (!folder) return;
    const photoSlots = folder.querySelectorAll(".polaroid-photo");
    Object.keys(photos[folderId]).forEach(index => {
      if (photoSlots[index]) setPhotoSlot(photoSlots[index], photos[folderId][index]);
    });
  });
}

// Helper function to programmatically set preview images for any folder
window.setFolderPhotos = function(folderId, photoUrls) {
  const folder = document.getElementById(folderId);
  if (!folder) return;
  const photoSlots = folder.querySelectorAll(".polaroid-photo");
  photoUrls.forEach((url, i) => {
    if (photoSlots[i]) {
      photoSlots[i].innerHTML = `<img src="${url}" alt="Vista previa" style="width:100%;height:100%;object-fit:cover;">`;
    }
  });
};

// Re-randomize positions on demand
function resetFolderPositions() {
  initRandomFolderPositions(true);
  showToast("🎲 Posiciones aleatorias", "Carpetas esparcidas en posiciones aleatorias por la pantalla.");
}

// ==========================================================================
// Aesthetic Kawaii Stickers: Interactive Glitter Silhouette & Particle Sparks
// ==========================================================================
function setupAestheticStickers() {
  const stickers = document.querySelectorAll(".aesthetic-sticker");
  if (!stickers.length) return;

  const sparklesChars = ["✨", "⭐", "💖", "🌸", "✧", "⋆", "✦"];

  stickers.forEach(sticker => {
    function spawnGlitter(x, y) {
      const p = document.createElement("div");
      p.className = "glitter-particle";
      p.textContent = sparklesChars[Math.floor(Math.random() * sparklesChars.length)];
      
      const offsetX = (Math.random() - 0.5) * 80;
      const offsetY = (Math.random() - 0.5) * 80;
      
      p.style.left = `${x + offsetX}px`;
      p.style.top = `${y + offsetY}px`;
      p.style.fontSize = `${13 + Math.random() * 11}px`;
      
      desktopArea.appendChild(p);
      setTimeout(() => p.remove(), 1200);
    }

    sticker.addEventListener("mouseenter", () => {
      sounds.playKawaiiSparkle();
      const rect = sticker.getBoundingClientRect();
      const deskRect = desktopArea.getBoundingClientRect();
      const cx = (rect.left - deskRect.left) + rect.width / 2;
      const cy = (rect.top - deskRect.top) + rect.height / 2;
      for (let i = 0; i < 5; i++) {
        setTimeout(() => spawnGlitter(cx, cy), i * 140);
      }
    });

    sticker.addEventListener("click", () => {
      sounds.playKawaiiSparkle();
      const rect = sticker.getBoundingClientRect();
      const deskRect = desktopArea.getBoundingClientRect();
      const cx = (rect.left - deskRect.left) + rect.width / 2;
      const cy = (rect.top - deskRect.top) + rect.height / 2;

      // Burst of sparkles
      for (let i = 0; i < 10; i++) {
        spawnGlitter(cx, cy);
      }

      // Cute squash and stretch bounce
      sticker.animate([
        { transform: "scale(1) translateY(0)" },
        { transform: "scale(1.22, 0.85) translateY(4px)" },
        { transform: "scale(0.92, 1.15) translateY(-14px)" },
        { transform: "scale(1.06, 0.96) translateY(-4px)" },
        { transform: "scale(1) translateY(0)" }
      ], {
        duration: 550,
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
      });
    });

    sticker.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        sticker.click();
      }
    });
  });
}

// ==========================================================================
// Procedural Pixel-Art "Bliss" Wallpaper
// Drawn at low resolution and scaled up with crisp pixels, so it fits any
// screen size with no seams, stretching or blurry bands.
// ==========================================================================
const WALLPAPER_PIXEL = 6; // Screen pixels per art pixel
const WALLPAPER_SEED = 20011025; // Fixed seed: same clouds on every visit

const WALLPAPER_PALETTE = {
  // Zenith -> horizon
  sky: [[46, 92, 201], [58, 110, 219], [76, 132, 230], [99, 155, 239], [128, 180, 246], [163, 204, 250]],
  // Shadowed underside -> sunlit top
  cloud: [[176, 199, 240], [206, 222, 248], [232, 240, 253], [255, 255, 255]],
  // Sunlit crest -> deep foreground
  grass: [[184, 222, 92], [150, 204, 72], [118, 182, 58], [91, 155, 47], [68, 126, 37], [48, 96, 28]]
};

function setupPixelWallpaper() {
  // Paint the whole screen (not just #desktopArea) so the translucent
  // menubar blurs the same wallpaper that's under the folders.
  const screen = document.getElementById("desktop") || desktopArea;
  if (!screen) return;
  let resizeTimer = null;

  const paint = () => {
    const width = screen.clientWidth || window.innerWidth;
    const height = screen.clientHeight || window.innerHeight;
    const art = renderBlissWallpaper(width, height);
    if (!art) return;
    screen.style.backgroundImage = `url(${art.url})`;
    screen.style.backgroundSize = `${art.w * WALLPAPER_PIXEL}px ${art.h * WALLPAPER_PIXEL}px`;
    screen.style.backgroundPosition = "top left";
    screen.style.backgroundRepeat = "no-repeat";
  };

  // Deep grass fallback so a strip is never black while a repaint is pending
  screen.style.backgroundColor = "rgb(48, 96, 28)";
  paint();

  // Watch the element itself: the viewport can settle after DOMContentLoaded
  // without a window resize event, which left unpainted strips.
  const schedulePaint = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(paint, 150);
  };
  if (window.ResizeObserver) {
    new ResizeObserver(schedulePaint).observe(screen);
  } else {
    window.addEventListener("resize", schedulePaint);
  }
}

function renderBlissWallpaper(width, height) {
  const w = Math.max(1, Math.ceil(width / WALLPAPER_PIXEL));
  const h = Math.max(1, Math.ceil(height / WALLPAPER_PIXEL));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const img = ctx.createImageData(w, h);
  const data = img.data;

  // Seeded value noise + fractal layering for natural-looking clouds and grass
  const hash = (x, y) => {
    let n = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + WALLPAPER_SEED) | 0;
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
  };
  const smooth = t => t * t * (3 - 2 * t);
  const noise = (x, y) => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = smooth(x - xi);
    const yf = smooth(y - yi);
    const a = hash(xi, yi);
    const b = hash(xi + 1, yi);
    const c = hash(xi, yi + 1);
    const d = hash(xi + 1, yi + 1);
    return a + (b - a) * xf + (c - a) * yf + (a - b - c + d) * xf * yf;
  };
  const fbm = (x, y) => {
    let value = 0;
    let amp = 0.5;
    let freq = 1;
    for (let o = 0; o < 4; o++) {
      value += amp * noise(x * freq, y * freq);
      freq *= 2;
      amp *= 0.5;
    }
    return value / 0.9375;
  };
  const clamp01 = v => Math.min(1, Math.max(0, v));

  // 4x4 ordered dithering gives the retro banding without hard seams
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  const pick = (palette, t, x, y) => {
    const threshold = (BAYER[(y & 3) * 4 + (x & 3)] + 0.5) / 16;
    const idx = Math.floor(clamp01(t) * (palette.length - 1) + threshold);
    return palette[Math.min(palette.length - 1, idx)];
  };

  // Rolling Bliss hill: tall crest on the left, gentle rise on the right
  const hillTop = x => {
    const u = x / w;
    return h * (0.6
      - 0.12 * Math.exp(-(((u - 0.3) / 0.28) ** 2))
      - 0.05 * Math.exp(-(((u - 0.88) / 0.22) ** 2))
      + 0.008 * Math.sin(u * 11));
  };

  for (let x = 0; x < w; x++) {
    const top = hillTop(x);
    const u = x / w;

    for (let y = 0; y < h; y++) {
      let color;

      if (y >= top) {
        // Grass: brighter at the crest and toward the sunlit left
        const depth = (y - top) / Math.max(1, h - top);
        const edgeGlow = y - top < 1.5 ? -0.25 : 0;
        const sideShade = Math.max(0, u - 0.3) * 0.3;
        const texture = (fbm(x / 5, y / 2.5) - 0.5) * 0.35;
        color = pick(WALLPAPER_PALETTE.grass, depth * 0.85 + sideShade + texture + edgeGlow, x, y);
      } else {
        const skyT = y / Math.max(1, top);
        // Clouds: stretched horizontally, more of them in the upper sky
        const nx = x / 22 + 7.3;
        const ny = y / 7;
        const density = fbm(nx, ny) + 0.1 * (1 - skyT) - 0.04;
        const cloudEdge = 0.6;

        if (density > cloudEdge) {
          // Sunlit from above: compare with the cloud density just below
          const below = fbm(nx, (y + 1.5) / 7) + 0.1 * (1 - skyT) - 0.04;
          const lit = clamp01((density - cloudEdge) / 0.16) + (density >= below ? 0.2 : -0.2);
          color = pick(WALLPAPER_PALETTE.cloud, lit, x, y);
        } else {
          color = pick(WALLPAPER_PALETTE.sky, skyT, x, y);
        }
      }

      const i = (y * w + x) * 4;
      data[i] = color[0];
      data[i + 1] = color[1];
      data[i + 2] = color[2];
      data[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);

  // Upscale here with smoothing off instead of CSS image-rendering, which
  // would be inherited and pixelate the stickers and photos too.
  const scale = WALLPAPER_PIXEL * Math.min(2, Math.ceil(window.devicePixelRatio || 1));
  const big = document.createElement("canvas");
  big.width = w * scale;
  big.height = h * scale;
  const bigCtx = big.getContext("2d");
  if (!bigCtx) return null;
  bigCtx.imageSmoothingEnabled = false;
  bigCtx.drawImage(canvas, 0, 0, big.width, big.height);

  return { url: big.toDataURL("image/png"), w, h };
}

// ==========================================================================
// Finder Window System: Open, Close, Minimize, Maximize, Drag
// ==========================================================================
function openFolderModal(category = "ideas") {
  sounds.playWindowOpen();
  currentCategoryFilter = category;
  currentTagFilter = null;
  currentSearchQuery = "";
  projectSearchInput.value = "";

  updateWindowMeta(category);
  renderProjects();

  finderWindow.classList.remove("minimized");
  finderWindow.classList.add("open");
  updateActiveSidebarItem(category);
}

function closeFolderModal() {
  finderWindow.classList.remove("open");
  finderWindow.classList.remove("maximized");
}

function updateWindowMeta(category) {
  const metaMap = {
    ideas: {
      title: "Ideas — Proyectos en Planificación",
      icon: "💡",
      crumb: "Ideas",
      header: "Proyectos en Ideas",
      desc: "Conceptos, bocetos e iniciativas planificadas para comenzar."
    },
    progress: {
      title: "En proceso — Proyectos Activos",
      icon: "⏳",
      crumb: "En proceso",
      header: "Proyectos En Proceso",
      desc: "Desarrollo activo, diseño y tareas en ejecución continua."
    },
    completed: {
      title: "Finalizados — Proyectos Completados",
      icon: "✅",
      crumb: "Finalizados",
      header: "Proyectos Finalizados",
      desc: "Proyectos terminados con éxito, lanzados o archivados."
    },
    inspiration: {
      title: "Inspiración — Moodboards & Referencias",
      icon: "✨",
      crumb: "Inspiración",
      header: "Inspiración & Moodboards",
      desc: "Colección visual, paletas retro, stickers aesthetic y referencias."
    },
    all: {
      title: "Todos los Proyectos — Vista General",
      icon: "🗂️",
      crumb: "Todos los Proyectos",
      header: "Todos los Proyectos",
      desc: "Vista consolidada de todos tus proyectos e iniciativas."
    }
  };

  const meta = metaMap[category] || metaMap.all;
  windowTitle.textContent = meta.title;
  windowIcon.textContent = meta.icon;
  breadcrumbFolder.textContent = meta.crumb;
  categoryTitle.textContent = meta.header;
  categoryDesc.textContent = meta.desc;
}

function updateActiveSidebarItem(category) {
  const items = document.querySelectorAll(".sidebar-item");
  items.forEach(item => {
    if (item.getAttribute("data-folder") === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Window controls & Window Dragging
function setupWindowControls() {
  const closeBtn = document.getElementById("closeBtn");
  const minimizeBtn = document.getElementById("minimizeBtn");
  const maximizeBtn = document.getElementById("maximizeBtn");
  const titlebar = document.getElementById("windowTitleBar");

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeFolderModal();
  });

  minimizeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    finderWindow.classList.add("minimized");
    showToast("Finder", "Ventana minimizada al Dock.");
  });

  maximizeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    finderWindow.classList.toggle("maximized");
  });

  // Drag window by titlebar
  let isDraggingWindow = false;
  let offsetX = 0;
  let offsetY = 0;

  titlebar.addEventListener("mousedown", (e) => {
    // Only drag with left mouse button & when not clicking buttons/inputs
    if (e.target.closest("button") || e.target.closest("input")) return;
    if (finderWindow.classList.contains("maximized")) return;

    isDraggingWindow = true;
    const rect = finderWindow.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    function onMouseMove(ev) {
      if (!isDraggingWindow) return;
      finderWindow.style.left = `${ev.clientX - offsetX}px`;
      finderWindow.style.top = `${ev.clientY - offsetY}px`;
      finderWindow.style.margin = "0";
    }

    function onMouseUp() {
      isDraggingWindow = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  // View mode switcher: Grid vs List
  const tabGrid = document.getElementById("tabGrid");
  const tabList = document.getElementById("tabList");

  tabGrid.addEventListener("click", () => {
    tabGrid.classList.add("active");
    tabList.classList.remove("active");
    projectsContainer.classList.remove("list-view");
    isListView = false;
    renderProjects();
  });

  tabList.addEventListener("click", () => {
    tabList.classList.add("active");
    tabGrid.classList.remove("active");
    projectsContainer.classList.add("list-view");
    isListView = true;
    renderProjects();
  });
}

// Sidebar Navigation
function setupSidebarNavigation() {
  const sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      const folder = item.getAttribute("data-folder");
      currentCategoryFilter = folder;
      currentTagFilter = null;
      updateWindowMeta(folder);
      updateActiveSidebarItem(folder);
      renderProjects();
    });
  });

  // Tag filter items
  const tagItems = document.querySelectorAll(".tag-item");
  tagItems.forEach(item => {
    item.addEventListener("click", () => {
      const tag = item.getAttribute("data-filter-tag");
      currentTagFilter = tag;
      categoryTitle.textContent = `Etiqueta: ${tag}`;
      categoryDesc.textContent = `Proyectos filtrados con la etiqueta #${tag}.`;
      renderProjects();
    });
  });
}

// Search and Sort
function setupSearchAndSort() {
  projectSearchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value.toLowerCase().trim();
    renderProjects();
  });

  sortProjects.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProjects();
  });
}

// ==========================================================================
// Render Projects Cards
// ==========================================================================
function renderProjects() {
  let filtered = projects.filter(p => {
    // Category filter
    if (currentCategoryFilter !== "all" && p.category !== currentCategoryFilter) {
      return false;
    }
    // Tag filter
    if (currentTagFilter) {
      const hasTag = (p.tags || []).some(t => t.toLowerCase() === currentTagFilter.toLowerCase());
      if (!hasTag) return false;
    }
    // Search query
    if (currentSearchQuery) {
      const matchTitle = p.title.toLowerCase().includes(currentSearchQuery);
      const matchDesc = p.description.toLowerCase().includes(currentSearchQuery);
      const matchTag = p.tags.some(t => t.toLowerCase().includes(currentSearchQuery));
      if (!matchTitle && !matchDesc && !matchTag) return false;
    }
    return true;
  });

  // Sorting
  filtered.sort((a, b) => {
    if (currentSort === "title") return a.title.localeCompare(b.title);
    if (currentSort === "progress") return b.progress - a.progress;
    if (currentSort === "priority") {
      const priorityWeights = { "Alta": 3, "Media": 2, "Baja": 1 };
      return (priorityWeights[b.priority] || 0) - (priorityWeights[a.priority] || 0);
    }
    // default: recent
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  // Update item count in status bar
  statusItemCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'proyecto' : 'proyectos'}`;

  // Clear container
  projectsContainer.innerHTML = "";

  if (filtered.length === 0) {
    emptyState.style.display = "block";
    projectsContainer.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  // Let the stylesheet pick grid vs. list (.list-view) layout
  projectsContainer.style.display = "";

  // Build Project Cards
  filtered.forEach(proj => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.tabIndex = 0;
    card.setAttribute("aria-label", `Ver detalles de ${proj.title}`);

    // Category folder icon
    const folderIcon = CATEGORY_ICONS[proj.category] || "📁";

    // Priority class
    const priorityClass = `priority-${proj.priority ? proj.priority.toLowerCase() : 'media'}`;

    // Tags markup
    const tagsHtml = (proj.tags || []).map(t => `<span class="card-tag">#${escapeHtml(t)}</span>`).join("");

    // Progress class
    const progressClass = `progress-${proj.category}`;

    card.innerHTML = `
      ${proj.image ? `
        <div class="card-cover-image">
          <img src="${escapeHtml(proj.image)}" alt="${escapeHtml(proj.title)}" loading="lazy" style="width:100%;height:135px;object-fit:cover;border-radius:8px;margin-bottom:6px;box-shadow:0 2px 6px rgba(0,0,0,0.1);background:#f9fafb;">
        </div>
      ` : ''}
      <div class="card-top-row">
        <div class="card-title-group">
          <span class="card-folder-icon">${folderIcon}</span>
          <h4 class="card-title">${escapeHtml(proj.title)}</h4>
        </div>
        <span class="priority-badge ${priorityClass}">Prioridad ${escapeHtml(proj.priority || 'Media')}</span>
      </div>

      <p class="card-description">${escapeHtml(proj.description || 'Sin descripción detallada.')}</p>

      <div class="card-tags">
        ${tagsHtml}
      </div>

      <div class="card-progress-section">
        <div class="progress-header">
          <span>Progreso</span>
          <span>${proj.progress}%</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-val ${progressClass}" style="width: ${proj.progress}%;"></div>
        </div>
      </div>

      <div class="card-footer owner-only">
        <div class="status-changer">
          <span>Mover:</span>
          <select class="change-status-select" data-id="${proj.id}">
            <option value="ideas" ${proj.category === 'ideas' ? 'selected' : ''}>💡 Ideas</option>
            <option value="progress" ${proj.category === 'progress' ? 'selected' : ''}>⏳ En proceso</option>
            <option value="completed" ${proj.category === 'completed' ? 'selected' : ''}>✅ Finalizados</option>
            <option value="inspiration" ${proj.category === 'inspiration' ? 'selected' : ''}>✨ Inspiración</option>
          </select>
        </div>

        <div class="card-action-btns">
          <button class="card-btn btn-edit" data-id="${proj.id}" title="Editar proyecto">✏️</button>
          <button class="card-btn btn-delete" data-id="${proj.id}" title="Eliminar proyecto">🗑️</button>
        </div>
      </div>
    `;

    // Event listeners on card buttons
    const statusSelect = card.querySelector(".change-status-select");
    statusSelect.addEventListener("change", (e) => {
      changeProjectCategory(proj.id, e.target.value);
    });

    const btnEdit = card.querySelector(".btn-edit");
    btnEdit.addEventListener("click", () => {
      openEditProjectModal(proj.id);
    });

    const btnDelete = card.querySelector(".btn-delete");
    btnDelete.addEventListener("click", () => {
      deleteProject(proj.id);
    });

    // Clicking anywhere except the edit controls opens the detail view
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-footer")) return;
      openProjectDetail(proj.id);
    });
    card.addEventListener("keydown", (e) => {
      if (e.target !== card) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectDetail(proj.id);
      }
    });

    projectsContainer.appendChild(card);
  });
}

function resetFilters() {
  currentCategoryFilter = "all";
  currentTagFilter = null;
  currentSearchQuery = "";
  projectSearchInput.value = "";
  updateActiveSidebarItem("all");
  updateWindowMeta("all");
  renderProjects();
}

// ==========================================================================
// Project Detail View
// ==========================================================================
const projectDetailModal = document.getElementById("projectDetailModal");
let detailProjectId = null;

function setupProjectDetail() {
  if (!projectDetailModal) return;

  document.getElementById("btnCloseProjectDetail").addEventListener("click", closeProjectDetail);
  projectDetailModal.addEventListener("click", (e) => {
    if (e.target === projectDetailModal) closeProjectDetail();
  });
  document.getElementById("btnDetailEdit").addEventListener("click", () => {
    const id = detailProjectId;
    closeProjectDetail();
    openEditProjectModal(id);
  });
}

function openProjectDetail(id) {
  const p = projects.find(item => item.id === id);
  if (!p || !projectDetailModal) return;
  sounds.playWindowOpen();
  detailProjectId = id;

  const icon = CATEGORY_ICONS[p.category] || "📁";
  const cover = document.getElementById("detailCover");
  cover.className = p.image ? "detail-cover" : `detail-cover detail-cover-${p.category}`;
  cover.innerHTML = p.image
    ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">`
    : `<span class="detail-cover-icon">${icon}</span>`;

  const priority = p.priority || "Media";
  document.getElementById("detailMeta").innerHTML = `
    <span>${icon} ${escapeHtml(CATEGORY_NAMES[p.category] || p.category)}</span>
    <span class="priority-badge priority-${escapeHtml(priority.toLowerCase())}">Prioridad ${escapeHtml(priority)}</span>
  `;
  document.getElementById("detailTitle").textContent = p.title;
  document.getElementById("detailDescription").textContent = p.description || "Sin descripción detallada.";
  document.getElementById("detailTags").innerHTML =
    (p.tags || []).map(t => `<span class="card-tag">#${escapeHtml(t)}</span>`).join("");
  document.getElementById("detailProgress").innerHTML = `
    <div class="progress-header">
      <span>Progreso</span>
      <span>${Number(p.progress) || 0}%</span>
    </div>
    <div class="progress-bar-track">
      <div class="progress-bar-val progress-${escapeHtml(p.category)}" style="width: ${Number(p.progress) || 0}%;"></div>
    </div>
  `;

  projectDetailModal.classList.add("open");
  setTimeout(() => document.getElementById("btnCloseProjectDetail").focus(), 80);
}

function closeProjectDetail() {
  if (projectDetailModal) projectDetailModal.classList.remove("open");
}

// Move project between categories
function changeProjectCategory(id, newCat) {
  if (!ownerMode) return;
  const p = projects.find(item => item.id === id);
  if (!p) return;
  sounds.playPop();
  p.category = newCat;
  if (newCat === "completed") {
    p.progress = 100;
  } else if (newCat === "ideas" && p.progress === 100) {
    p.progress = 0;
  }
  saveProjects();
  renderProjects();
  showToast("Proyecto movido", `"${p.title}" se movió a ${CATEGORY_NAMES[newCat] || newCat}.`);
}

// Delete project
function deleteProject(id) {
  if (!ownerMode) return;
  const p = projects.find(item => item.id === id);
  if (!p) return;
  if (confirm(`¿Deseas mover "${p.title}" a la papelera?`)) {
    sounds.playTrash();
    projects = projects.filter(item => item.id !== id);
    saveProjects();
    renderProjects();
    showToast("Papelera", `"${p.title}" fue eliminado.`);
  }
}

// ==========================================================================
// Add / Edit Project Form Modal
// ==========================================================================
function setupProjectForm() {
  const btnOpenNew = document.getElementById("btnOpenNewProjectModal");
  const btnClose = document.getElementById("btnCloseProjectForm");
  const btnCancel = document.getElementById("btnCancelProjectForm");

  btnOpenNew.addEventListener("click", () => {
    openNewProjectModal();
  });

  btnClose.addEventListener("click", closeProjectFormModal);
  btnCancel.addEventListener("click", closeProjectFormModal);

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    saveProjectFormData();
  });
}

function openNewProjectModal() {
  if (!ownerMode) return;
  formModalTitle.textContent = "Nuevo Proyecto";
  document.getElementById("editProjectId").value = "";
  document.getElementById("projTitle").value = "";
  document.getElementById("projCategory").value = currentCategoryFilter !== "all" ? currentCategoryFilter : "ideas";
  document.getElementById("projPriority").value = "Media";
  document.getElementById("projDescription").value = "";
  document.getElementById("projTags").value = "";
  document.getElementById("projProgress").value = currentCategoryFilter === "completed" ? 100 : (currentCategoryFilter === "progress" ? 50 : 0);
  document.getElementById("progressValDisplay").textContent = document.getElementById("projProgress").value + "%";

  projectFormModal.classList.add("open");
  setTimeout(() => document.getElementById("projTitle").focus(), 100);
}

function openEditProjectModal(id) {
  if (!ownerMode) return;
  const p = projects.find(item => item.id === id);
  if (!p) return;

  formModalTitle.textContent = "Editar Proyecto";
  document.getElementById("editProjectId").value = p.id;
  document.getElementById("projTitle").value = p.title;
  document.getElementById("projCategory").value = p.category;
  document.getElementById("projPriority").value = p.priority || "Media";
  document.getElementById("projDescription").value = p.description || "";
  document.getElementById("projTags").value = (p.tags || []).join(", ");
  document.getElementById("projProgress").value = p.progress || 0;
  document.getElementById("progressValDisplay").textContent = (p.progress || 0) + "%";

  projectFormModal.classList.add("open");
}

function closeProjectFormModal() {
  projectFormModal.classList.remove("open");
}

function saveProjectFormData() {
  const id = document.getElementById("editProjectId").value;
  const title = document.getElementById("projTitle").value.trim();
  const category = document.getElementById("projCategory").value;
  const priority = document.getElementById("projPriority").value;
  const description = document.getElementById("projDescription").value.trim();
  const tagsStr = document.getElementById("projTags").value;
  const progress = parseInt(document.getElementById("projProgress").value, 10) || 0;

  const tags = tagsStr
    .split(",")
    .map(t => t.trim())
    .filter(t => t.length > 0);

  if (id) {
    // Edit existing
    const p = projects.find(item => item.id === id);
    if (p) {
      p.title = title;
      p.category = category;
      p.priority = priority;
      p.description = description;
      p.tags = tags;
      p.progress = progress;
    }
    showToast("Guardado", `"${title}" actualizado.`);
  } else {
    // Create new
    const newProj = {
      id: "proj-" + Date.now(),
      title,
      category,
      priority,
      description,
      tags,
      progress,
      createdAt: Date.now()
    };
    projects.unshift(newProj);
    showToast("Creado", `"${title}" agregado a la carpeta.`);
  }

  saveProjects();
  closeProjectFormModal();
  renderProjects();
}

function triggerNewProjectInActive() {
  if (!ownerMode) return;
  openFolderModal(currentCategoryFilter || "ideas");
  openNewProjectModal();
}

// ==========================================================================
// Desktop Drag Marquee Selection Box
// ==========================================================================
function setupMarqueeSelection() {
  const marquee = document.getElementById("selectionMarquee");
  let isSelecting = false;
  let startX = 0;
  let startY = 0;

  desktopArea.addEventListener("mousedown", (e) => {
    // Only trigger if clicking directly on desktop background
    if (e.target !== desktopArea) return;
    if (e.button !== 0) return;

    // Deselect folders
    document.querySelectorAll(".tucked-folder").forEach(f => f.classList.remove("selected"));

    isSelecting = true;
    startX = e.clientX;
    startY = e.clientY;

    marquee.style.left = `${startX}px`;
    marquee.style.top = `${startY}px`;
    marquee.style.width = "0px";
    marquee.style.height = "0px";
    marquee.style.display = "block";

    function onMouseMove(ev) {
      if (!isSelecting) return;
      const curX = ev.clientX;
      const curY = ev.clientY;

      const left = Math.min(startX, curX);
      const top = Math.min(startY, curY);
      const width = Math.abs(curX - startX);
      const height = Math.abs(curY - startY);

      marquee.style.left = `${left}px`;
      marquee.style.top = `${top}px`;
      marquee.style.width = `${width}px`;
      marquee.style.height = `${height}px`;

      // Select folders intersecting with marquee
      const mRect = marquee.getBoundingClientRect();
      document.querySelectorAll(".tucked-folder").forEach(folder => {
        const fRect = folder.getBoundingClientRect();
        const overlap = !(
          fRect.right < mRect.left ||
          fRect.left > mRect.right ||
          fRect.bottom < mRect.top ||
          fRect.top > mRect.bottom
        );
        if (overlap) {
          folder.classList.add("selected");
        } else {
          folder.classList.remove("selected");
        }
      });
    }

    function onMouseUp() {
      isSelecting = false;
      marquee.style.display = "none";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });
}

// ==========================================================================
// Spotlight Search
// ==========================================================================
function setupSpotlight() {
  const trigger = document.getElementById("spotlightTrigger");
  if (trigger) {
    trigger.addEventListener("click", toggleSpotlight);
  }

  spotlightOverlay.addEventListener("click", (e) => {
    if (e.target === spotlightOverlay) {
      spotlightOverlay.classList.remove("open");
    }
  });

  spotlightInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      spotlightResults.innerHTML = "";
      return;
    }

    const matches = projects.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );

    if (matches.length === 0) {
      spotlightResults.innerHTML = `<div style="padding: 12px; color: #8e8e93; font-size: 13px;">Sin resultados para "${escapeHtml(q)}"</div>`;
      return;
    }

    spotlightResults.innerHTML = matches.map(p => `
      <div class="spotlight-item" data-id="${p.id}" data-category="${p.category}">
        <span style="font-size: 18px;">${CATEGORY_ICONS[p.category] || '📁'}</span>
        <div style="flex:1;">
          <div style="font-weight: 600; font-size: 13px;">${escapeHtml(p.title)}</div>
          <div style="font-size: 11px; color: #6b7280;">${escapeHtml(CATEGORY_NAMES[p.category] || p.category)} • Progreso: ${p.progress}%</div>
        </div>
      </div>
    `).join("");

    spotlightResults.querySelectorAll(".spotlight-item").forEach(item => {
      item.addEventListener("click", () => {
        const cat = item.getAttribute("data-category");
        spotlightOverlay.classList.remove("open");
        openFolderModal(cat);
        openProjectDetail(item.getAttribute("data-id"));
      });
    });
  });
}

function toggleSpotlight() {
  spotlightOverlay.classList.toggle("open");
  if (spotlightOverlay.classList.contains("open")) {
    spotlightInput.value = "";
    spotlightResults.innerHTML = "";
    setTimeout(() => spotlightInput.focus(), 80);
  }
}

// ==========================================================================
// Right-Click Context Menu & Apple Dropdown
// ==========================================================================
function setupContextMenu() {
  desktopArea.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    contextMenu.style.left = `${e.clientX}px`;
    contextMenu.style.top = `${e.clientY}px`;
    contextMenu.style.display = "block";
  });

  window.addEventListener("click", (e) => {
    if (!contextMenu.contains(e.target)) {
      contextMenu.style.display = "none";
    }
    if (appleDropdown && !appleDropdown.contains(e.target) && !e.target.closest("#appleMenuBtn") && !e.target.closest(".personal-seal-item")) {
      appleDropdown.classList.remove("show");
    }
  });

  const appleBtn = document.getElementById("appleMenuBtn") || document.querySelector(".personal-seal-item");
  if (appleBtn && appleDropdown) {
    appleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      appleDropdown.classList.toggle("show");
    });
  }
}

// ==========================================================================
// Modals & About Dialog
// ==========================================================================
function openAboutModal() {
  aboutModal.classList.add("open");
  appleDropdown.classList.remove("show");
  contextMenu.style.display = "none";
}

function closeAboutModal() {
  aboutModal.classList.remove("open");
}

// Toast notification
let toastTimer = null;
function showToast(title, msg) {
  const toast = document.getElementById("macToast");
  const tTitle = document.getElementById("toastTitle");
  const tMsg = document.getElementById("toastMsg");

  tTitle.textContent = title;
  tMsg.textContent = msg;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Global Keyboard Shortcuts
function setupKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    // ESC closes modals and windows
    if (e.key === "Escape") {
      if (projectDetailModal && projectDetailModal.classList.contains("open")) {
        closeProjectDetail();
      } else if (aboutMeWindow && aboutMeWindow.classList.contains("open")) {
        closeAboutMeModal();
      } else if (projectFormModal.classList.contains("open")) {
        closeProjectFormModal();
      } else if (aboutModal.classList.contains("open")) {
        closeAboutModal();
      } else if (spotlightOverlay.classList.contains("open")) {
        spotlightOverlay.classList.remove("open");
      } else if (finderWindow.classList.contains("open")) {
        closeFolderModal();
      }
    }

    // Cmd+K or Ctrl+Space for Spotlight
    if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K" || e.code === "Space")) {
      e.preventDefault();
      toggleSpotlight();
    }
  });
}

// Helper to escape HTML to prevent XSS
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================================================
// "Sobre mí" Profile Modal Logic
// ==========================================================================
const DEFAULT_ABOUT_ME_TEXT = `¡Hola! Te doy la bienvenida a mi escritorio creativo. 🌸

Soy Ximena, apasionada por la intersección entre el diseño visual, la tecnología y el desarrollo de experiencias interactivas.

En este espacio encontrarás mis proyectos organizados en cuatro carpetas:
• 💡 Ideas: Conceptos en planificación, terminales retro, pixel art, stickers y experimentos de hardware.
• ⏳ En proceso: Iniciativas activas donde diseño y código se unen día a día.
• ✅ Finalizados: Proyectos completados con éxito y listos para compartir.
• ✨ Inspiración: Moodboards, referencias visuales, paletas de color y estética digital retro.

¡Gracias por pasar! Abre cualquier carpeta para explorar. ✨`;

function initAboutMe() {
  const savedBio = localStorage.getItem("ximena_about_me_text");
  const bio = savedBio ? savedBio : DEFAULT_ABOUT_ME_TEXT;
  if (aboutMeParagraph) aboutMeParagraph.textContent = bio;
  if (aboutMeInput) aboutMeInput.value = bio;
  setupAboutMeDraggable();

  if (aboutMeOverlay) {
    aboutMeOverlay.addEventListener("click", (e) => {
      if (e.target === aboutMeOverlay) {
        closeAboutMeModal();
      }
    });
  }
}

function openAboutMeModal() {
  sounds.playWindowOpen();
  if (!aboutMeOverlay || !aboutMeWindow) return;
  aboutMeOverlay.style.display = "flex";
  requestAnimationFrame(() => {
    aboutMeWindow.classList.remove("minimized");
    aboutMeWindow.classList.add("open");
  });
}

function closeAboutMeModal() {
  if (!aboutMeOverlay || !aboutMeWindow) return;
  aboutMeWindow.classList.remove("open");
  aboutMeWindow.classList.remove("maximized");
  setTimeout(() => {
    if (!aboutMeWindow.classList.contains("open")) {
      aboutMeOverlay.style.display = "none";
    }
  }, 250);
}

function toggleMaximizeAboutMe() {
  if (aboutMeWindow) {
    aboutMeWindow.classList.toggle("maximized");
  }
}

function toggleEditBio() {
  if (!ownerMode) return;
  const isEditing = aboutMeEditCard && aboutMeEditCard.style.display === "flex";
  if (isEditing) {
    cancelEditBio();
  } else {
    if (aboutMeTextDisplay) aboutMeTextDisplay.style.display = "none";
    if (aboutMeEditCard) {
      aboutMeEditCard.style.display = "flex";
      aboutMeInput.value = aboutMeParagraph.textContent;
      setTimeout(() => aboutMeInput.focus(), 50);
    }
    if (btnEditBioText) btnEditBioText.textContent = "Cancelar edición";
    if (btnEditBioIcon) btnEditBioIcon.textContent = "✕";
  }
}

function saveBioText() {
  if (!ownerMode) return;
  const newBio = aboutMeInput.value.trim();
  if (!newBio) {
    showToast("Sobre mí", "Por favor ingresa un texto para tu presentación.");
    return;
  }
  localStorage.setItem("ximena_about_me_text", newBio);
  if (aboutMeParagraph) aboutMeParagraph.textContent = newBio;
  if (aboutMeTextDisplay) aboutMeTextDisplay.style.display = "block";
  if (aboutMeEditCard) aboutMeEditCard.style.display = "none";
  if (btnEditBioText) btnEditBioText.textContent = "Editar mi presentación";
  if (btnEditBioIcon) btnEditBioIcon.textContent = "✏️";
  if (aboutMeSaveStatus) aboutMeSaveStatus.textContent = "Guardado localmente";
  sounds.playPop();
  showToast("Sobre mí", "Tu presentación ha sido guardada ✨");
}

function cancelEditBio() {
  if (aboutMeTextDisplay) aboutMeTextDisplay.style.display = "block";
  if (aboutMeEditCard) aboutMeEditCard.style.display = "none";
  if (btnEditBioText) btnEditBioText.textContent = "Editar mi presentación";
  if (btnEditBioIcon) btnEditBioIcon.textContent = "✏️";
}

function setupAboutMeDraggable() {
  const titlebar = document.getElementById("aboutMeTitleBar");
  if (!titlebar || !aboutMeWindow) return;

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  titlebar.addEventListener("mousedown", (e) => {
    if (e.target.closest("button") || e.target.closest("input") || e.target.closest("textarea")) return;
    if (aboutMeWindow.classList.contains("maximized")) return;

    isDragging = true;
    const rect = aboutMeWindow.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    function onMouseMove(ev) {
      if (!isDragging) return;
      aboutMeWindow.style.left = `${ev.clientX - offsetX}px`;
      aboutMeWindow.style.top = `${ev.clientY - offsetY}px`;
      aboutMeWindow.style.margin = "0";
    }

    function onMouseUp() {
      isDragging = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });
}
/* ==========================================================================
   Photo Booth — Camera Widget
   ========================================================================== */

(function initPhotoBoothModule() {
  // State
  let pbStream = null;
  let pbCurrentEffect = 'grayscale(1)';   // ← B&W default
  let pbEffectsOpen = false;
  let pbCountingDown = false;

  // Elements (resolved after DOM ready)
  let win, titlebar, closeBtn, minimizeBtn;
  let video, canvas, flash, noCam, countdown, strip, effectsPanel, effectBtn;

  function setup() {
    win         = document.getElementById('photoboothWindow');
    titlebar    = document.getElementById('photoboothTitlebar');
    closeBtn    = document.getElementById('photoboothClose');
    minimizeBtn = document.getElementById('photoboothMinimize');
    video       = document.getElementById('photoboothVideo');
    canvas      = document.getElementById('photoboothCanvas');
    flash       = document.getElementById('photoboothFlash');
    noCam       = document.getElementById('photoboothNoCam');
    countdown   = document.getElementById('photoboothCountdown');
    strip       = document.getElementById('photoboothStrip');
    effectsPanel= document.getElementById('pbEffectsPanel');
    effectBtn   = document.getElementById('pbEffectBtn');

    if (!win) return;

    // Start camera
    window.initPhotoBooth = startCamera;
    window.takePhotoBoothPhoto = takePhoto;
    window.togglePBEffects = toggleEffects;
    window.applyPBEffect = applyEffect;
    window.clearPBStrip = clearStrip;
    window.openPhotoBoothWindow = function() {
      win.classList.remove('pb-hidden');
      if (!pbStream) startCamera();
      createStars();
    };

    startCamera();
    setupDrag();
    setupButtons();
    showEmptyStrip();
    createStars();              // ← spawn stars on load

    // Mark B&W pill as active by default
    if (effectsPanel) {
      var pills = effectsPanel.querySelectorAll('.pb-effect-pill');
      pills.forEach(function(p) {
        p.classList.remove('active');
        if (p.dataset.effect === 'grayscale(1)') p.classList.add('active');
      });
    }
  }

  /* --- Camera --- */
  function startCamera() {
    noCam.style.display = 'none';
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      showNoCam(); return;
    }
    navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480, facingMode: 'user' }, audio: false })
      .then(function(stream) {
        pbStream = stream;
        video.srcObject = stream;
        video.style.display = 'block';
        noCam.style.display = 'none';
      })
      .catch(function() {
        showNoCam();
      });
  }

  function showNoCam() {
    video.style.display = 'none';
    noCam.style.display = 'flex';
  }

  /* --- Photo Capture with 3-2-1 countdown --- */
  function takePhoto() {
    if (pbCountingDown) return;
    if (!pbStream) { showNoCam(); return; }
    pbCountingDown = true;
    runCountdown(3, function() {
      captureFrame();
      pbCountingDown = false;
    });
  }

  function runCountdown(n, done) {
    if (n <= 0) {
      countdown.textContent = '';
      countdown.classList.remove('pb-count-visible');
      done();
      return;
    }
    countdown.textContent = n;
    countdown.classList.add('pb-count-visible');
    setTimeout(function() {
      runCountdown(n - 1, done);
    }, 900);
  }

  function captureFrame() {
    var w = video.videoWidth  || 320;
    var h = video.videoHeight || 240;
    canvas.width  = w;
    canvas.height = h;
    var ctx = canvas.getContext('2d');

    // Apply current effect as CSS filter via canvas
    ctx.filter = pbCurrentEffect === 'none' ? 'none' : pbCurrentEffect;
    // Draw video mirrored (same as CSS scaleX(-1))
    ctx.translate(w, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, w, h);
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // Flash
    flash.classList.remove('pb-flash-active');
    void flash.offsetWidth; // reflow
    flash.classList.add('pb-flash-active');

    var dataUrl = canvas.toDataURL('image/jpeg', 0.88);
    addThumb(dataUrl);
  }

  /* --- Film Strip --- */
  function addThumb(dataUrl) {
    // Remove empty label if present
    var empty = strip.querySelector('.pb-strip-empty');
    if (empty) empty.remove();

    var thumb = document.createElement('div');
    thumb.className = 'pb-thumb';

    var img = document.createElement('img');
    // For thumbnail we display as-is (captured already mirrored correctly)
    img.style.transform = 'none';
    img.src = dataUrl;
    img.alt = 'Foto';
    thumb.appendChild(img);

    // Click to download
    thumb.addEventListener('click', function() {
      var a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'photo-booth-' + Date.now() + '.jpg';
      a.click();
    });

    strip.appendChild(thumb);
    strip.scrollLeft = strip.scrollWidth;

    // Pop-in animation
    thumb.style.opacity = '0';
    thumb.style.transform = 'scale(0.7)';
    thumb.style.transition = 'opacity 0.25s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1)';
    requestAnimationFrame(function() {
      thumb.style.opacity = '1';
      thumb.style.transform = 'scale(1)';
    });
  }

  function showEmptyStrip() {
    var empty = document.createElement('span');
    empty.className = 'pb-strip-empty';
    empty.textContent = 'Las fotos aparecerán aquí';
    strip.appendChild(empty);
  }

  function clearStrip() {
    strip.innerHTML = '';
    showEmptyStrip();
  }

  /* --- Effects --- */
  function toggleEffects() {
    pbEffectsOpen = !pbEffectsOpen;
    effectsPanel.classList.toggle('pb-panel-visible', pbEffectsOpen);
    effectBtn.classList.toggle('pb-active', pbEffectsOpen);
  }

  function applyEffect(btn, filter) {
    pbCurrentEffect = filter;
    video.style.filter = filter === 'none' ? '' : filter;
    // Update active pill
    var pills = effectsPanel.querySelectorAll('.pb-effect-pill');
    pills.forEach(function(p) { p.classList.remove('active'); });
    btn.classList.add('active');
  }

  /* --- Drag --- */
  function setupDrag() {
    var isDragging = false;
    var startX, startY, origLeft, origTop;

    titlebar.addEventListener('mousedown', function(e) {
      if (e.target.classList.contains('traffic-btn')) return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      var rect = win.getBoundingClientRect();
      origLeft = rect.left;
      origTop  = rect.top;
      // Switch from right-anchored to absolute left
      win.style.right  = 'auto';
      win.style.left   = origLeft + 'px';
      win.style.top    = origTop  + 'px';
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup',   onUp);
    });

    function onMove(e) {
      if (!isDragging) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      win.style.left = Math.max(0, origLeft + dx) + 'px';
      win.style.top  = Math.max(28, origTop  + dy) + 'px';
    }

    function onUp() {
      isDragging = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup',   onUp);
    }
  }

  /* --- Window buttons --- */
  function setupButtons() {
    closeBtn.addEventListener('click', function() {
      win.classList.add('pb-hidden');
      // Stop camera stream
      if (pbStream) {
        pbStream.getTracks().forEach(function(t) { t.stop(); });
        pbStream = null;
      }
    });

    minimizeBtn.addEventListener('click', function() {
      var body = win.querySelector('.photobooth-body');
      if (body) {
        body.style.display = body.style.display === 'none' ? 'flex' : 'none';
      }
    });
  }

  /* --- Stars Overlay ---------------------------------------- */
  function createStars() {
    var overlay = document.getElementById('pbStarsOverlay');
    if (!overlay) return;
    overlay.innerHTML = '';

    var STAR_PATH = 'M12 2l2.9 6.1L22 9.3l-5 4.9 1.2 6.8L12 17.8l-6.2 3.2 1.2-6.8-5-4.9 7.1-1.2z';
    var PALETTE = [
      '#e74c3c','#c0392b',   // red
      '#e67e22','#d35400',   // orange
      '#f1c40f','#f39c12',   // gold
      '#2ecc71','#27ae60',   // green
      '#3498db','#2980b9',   // blue
      'holo','holo','holo'   // holographic (more weight)
    ];

    var count = 22;
    for (var i = 0; i < count; i++) {
      var color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      var size  = 14 + Math.floor(Math.random() * 26);    // 14–40px
      var left  = Math.random() * 96;
      var top   = Math.random() * 96;
      var dur   = (3.5 + Math.random() * 4).toFixed(2);
      var delay = -(Math.random() * 6).toFixed(2);        // negative = already mid-animation
      var dx1   = (Math.random() * 22 - 11).toFixed(1);
      var dy1   = (Math.random() * 18 - 9).toFixed(1);
      var dx2   = (Math.random() * 22 - 11).toFixed(1);
      var dy2   = (Math.random() * 18 - 9).toFixed(1);
      var rot   = Math.random() > 0.5 ? 1 : -1;           // CW or CCW

      var el = document.createElement('div');
      el.className = 'pb-star' + (color === 'holo' ? ' pb-star-holo' : '');
      el.style.cssText =
        'position:absolute;' +
        'left:' + left + '%;' +
        'top:'  + top  + '%;' +
        'width:' + size + 'px;height:' + size + 'px;' +
        '--pb-dur:'  + dur   + 's;' +
        '--pb-del:'  + delay + 's;' +
        '--pb-dx1:'  + dx1   + 'px;--pb-dy1:' + dy1 + 'px;' +
        '--pb-dx2:'  + dx2   + 'px;--pb-dy2:' + dy2 + 'px;' +
        '--pb-rot:'  + rot   + ';';

      var ns  = 'http://www.w3.org/2000/svg';
      var svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('width',  size);
      svg.setAttribute('height', size);

      if (color === 'holo') {
        var defs = document.createElementNS(ns, 'defs');
        var grad = document.createElementNS(ns, 'linearGradient');
        var gid  = 'pbhg' + i;
        grad.setAttribute('id', gid);
        grad.setAttribute('x1','0%'); grad.setAttribute('y1','0%');
        grad.setAttribute('x2','100%'); grad.setAttribute('y2','100%');
        [['0%','#ff6b9d'],['20%','#c44dff'],['40%','#4dc3ff'],
         ['65%','#4dff91'],['85%','#ffe066'],['100%','#ff6b9d']].forEach(function(s) {
          var stop = document.createElementNS(ns, 'stop');
          stop.setAttribute('offset', s[0]);
          stop.setAttribute('stop-color', s[1]);
          grad.appendChild(stop);
        });
        defs.appendChild(grad);
        svg.appendChild(defs);
        var path = document.createElementNS(ns, 'path');
        path.setAttribute('d', STAR_PATH);
        path.setAttribute('fill', 'url(#' + gid + ')');
        svg.appendChild(path);
      } else {
        var path = document.createElementNS(ns, 'path');
        path.setAttribute('d', STAR_PATH);
        path.setAttribute('fill', color);
        svg.appendChild(path);
      }

      el.appendChild(svg);
      overlay.appendChild(el);
    }

    // Apply grayscale to video immediately
    if (video) video.style.filter = 'grayscale(1)';
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();

/* ==========================================================================
   Spotify Music Widget — PKCE OAuth + Web API
   ========================================================================== */

(function initSpotifyModule() {

  var SCOPES = [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-top-read',
    'user-read-recently-played'
  ].join(' ');

  var accessToken  = null;
  var pollInterval = null;
  var topTracks    = [];
  var isPlaying    = false;

  // DOM refs
  var widget, widgetBody, connectScreen, playerScreen;
  var albumArt, albumPlaceholder, trackName, artistName;
  var timeCurrent, timeRemaining, progressBar;
  var playPauseBtn, shuffleBtn, repeatBtn, topList;

  /* ── Setup ─────────────────────────────────────────────── */
  function setup() {
    widget           = document.getElementById('spotifyWidget');
    widgetBody       = document.getElementById('spotifyWidgetBody');
    connectScreen    = document.getElementById('spotifyConnectScreen');
    playerScreen     = document.getElementById('spotifyPlayerScreen');
    albumArt         = document.getElementById('spotAlbumArt');
    albumPlaceholder = document.getElementById('spotAlbumPlaceholder');
    trackName        = document.getElementById('spotTrackName');
    artistName       = document.getElementById('spotArtistName');
    timeCurrent      = document.getElementById('spotTimeCurrent');
    timeRemaining    = document.getElementById('spotTimeRemaining');
    progressBar      = document.getElementById('spotProgressBar');
    playPauseBtn     = document.getElementById('spotPlayPauseBtn');
    shuffleBtn       = document.getElementById('spotShuffleBtn');
    repeatBtn        = document.getElementById('spotRepeatBtn');
    topList          = document.getElementById('spotTopList');

    if (!widget) return;

    // Expose globals
    window.openSpotifyWidget = openWidget;
    window.connectSpotify    = connectSpotify;
    window.spotifyAction     = spotifyAction;
    window.disconnectSpotify = disconnectSpotify;

    var closeBtn    = document.getElementById('spotifyWidgetClose');
    var minimizeBtn = document.getElementById('spotifyWidgetMinimize');
    if (closeBtn)    closeBtn.addEventListener('click', closeWidget);
    if (minimizeBtn) minimizeBtn.addEventListener('click', minimizeWidget);

    setupDrag();

    // Restore saved client ID
    var saved = localStorage.getItem('spotify_client_id');
    var inp = document.getElementById('spotifyClientId');
    if (saved && inp) inp.value = saved;

    // Check if returning from OAuth (code in URL query)
    checkOAuthCallback();

    // Check for existing valid token
    var tk     = localStorage.getItem('spotify_access_token');
    var expiry = localStorage.getItem('spotify_token_expiry');
    if (tk && expiry && Date.now() < parseInt(expiry, 10)) {
      accessToken = tk;
      showPlayer();
    }

    // Progress bar seek
    if (progressBar) {
      progressBar.addEventListener('change', seekTrack);
    }
  }

  /* ── Open / Close ──────────────────────────────────────── */
  function openWidget()    { widget.classList.remove('pb-hidden'); }
  function closeWidget()   { widget.classList.add('pb-hidden'); stopPolling(); }
  function minimizeWidget() {
    if (!widgetBody) return;
    widgetBody.style.display = widgetBody.style.display === 'none' ? 'block' : 'none';
  }

  /* ── PKCE ──────────────────────────────────────────────── */
  function generateVerifier() {
    var arr = new Uint8Array(32);
    crypto.getRandomValues(arr);
    return btoa(String.fromCharCode.apply(null, arr))
      .replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
  }

  function generateChallenge(verifier) {
    var data   = new TextEncoder().encode(verifier);
    return crypto.subtle.digest('SHA-256', data).then(function(digest) {
      return btoa(String.fromCharCode.apply(null, new Uint8Array(digest)))
        .replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_');
    });
  }

  function redirectUri() {
    return window.location.origin + window.location.pathname;
  }

  /* ── Connect ───────────────────────────────────────────── */
  function connectSpotify() {
    var inp = document.getElementById('spotifyClientId');
    var clientId = inp ? inp.value.trim() : '';
    if (!clientId) { alert('Por favor ingresa tu Client ID de Spotify.'); return; }
    localStorage.setItem('spotify_client_id', clientId);

    var verifier = generateVerifier();
    sessionStorage.setItem('spotify_code_verifier', verifier);

    generateChallenge(verifier).then(function(challenge) {
      var params = new URLSearchParams({
        client_id:             clientId,
        response_type:         'code',
        redirect_uri:          redirectUri(),
        code_challenge_method: 'S256',
        code_challenge:        challenge,
        scope:                 SCOPES
      });
      window.location.href = 'https://accounts.spotify.com/authorize?' + params.toString();
    });
  }

  /* ── OAuth Callback ─────────────────────────────────────── */
  function checkOAuthCallback() {
    var params  = new URLSearchParams(window.location.search);
    var code    = params.get('code');
    if (!code) return;

    // Clean URL
    window.history.replaceState({}, document.title, window.location.pathname);

    var verifier = sessionStorage.getItem('spotify_code_verifier');
    var clientId = localStorage.getItem('spotify_client_id');
    if (!verifier || !clientId) return;

    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id:     clientId,
        grant_type:    'authorization_code',
        code:          code,
        redirect_uri:  redirectUri(),
        code_verifier: verifier
      })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.access_token) {
        accessToken = data.access_token;
        localStorage.setItem('spotify_access_token',  data.access_token);
        localStorage.setItem('spotify_refresh_token', data.refresh_token || '');
        localStorage.setItem('spotify_token_expiry',  Date.now() + (data.expires_in * 1000));
        sessionStorage.removeItem('spotify_code_verifier');
        widget.classList.remove('pb-hidden');
        showPlayer();
      }
    })
    .catch(function(e) { console.error('Token exchange:', e); });
  }

  /* ── Token Refresh ──────────────────────────────────────── */
  function refreshAccessToken() {
    var clientId = localStorage.getItem('spotify_client_id');
    var refresh  = localStorage.getItem('spotify_refresh_token');
    if (!clientId || !refresh) return Promise.resolve(false);

    return fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id:     clientId,
        grant_type:    'refresh_token',
        refresh_token: refresh
      })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.access_token) {
        accessToken = data.access_token;
        localStorage.setItem('spotify_access_token', data.access_token);
        localStorage.setItem('spotify_token_expiry', Date.now() + (data.expires_in * 1000));
        if (data.refresh_token) localStorage.setItem('spotify_refresh_token', data.refresh_token);
        return true;
      }
      return false;
    })
    .catch(function() { return false; });
  }

  /* ── API Call ───────────────────────────────────────────── */
  function api(endpoint, method, body) {
    if (!accessToken) return Promise.resolve(null);
    method = method || 'GET';

    var opts = {
      method: method,
      headers: { 'Authorization': 'Bearer ' + accessToken }
    };
    if (body) {
      opts.headers['Content-Type'] = 'application/json';
      opts.body = JSON.stringify(body);
    }

    return fetch('https://api.spotify.com/v1' + endpoint, opts)
      .then(function(resp) {
        if (resp.status === 401) {
          return refreshAccessToken().then(function(ok) {
            if (ok) return api(endpoint, method, body);
            disconnectSpotify();
            return null;
          });
        }
        if (resp.status === 204 || resp.status === 202) return {};
        if (!resp.ok) return null;
        return resp.json().catch(function() { return {}; });
      })
      .catch(function() { return null; });
  }

  /* ── Show Player ────────────────────────────────────────── */
  function showPlayer() {
    connectScreen.style.display = 'none';
    playerScreen.style.display  = 'flex';
    fetchCurrentPlayback();
    fetchTopTracks();
    startPolling();
  }

  /* ── Current Playback ───────────────────────────────────── */
  function fetchCurrentPlayback() {
    return api('/me/player?additional_types=track').then(function(data) {
      if (data && data.item) updateUI(data);
    });
  }

  function updateUI(data) {
    if (!data || !data.item) return;
    var track = data.item;

    trackName.textContent  = track.name;
    artistName.textContent = track.artists.map(function(a) { return a.name; }).join(', ');

    var img = track.album && track.album.images && track.album.images[0];
    if (img) {
      albumArt.src           = img.url;
      albumArt.style.display = 'block';
      if (albumPlaceholder) albumPlaceholder.style.display = 'none';
    }

    var prog = data.progress_ms || 0;
    var dur  = track.duration_ms || 1;
    progressBar.value            = (prog / dur) * 100;
    timeCurrent.textContent      = msToTime(prog);
    timeRemaining.textContent    = '-' + msToTime(dur - prog);

    isPlaying = !!data.is_playing;
    setPlayIcon(isPlaying);

    if (shuffleBtn) shuffleBtn.classList.toggle('spot-ctrl-active', !!data.shuffle_state);
    if (repeatBtn)  repeatBtn.classList.toggle('spot-ctrl-active',  data.repeat_state && data.repeat_state !== 'off');
  }

  /* ── Top Tracks ─────────────────────────────────────────── */
  function fetchTopTracks() {
    return api('/me/top/tracks?limit=10&time_range=short_term').then(function(data) {
      if (!data || !data.items || !data.items.length) return;
      topTracks = data.items;
      topList.innerHTML = '';

      topTracks.forEach(function(track, i) {
        var imgs = track.album && track.album.images;
        var thumb = imgs && imgs[imgs.length - 1];
        var el = document.createElement('div');
        el.className = 'spot-top-item';
        el.innerHTML =
          '<span class="spot-top-num">' + (i + 1) + '</span>' +
          (thumb
            ? '<img src="' + thumb.url + '" class="spot-top-img" alt="">'
            : '<div class="spot-top-img-ph">♪</div>') +
          '<div class="spot-top-meta">' +
            '<div class="spot-top-name">'   + escHtml(track.name) + '</div>' +
            '<div class="spot-top-artist">' + escHtml(track.artists.map(function(a){return a.name;}).join(', ')) + '</div>' +
          '</div>' +
          '<span class="spot-top-dur">' + msToTime(track.duration_ms) + '</span>';

        el.addEventListener('click', (function(uri) {
          return function() { api('/me/player/play', 'PUT', { uris: [uri] }).then(function() {
            setTimeout(fetchCurrentPlayback, 700);
          }); };
        })(track.uri));

        topList.appendChild(el);
      });

      // If nothing playing, show first top track info
      if (!isPlaying && topTracks[0]) {
        var t   = topTracks[0];
        var tim = t.album && t.album.images && t.album.images[0];
        trackName.textContent  = t.name;
        artistName.textContent = t.artists.map(function(a){return a.name;}).join(', ');
        if (tim) {
          albumArt.src           = tim.url;
          albumArt.style.display = 'block';
          if (albumPlaceholder) albumPlaceholder.style.display = 'none';
        }
      }
    });
  }

  /* ── Playback Controls ──────────────────────────────────── */
  function spotifyAction(action) {
    switch (action) {
      case 'playpause':
        if (isPlaying) {
          api('/me/player/pause', 'PUT').then(function() { isPlaying = false; setPlayIcon(false); });
        } else {
          api('/me/player/play',  'PUT').then(function() { isPlaying = true;  setPlayIcon(true);  });
        }
        break;
      case 'next':
        api('/me/player/next',     'POST').then(function() { setTimeout(fetchCurrentPlayback, 700); });
        break;
      case 'previous':
        api('/me/player/previous', 'POST').then(function() { setTimeout(fetchCurrentPlayback, 700); });
        break;
      case 'shuffle':
        api('/me/player').then(function(s) {
          var ns = s ? !s.shuffle_state : true;
          api('/me/player/shuffle?state=' + ns, 'PUT');
          shuffleBtn.classList.toggle('spot-ctrl-active', ns);
        });
        break;
      case 'repeat':
        api('/me/player').then(function(s) {
          var modes = ['off','context','track'];
          var cur   = s ? modes.indexOf(s.repeat_state) : 0;
          var next  = modes[(cur + 1) % 3];
          api('/me/player/repeat?state=' + next, 'PUT');
          repeatBtn.classList.toggle('spot-ctrl-active', next !== 'off');
        });
        break;
    }
  }

  function seekTrack() {
    api('/me/player').then(function(s) {
      if (!s || !s.item) return;
      var posMs = Math.floor((progressBar.value / 100) * s.item.duration_ms);
      api('/me/player/seek?position_ms=' + posMs, 'PUT');
    });
  }

  /* ── Polling ────────────────────────────────────────────── */
  function startPolling() {
    stopPolling();
    pollInterval = setInterval(fetchCurrentPlayback, 5000);
  }
  function stopPolling() {
    if (pollInterval) { clearInterval(pollInterval); pollInterval = null; }
  }

  /* ── Disconnect ─────────────────────────────────────────── */
  function disconnectSpotify() {
    accessToken = null;
    stopPolling();
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_refresh_token');
    localStorage.removeItem('spotify_token_expiry');
    connectScreen.style.display = 'flex';
    playerScreen.style.display  = 'none';
  }

  /* ── Drag ───────────────────────────────────────────────── */
  function setupDrag() {
    var titlebar = document.getElementById('spotifyWidgetTitlebar');
    if (!titlebar || !widget) return;
    var isDragging = false, startX, startY, initLeft, initTop;

    titlebar.addEventListener('mousedown', function(e) {
      if (e.target.closest('.traffic-btn')) return;
      isDragging = true;
      startX = e.clientX; startY = e.clientY;
      var r = widget.getBoundingClientRect();
      initLeft = r.left; initTop = r.top;
      titlebar.style.cursor = 'grabbing';
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup',   onUp);
    });

    function onMove(e) {
      if (!isDragging) return;
      widget.style.left  = (initLeft + e.clientX - startX) + 'px';
      widget.style.top   = (initTop  + e.clientY - startY) + 'px';
      widget.style.right = 'auto';
    }

    function onUp() {
      isDragging = false;
      titlebar.style.cursor = 'grab';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup',   onUp);
    }
  }

  /* ── Helpers ────────────────────────────────────────────── */
  function msToTime(ms) {
    var tot = Math.floor((ms || 0) / 1000);
    var m   = Math.floor(tot / 60);
    var s   = tot % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function setPlayIcon(playing) {
    if (!playPauseBtn) return;
    playPauseBtn.innerHTML = playing
      ? '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>'
      : '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>';
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ── Boot ───────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }

})();
