const projects = [
  {
    status: "past",
    tags: ["SOLIDWORKS", "GD&T"],
    title: "Twin Turbo V6 Engine",
    summary: "Realistic crank and cam timing, completed Freshman year.",
    details: "Mostly base/boss extrusion design with surface modeling for turbo spools.",
    image: "assets/V6EngineAssem-GIF.gif",
    mediaFit: "contain",
    mediaBg: "#f8f8f9"
  },
  {
    status: "past",
    tags: ["SkillsUSA", "Stratasys F370"],
    title: "Stratasys Additive Manufacturing Nationals",
    summary: "Design competition at the 2024 SkillsUSA National Conference.",
    details: "<p>SkillsUSA hosts annual competitions for workforce development. I was tasked with designing a linear bearing tolerance gauge for PBC Linear. Designed in SolidWorks and 3D printed, I placed first of 24 teams, qualifying for Nationals and representing Arizona.</p><p>Following the State Championship win, I participated in a week-long SkillsUSA National Championship in Atlanta, Georgia. In the National Competition, I was tasked with choosing between two basic models and making a presentable customer product prototype by altering the physical design, adding colors, applying textures, and/or splitting or adding parts to make multi body/material assemblies. Color, material, and finish of the design were the most important elements of this challenge. The process, engineering design notebook, and printed designs were presented to SME, Stratasys, Autodesk, SolidWorks, Future of Jewelry, UltiMaker, Printed Solid, and Allegheny Educational Systems. Products were printed on Stratasys F370 tooling.</p>",
    image: "assets/20240627_092702.jpg",
    gallery: ["assets/20240329_113503.jpg"]
  },
  {
    status: "past",
    tags: ["Optics", "SOLIDWORKS", "MATLAB", "DFM"],
    title: "LPBF Melt Pool Dynamics",
    summary: "Analyzed overlapping melt-pool dynamics and porosity across various alloys, scanning velocities, and laser wattages.",
    details: "Over a span of 3 semesters, I worked with Dr. Minglei Qu in the Advanced Manufacturing Lab in ISTB2. In the lab, we developed a DIY laser powder bed fusion (LPBF) machine for comparative analysis to the FastForm FF-M140C. Here, I studied overlapping melt-pool dynamics and porosity in 316L, 316 + TiC, 316 + TiN, and Al 6061. This testing was done via in-situ FastCam NOVA S12 optics under various nLight AFX-1000 laser wattages and IntelliSCAN IV 30 scanning velocities. Within the DIY LPBF build, I designed and machined a custom angle bracket in SOLIDWORKS for the laser scanner and camera equipment.",
    image: "assets/ScreenRecording2026-09-07at1.16.25PM-ezgif.com-video-speed (video-converter.com).mp4",
    gallery: [
      { src: "assets/image (1).png", wide: true },
      { src: "assets/20250304_193712.jpg", fit: "contain" },
      { src: "assets/20250304_193717 (1).jpg", fit: "contain" },
      { src: "assets/Custom TD - Research.png", wide: true },
      { src: "assets/image.png", wide: true }
    ]
  },
  {
    status: "past",
    tags: ["SkillsUSA"],
    title: "VEX Robotics 2023",
    summary: "Bronze Medalist at the 2023 Arizona State Conference.",
    details: "SkillsUSA hosts annual competitions for workforce development. I designed a robot to perform for the <a href='https://www.youtube.com/watch?v=wIZgvVDZc2Y' target='_blank' rel='noopener'>VEX Spin Up Competition</a> in Phoenix, Arizona. The competition included an autonomous runthrough and a driver-controlled runthrough; the objective was to shoot disks into hoops and spin rolling pins. Unfortunately, I did not place Gold due to outdated hardware.",
    image: "assets/20230224_141406.jpg",
    mediaFit: "contain"
  },
  {
    status: "past",
    tags: ["CFD", "SOLIDWORKS", "DFM"],
    title: "FSAE/Formula Stuff",
    summary: "Conglomeration of various FSAE projects.",
    details: "WIP, much more to come!",
    image: "assets/2022CFD-GIF.gif",
    gallery: ["assets/SDM Drawing.png", "assets/Screenshot 2023-06-07 094845.png", "assets/F1CFD_velprofile.png"]
  },
  {
    status: "past",
    tags: ["MATLAB", "Dynamics"],
    title: "Robotic Arm Dynamics Simulation",
    summary: "Simulated the dynamics of a robotic arm using MATLAB.",
    details: "<p>A more conceptual and mathy project from MAE384: Advanced Math Methods for Engineers. A 2 DoF robotic arm can be represented with second-order differential equations (shown below) as well as a variety of energy and torque functions. This final project anticlimactically required me to solve for seemingly arbitrary values as well as some visuals.</p>",
    image: "assets/FinalProj384.png",
    gallery: [
      { src: "assets/robot.png", wide: true },
      { src: "assets/graph.png", wide: true }
    ]
  },
];

