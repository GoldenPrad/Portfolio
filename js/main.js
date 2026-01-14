const projects = [
  {
    title: "FitForm",
    status: "IN PROGRESS",
    date: "Early 2026",
    description: "FitForm is an in-progress project exploring a computer vision–based approach to understanding and comparing visual patterns in real-world data. The project focuses on image processing and similarity analysis for everyday fashion.",
    image: "assets/images/outfit.png",
    repo: "",
    repoPrivate: true,   // true → private repo styling
    demo: "",  // empty string or null → no demo button 
    tags: ["Python", "Computer Vision", "Machine Learning"]
  },  
  {
    title: "Personal Website",
    status: "ACTIVE",
    date: "Jan 2026",
    description:
      "Designed and built a personal portfolio website to showcase projects, experience, and coursework. Implemented a long-scroll layout with dynamic project and experience sections generated in JavaScript. Focused on clean design, maintainability, and extensibility over time.",
    image: "assets/images/circuit-background.jpg",
    repo: "https://github.com/GoldenPrad/Site",
    repoPrivate: false,   // true → private repo styling
    demo: "https://goldenprad.github.io/Portfolio/",  // empty string or null → no demo button
    tags: ["HTML", "CSS", "JavaScript"]
  },
 {
    title: "TriviArt",
    status: "HACKATHON",
    date: "Apr 2024",
    description:
      "Developed TriviArt, a trivia-art minigame built in 12 hours under the theme “Art.” Designed five levels of gameplay with original pixel art, combining trivia mechanics with interactive visuals. Awarded Best Beginner Project out of 22 submissions for creativity and technical execution.",
    image: "assets/images/triviart-bg-title.png",
    repo: "",
    repoPrivate: true,   // true → private repo styling
    demo: "",  // empty string or null → no demo button
    tags: ["JavaScript", "p5play", "Game Design", "Pixel Art"]
  },
  {
    title: "Mask Detector",
    status: "COMPLETED",
    date: "Jul 2021",
    description:
      "Built and trained a machine learning model to detect proper face mask usage with over 95% accuracy. Labeled and utilized more than 800,000 training images to validate performance across varied conditions.",
    image: "assets/images/face-mask-table.jpg",
    repo: "",
    repoPrivate: true,   // true → private repo styling
    demo: "",  // empty string or null → no demo button
    tags: ["Python", "Teachable Machine", "Computer Vision", "PictoBlox"]
  }
];


function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  // Repo button
let repoButton = "";
if (project.repoPrivate) {
  repoButton = `<span class="repo-disabled">Private Repository</span>`;
} else if (project.repo) {
  repoButton = `<a href="${project.repo}" target="_blank">Repository</a>`;
}

// Demo button
let demoButton = project.demo
  ? `<a href="${project.demo}" target="_blank">Live Demo</a>`
  : `<span class="button-placeholder"></span>`;


  card.innerHTML = `
    <span class="project-date">${project.date}</span>

    <div class="project-image">
      <img src="${project.image}" alt="${project.title}">
    </div>

    <div class="project-body">
      <div class="project-header">
        <h3>${project.title}</h3>
        <span class="project-status">${project.status}</span>
      </div>

      <p class="project-description">
        ${project.description}
      </p>

      <div class="project-buttons">
        ${repoButton}
        ${demoButton}
      </div>
    </div>

    <div class="project-tags">
      ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
    </div>
  `;

  return card;
}


const projectsGrid = document.getElementById("projects-grid");

projects.forEach(project => {
  const card = createProjectCard(project);
  projectsGrid.appendChild(card);
});

projects.push({
  title: "New Cool Project",
  status: "IN PROGRESS",  
  description: "...",
  image: "...",
  repo: "...",
  demo: "...",
  tags: ["Python", "ML"]
});

// EXPERIENCE

const experiences = [
  {
    title: "Deep Learning Research Intern – New Jersey Institute of Technology",
    time: "Jun 2024 – Aug 2024",
    bullets: [
      "Scaled an existing GAN model to generate novel crystalline structures across multiple elements under 11+ physical constraints.",
      "Refactored 3,000+ lines of legacy Python code to ensure compatibility with updated libraries, dependencies, and development environments."
    ]
  },
  {
    title: "Machine Learning Research Intern – New Jersey Institute of Technology",
    time: "Jun 2024 – Aug 2024",
    bullets: [
      "Analyzed severe training instability across image classification models, where accuracy fluctuated by up to 90% despite constant input data.",
      "Improved data preprocessing and feature normalization using Python, TensorFlow, and scikit-learn, reducing accuracy variance to under 10%.",
      "Implemented optimization techniques to further stabilize model performance and reliability."
    ]
  }
];



function createExperienceCard(exp) {
  const card = document.createElement("div");
  card.className = "experience-card";

  const bulletsHTML = exp.bullets
    .map(bullet => `<li>${bullet}</li>`)
    .join("");

  card.innerHTML = `
    <div class="experience-header">
      <h3>${exp.title}</h3>
      <span>${exp.time}</span>
    </div>
    <ul class="experience-bullets">
      ${bulletsHTML}
    </ul>
  `;

  return card;
}


const experienceSection = document.getElementById("experience");

experiences.forEach(exp => {
  experienceSection.appendChild(createExperienceCard(exp));
});


// About Links/Course work switching
const aboutTabs = document.querySelectorAll(".about-tab");
const aboutContents = document.querySelectorAll(".about-tab-content");

aboutTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    aboutTabs.forEach(t => t.classList.remove("active"));
    aboutContents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Nav Bar Scrolling Anchoring
const nav = document.querySelector("nav");

function setNavHeight() {
  document.documentElement.style.setProperty(
    "--nav-height",
    `${nav.offsetHeight}px`
  );
}

window.addEventListener("load", setNavHeight);
window.addEventListener("resize", setNavHeight);


// Clipboard Copy + Notification
document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", () => {
    const valueEl = button.parentElement.querySelector(".link-value");
    const textToCopy = valueEl.dataset.copy;
    const label = button.dataset.label;

    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast(`${label} copied to clipboard`);
    });
  });
});


function showToast(message) {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    toast.style.transition = "opacity 0.25s ease, transform 0.25s ease";

    setTimeout(() => {
      toast.remove();
    }, 250);
  }, 1600);
}

