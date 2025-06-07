document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display projects
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            projectsContainer.innerHTML = ''; // Clear any "Coming Soon..." message

            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project-card';

                // Create project card with gradient animation but no flip effect
                projectElement.innerHTML = `
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="tech-stack">
                        <h4 class="tech-stack-title">Tech Stack</h4>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="github-link">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    </div>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));

    // Fetch and display skills
    fetch('data/skills.json')
        .then(response => response.json())
        .then(data => {
            const skillsList = document.getElementById('skills-list');
            if (skillsList) {
                data.forEach(skill => {
                    const skillItem = document.createElement('li');
                    skillItem.textContent = skill;
                    skillsList.appendChild(skillItem);
                });
            }
        })
        .catch(error => console.error('Error fetching skills:', error));
});

// Video playback handling
const video = document.getElementById('header-video');
if (video) {
    video.addEventListener('ended', () => {
        setTimeout(() => {
            video.play();
        }, 5000); // 5000ms = 5 seconds delay
    });
}