/* =========================================================
   RENDER PROJECT CARDS
   ========================================================= */
const grid = document.getElementById("projectGrid");

function placeholderFor(title) {
  const text = encodeURIComponent(title.replace(/\s+/g, "+"));
  return `https://placehold.co/640x400/112742/93a5bc?text=${text}`;
}

function isVideoFile(src) {
  return /\.(mp4|webm|mov)$/i.test(src || "");
}

// Gallery items are usually a plain src string. Pass an object to customize:
// { src, wide: true } forces the full-width banner treatment.
// { src, fit: "contain" } keeps normal side-by-side sizing but shows the
// whole image (letterboxed) instead of cropping it to fill the cell.
function galleryImg(item, alt) {
  const src = typeof item === "string" ? item : item.src;
  const wide = typeof item === "object" && item.wide;
  const contain = typeof item === "object" && item.fit === "contain";
  const img = `<img src="${src}" alt="${alt}"${contain ? ` class="is-contain"` : ""}>`;
  if (!wide) return img;
  // Wide images (posters, dense diagrams) get downscaled a lot in the grid —
  // link to the full-resolution file so it can be read clearly.
  return `<a href="${src}" class="is-wide" target="_blank" rel="noopener">${img}</a>`;
}

projects.forEach((p, i) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.index = i;

  const media = isVideoFile(p.image)
    ? `<video src="${p.image}" autoplay muted loop playsinline></video>`
    : `<img src="${p.image}" alt="${p.title}" onerror="this.onerror=null;this.src='${placeholderFor(p.title)}'">`;

  card.innerHTML = `
    <div class="project-card__media${p.mediaFit === "contain" ? " project-card__media--contain" : ""}"${p.mediaBg ? ` style="background:${p.mediaBg}"` : ""}>
      ${media}
    </div>
    <div class="project-card__body">
      <div class="tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <span class="expand-link">Click to expand →</span>
    </div>
  `;

  card.addEventListener("click", () => openModal(i));
  grid.appendChild(card);
});

/* =========================================================
   PROJECT MODAL
   ========================================================= */
const modal = document.getElementById("modal");
const modalPanel = document.getElementById("modalPanel");
const modalImg = document.getElementById("modalImg");
const modalVideo = document.getElementById("modalVideo");
const modalMedia = document.getElementById("modalMedia");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTags = document.getElementById("modalTags");
const modalGallery = document.getElementById("modalGallery");
const modalClose = document.getElementById("modalClose");

function openModal(i) {
  const p = projects[i];
  modalMedia.classList.remove("is-hidden");
  modalPanel.classList.add("modal__panel--wide");
  if (isVideoFile(p.image)) {
    modalImg.onerror = null;
    modalImg.hidden = true;
    modalVideo.hidden = false;
    modalVideo.src = p.image;
    modalVideo.load();
    // Defer play() a frame so the browser has actually painted the video
    // visible first — playing immediately after un-hiding can leave
    // Chromium stuck showing a solid black frame.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        modalVideo.play().catch(() => {});
      });
    });
  } else {
    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.hidden = true;
    modalImg.hidden = false;
    modalImg.src = p.image;
    modalImg.onerror = () => { modalImg.onerror = null; modalImg.src = placeholderFor(p.title); };
    modalImg.alt = p.title;
  }
  modalTitle.textContent = p.title;
  modalDesc.innerHTML = p.details;
  modalTags.innerHTML = `
    ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
  `;
  modalGallery.innerHTML = (p.gallery || [])
    .map(item => galleryImg(item, p.title))
    .join("");
  modalMedia.classList.toggle("modal__media--contain", p.mediaFit === "contain");
  modalMedia.style.background = p.mediaBg || "";
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/* =========================================================
   "RANDOM STUFF" MISC GALLERY — opens in the shared modal.
   Add photo paths to miscPhotos below.
   ========================================================= */
