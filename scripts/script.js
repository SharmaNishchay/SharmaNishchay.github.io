document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display projects
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <img src="images/${project.image}" alt="${project.title}">
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
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
            data.forEach(skill => {
                const skillItem = document.createElement('li');
                skillItem.textContent = skill;
                skillsList.appendChild(skillItem);
            });
        })
        .catch(error => console.error('Error fetching skills:', error));
});
const video = document.getElementById('header-video');

    video.addEventListener('ended', () => {
        setTimeout(() => {
            video.play();
        }, 5000); // 5000ms = 5 seconds delay
    });
