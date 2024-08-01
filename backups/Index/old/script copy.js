document.addEventListener('DOMContentLoaded', () => {
    const headContainer = document.getElementById('head-container');
    const head = document.getElementById('head');
    const content = document.getElementById('content');
    const sparklesContainer = document.getElementById('sparkles');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');

    function createSparkles() {
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 0.2 + 's';
            sparklesContainer.appendChild(sparkle);
        }
    }

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    headContainer.addEventListener('click', () => {
        createSparkles();
        head.src = 'assets/head_open.png';
        setTimeout(() => {
            headContainer.style.opacity = '0';
            setTimeout(() => {
                headContainer.style.display = 'none';
                content.classList.remove('hidden');
                content.classList.add('visible');
                navbar.classList.remove('hidden');
                showSection('home');
            }, 500);
        }, 1000);
    });

    // Navigation functionality
    navbar.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substring(1);
            showSection(sectionId);

            // Update active link
            navbar.querySelectorAll('a').forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
});