const miscPhotos = [
  "assets/20220121_125511.jpg",
  "assets/20250107_114105.jpg",
  "assets/Truss SS.png",
  "assets/matlabgraph.png"
];

function openMiscModal() {
  modalPanel.classList.remove("modal__panel--wide");
  modalMedia.classList.add("is-hidden");
  modalTitle.textContent = "Random Stuff";
  modalDesc.textContent = "A grab-bag of other engineering-related photos that didn't fit neatly into a project above.";
  modalTags.innerHTML = "";
  modalGallery.innerHTML = miscPhotos.length
    ? miscPhotos.map(item => galleryImg(item, "Random stuff")).join("")
    : `<p style="color:var(--ink-dim); grid-column:1/-1;">More photos coming soon.</p>`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

document.getElementById("miscBtn").addEventListener("click", openMiscModal);

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modalVideo.pause();
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* =========================================================
   EXPERIENCE — vertical timeline with "Read More" modal
   Edit dates / location / company / role / summary / details
   below. "side" places the card left or right of the line.
   "image" is optional — omit it to fall back to the enlarged
   icon panel instead of a photo.
   ========================================================= */
const ICONS = {
  truck: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 32V21a2 2 0 0 1 2-2h13v13"/>
    <path d="M20 19h8l8 7v6"/>
    <path d="M5 32h3"/>
    <path d="M16 32h10"/>
    <path d="M36 32h4v-6"/>
    <circle cx="13" cy="34.5" r="3.3"/>
    <circle cx="33" cy="34.5" r="3.3"/>
  </svg>`,
  wafer: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M24 6a18 18 0 1 0 12.73 30.73L24 24Z"/>
    <path d="M13 17h22M13 24h22M13 31h22"/>
    <path d="M18 11v26M24 9v30M30 11v26"/>
  </svg>`
};

const experiences = [
  {
    dates: "May 2025 – Aug 2025",
    location: "Wickenburg, AZ",
    company: "BearCat Manufacturing",
    role: "Mechanical Engineer Intern",
    icon: "truck",
    image: "assets/bearcat-2.jpg",
    logo: "assets/bearcatlogo.png",
    side: "left",
    summary: "Reverse-engineered 140+ jigs and fixtures and led root-cause analysis on Distributor spraybar misalignment.",
    details: "<p>For my 3-month internship at Bearcat Manufacturing, I was tasked with the daunting role of reverse engineering all jigs/fixtures for the Chipper and Distributor product lines. My daily tasks comprised of sorting, documenting, 3D scanning, modeling, and creating technical drawings for each jig.</p><p>I also contributed to Distributer process improvements, performing an 8D Root Cause Analysis to correct spraybar misalignment, which significantly improved bitumen application and mitigated customer troubleshooting.</p>",
    gallery: [
      "assets/20250701_113156 (2).jpg",
      "assets/tmp_94365f36-0a78-4e84-ac20-64a28e15bc38.png",
      "assets/unnamed.webp"
    ]
  },
  {
    dates: "May 2026 – Aug 2026",
    location: "Phoenix, AZ",
    company: "TSMC",
    role: "AMHS Hardware/Quality Engineer Intern",
    icon: "wafer",
    image: "assets/wafer.jpg",
    mediaFit: "contain",
    logo: "assets/tsmclogo.png",
    logoLarge: true,
    side: "right",
    summary: "Ran a DoE to reduce particle counts in packaging tools and supported AMHS hardware installs.",
    details: "During the summer of 2026, I contributed to the largest global chip supplier, TSMC. While the amount I can disclose is very limited, I performed a DoE for root cause analysis for particle counts in packaging tools, supported AMHS hardware installs, built a defect density tool, designed SOPs, and other various tasks.",
    gallery: [
      "assets/image001 (1).png"
    ]
  },
  {
    dates: "Spring/Summer 2027",
    location: "Open to relocation",
    company: "Open to Opportunities",
    role: "Next Internship",
    icon: "question",
    side: "left",
    summary: "Looking for a Spring/Summer 2027 internship in manufacturing or design engineering.",
    upcoming: true
  }
];

const expList = document.getElementById("expList");

function renderExperience() {
  const html = experiences.map((exp, i) => {
    const media = exp.image
      ? `<img src="${exp.image}" alt="${exp.company}">`
      : `<span class="exp-card__icon-panel">${exp.upcoming ? "?" : (ICONS[exp.icon] || "")}</span>`;

    const action = exp.upcoming
      ? `<a href="#contact" class="exp-card__more">Let's talk →</a>`
      : `<button type="button" class="exp-card__more" data-index="${i}">Read More →</button>`;

    const card = `
      <div class="exp-card exp-card--point-${exp.side === "left" ? "right" : "left"}${(exp.logo || exp.upcoming) ? " exp-card--logo" : ""}">
        <div class="exp-card__media${exp.mediaFit === "contain" ? " exp-card__media--contain" : ""}">
          ${exp.upcoming ? "" : `
          <span class="frame__corner tl"></span>
          <span class="frame__corner tr"></span>
          <span class="frame__corner bl"></span>
          <span class="frame__corner br"></span>
          `}
          ${media}
        </div>
        <h3 class="exp-card__title">${exp.company}</h3>
        <p class="exp-card__role">${exp.role}</p>
        <p class="exp-card__desc">${exp.summary}</p>
        ${action}
      </div>
    `;

    const meta = `
      <div class="exp-row__meta exp-row__meta--${exp.side === "left" ? "right" : "left"}">
        <p class="exp-row__dates">${exp.dates}</p>
        <p class="exp-row__location">${exp.location}</p>
      </div>
    `;

    const node = exp.logo
      ? `<span class="exp-row__node exp-row__node--logo${exp.logoLarge ? " exp-row__node--logo-lg" : ""}"><img src="${exp.logo}" alt="${exp.company} logo"></span>`
      : exp.upcoming
        ? `<span class="exp-row__node exp-row__node--logo exp-row__node--question">?</span>`
        : `<span class="exp-row__node"></span>`;

    return `
      <div class="exp-row${exp.upcoming ? " exp-row--upcoming" : ""}">
        <div class="exp-row__side">${exp.side === "left" ? card : meta}</div>
        <div class="exp-row__node-col">${node}</div>
        <div class="exp-row__side">${exp.side === "right" ? card : meta}</div>
      </div>
    `;
  }).join("");

  expList.innerHTML = `
    <span class="exp-timeline__cap exp-timeline__cap--top"></span>
    ${html}
    <span class="exp-timeline__cap exp-timeline__cap--bottom"></span>
  `;

  expList.querySelectorAll(".exp-card__more[data-index]").forEach(btn => {
    btn.addEventListener("click", () => openExpModal(Number(btn.dataset.index)));
  });
}

function openExpModal(i) {
  const exp = experiences[i];
  modalMedia.classList.remove("is-hidden");
  modalMedia.style.background = "";
  modalPanel.classList.remove("modal__panel--wide");
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.hidden = true;
  modalImg.hidden = false;
  modalImg.src = exp.image || placeholderFor(exp.company);
  modalImg.onerror = () => { modalImg.onerror = null; modalImg.src = placeholderFor(exp.company); };
  modalImg.alt = exp.company;
  modalTitle.textContent = `${exp.company} — ${exp.role}`;
  modalDesc.innerHTML = exp.details;
  modalMedia.classList.toggle("modal__media--contain", exp.mediaFit === "contain");
  modalTags.innerHTML = `
    <span class="tag">${exp.dates}</span>
    <span class="tag">${exp.location}</span>
  `;
  modalGallery.innerHTML = (exp.gallery || [])
    .map(item => galleryImg(item, exp.company))
    .join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

renderExperience();

/* =========================================================
   MOBILE NAV TOGGLE
   ========================================================= */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* =========================================================
   SCROLL REVEAL — each section fades/slides in the first
   time it enters the viewport while scrolling down.
   ========================================================= */
const revealSections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealSections.forEach(section => revealObserver.observe(section));
} else {
  revealSections.forEach(section => section.classList.add("is-visible"));
}