// Data for Skills and Projects
const skills = [
  { name: 'JavaScript', level: 80, description: 'Web development and dynamic content creation' },
  { name: 'Blockchain', level: 75, description: 'Ethereum, Solidity, Web3.js, and Smart Contracts' },
  { name: 'Project Management', level: 85, description: 'Coordinating teams, timelines, and deliverables' },
  { name: 'HTML & CSS', level: 90, description: 'Frontend development and design' },
  { name: 'Python', level: 70, description: 'Data analysis and automation' }
];

const projects = [
  {
    title: 'Fake Product Identification using Blockchain',
    description: 'A decentralized system to trace the authenticity of products using blockchain technology.',
    link: 'https://github.com/chidu88/PROJECT.git'
  }
];

// Function to display Skills dynamically
function displaySkills() {
  const skillsList = document.querySelector('.skills-list');
  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill');
    skillElement.innerHTML = `
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
      <div class="progress-bar">
        <div class="progress" style="width: ${skill.level}%"></div>
      </div>
      <p>${skill.level}% proficiency</p>
    `;
    skillsList.appendChild(skillElement);
  });
}

// Function to display Projects dynamically
function displayProjects() {
  const projectsList = document.querySelector('.projects-list');
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <button class="view-project-btn" data-title="${project.title}" data-description="${project.description}" data-link="${project.link}">View Project</button>
    `;
    projectsList.appendChild(projectElement);
  });
}

// Event listener for modals (view project details)
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('view-project-btn')) {
    const title = event.target.getAttribute('data-title');
    const description = event.target.getAttribute('data-description');
    const link = event.target.getAttribute('data-link');
    
    // Populate the modal with project details
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    const modalLink = document.getElementById('modal-link');
    modalLink.href = link;
    modalLink.style.display = link ? 'inline-block' : 'none';
    
    // Display the modal
    document.getElementById('modal').style.display = 'block';
  }
});

// Event listener to close the modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// Smooth scroll effect for navigation links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Adjust for the fixed navbar height
      behavior: 'smooth'
    });
  });
});

// Initialize dynamic content (Skills and Projects)
window.onload = () => {
  displaySkills();
  displayProjects();
};
