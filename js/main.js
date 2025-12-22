const projects = [
  {
    title: "Personal Website",
    status: "ACTIVE",
    description: "A personal portfolio website built with HTML, CSS, and JavaScript.",
    image: "assets/images/website.png",
    repo: "https://github.com/yourusername/website",
    demo: "https://yourusername.github.io",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Another Project",
    status: "IN PROGRESS",
    description: "...",
    image: "...",
    repo: "...",
    demo: "...",
    tags: ["Python", "ML"]
  },
  {
    title: "Another Project",
    status: "IN PROGRESS",
    description: "...",
    image: "...",
    repo: "...",
    demo: "...",
    tags: ["Python", "ML"]
  },
  {
    title: "Another Project",
    status: "IN PROGRESS",
    description: "...",
    image: "...",
    repo: "...",
    demo: "...",
    tags: ["Python", "ML"]
  }
];

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
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
        <a href="${project.repo}" target="_blank">Repository</a>
        <a href="${project.demo}" target="_blank">Live Demo</a>
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
