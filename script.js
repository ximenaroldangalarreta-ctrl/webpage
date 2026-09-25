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

  // Show a welcome toast on first launch
  setTimeout(() => {
    showToast("Página personal", "Pasa el mouse sobre las carpetas o haz clic para ver mis proyectos.");
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
  } else {
    projects = [...DEFAULT_PROJECTS];
    saveProjects();
  }
  updateFolderCounters();
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

function initRandomFolderPositions(forceRandom = false) {
  const folders = document.querySelectorAll(".tucked-folder");
  if (!folders.length) return;

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

    // Gentle staggered reveal animation
    folder.style.opacity = "0";
    folder.style.transform = "scale(0.85) translateY(20px)";
    setTimeout(() => {
      folder.style.transition = "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease";
      folder.style.opacity = "1";
      folder.style.transform = "scale(1) translateY(0)";
    }, idx * 75);
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

    // Drag and drop physics on desktop
    folder.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return; // Only left click
      sounds.playPop();
      isDragging = true;
      moved = false;
      startX = e.clientX;
      startY = e.clientY;

      const rect = folder.getBoundingClientRect();
      currentX = rect.left;
      currentY = rect.top;

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
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);

        if (moved) {
          folder.style.zIndex = "";
          // Constrain within screen
          const deskWidth = window.innerWidth;
          const deskHeight = window.innerHeight;
          let finalX = Math.max(30, Math.min(deskWidth - 150, currentX + (ev.clientX - startX)));
          let finalY = Math.max(40, Math.min(deskHeight - 160, currentY + (ev.clientY - startY)));

          folder.style.left = `${finalX}px`;
          folder.style.top = `${finalY}px`;

          // Save position
          const savedPos = localStorage.getItem("mac_folder_positions_v3");
          let positions = savedPos ? JSON.parse(savedPos) : {};
          positions[folder.id] = { x: finalX, y: finalY };
          localStorage.setItem("mac_folder_positions_v3", JSON.stringify(positions));
        } else {
          // Click to open Finder Modal
          const cat = folder.getAttribute("data-category") || "ideas";
          openFolderModal(cat);
        }
      }

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
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
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleDroppedPhotos(folder, e.dataTransfer.files);
      }
    });
  });
}

// Handle photos dropped directly onto a folder
function handleDroppedPhotos(folder, files) {
  const photoSlots = folder.querySelectorAll(".polaroid-photo");
  Array.from(files).slice(0, 3).forEach((file, index) => {
    if (file.type.startsWith("image/") && photoSlots[index]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        photoSlots[index].innerHTML = `<img src="${ev.target.result}" alt="Preview" style="width:100%;height:100%;object-fit:cover;">`;
        showToast("Foto añadida", `Imagen colocada en vista previa de "${folder.querySelector('.folder-label-aesthetic').textContent}".`);
      };
      reader.readAsDataURL(file);
    }
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
  });

  tabList.addEventListener("click", () => {
    tabList.classList.add("active");
    tabGrid.classList.remove("active");
    projectsContainer.classList.add("list-view");
    isListView = true;
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
      const hasTag = p.tags.some(t => t.toLowerCase().includes(currentTagFilter.toLowerCase()));
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
  projectsContainer.style.display = isListView ? "flex" : "grid";

  // Build Project Cards
  filtered.forEach(proj => {
    const card = document.createElement("article");
    card.className = "project-card";

    // Category folder icon
    const categoryIcons = {
      ideas: "💡",
      progress: "⏳",
      completed: "✅",
      inspiration: "✨"
    };
    const folderIcon = categoryIcons[proj.category] || "📁";

    // Priority class
    const priorityClass = `priority-${proj.priority ? proj.priority.toLowerCase() : 'media'}`;

    // Tags markup
    const tagsHtml = (proj.tags || []).map(t => `<span class="card-tag">#${escapeHtml(t)}</span>`).join("");

    // Progress class
    const progressClass = `progress-${proj.category}`;

    card.innerHTML = `
      ${proj.image ? `
        <div class="card-cover-image">
          <img src="${proj.image}" alt="${escapeHtml(proj.title)}" style="width:100%;height:135px;object-fit:cover;border-radius:8px;margin-bottom:6px;box-shadow:0 2px 6px rgba(0,0,0,0.1);background:#f9fafb;">
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

      <div class="card-footer">
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

// Move project between categories
function changeProjectCategory(id, newCat) {
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
  const catNames = { ideas: "Ideas", progress: "En proceso", completed: "Finalizados", inspiration: "Inspiración" };
  showToast("Proyecto movido", `"${p.title}" se movió a ${catNames[newCat] || newCat}.`);
}

// Delete project
function deleteProject(id) {
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
    document.querySelectorAll(".desktop-folder").forEach(f => f.classList.remove("selected"));

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
      document.querySelectorAll(".desktop-folder").forEach(folder => {
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
        <span style="font-size: 18px;">${p.category === 'ideas' ? '💡' : p.category === 'progress' ? '⏳' : '✅'}</span>
        <div style="flex:1;">
          <div style="font-weight: 600; font-size: 13px;">${escapeHtml(p.title)}</div>
          <div style="font-size: 11px; color: #6b7280;">${escapeHtml(p.category.toUpperCase())} • Progreso: ${p.progress}%</div>
        </div>
      </div>
    `).join("");

    spotlightResults.querySelectorAll(".spotlight-item").forEach(item => {
      item.addEventListener("click", () => {
        const cat = item.getAttribute("data-category");
        spotlightOverlay.classList.remove("open");
        openFolderModal(cat);
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
      if (aboutMeWindow && aboutMeWindow.classList.contains("open")) {
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

¡Haz clic en "Editar mi presentación" arriba para personalizar este texto con tu propia introducción en cualquier momento! ✨`;

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
