document.addEventListener('DOMContentLoaded', () => {
    const headContainer = document.getElementById('head-container');
    const head = document.getElementById('head');
    const welcomeScreen = document.getElementById('welcome-screen');
    const sparklesContainer = document.getElementById('sparkles');

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

    headContainer.addEventListener('click', () => {
        createSparkles();
        head.src = 'assets/head_open.png';
        setTimeout(() => {
            head.src = 'assets/head_closed.png';
        }, 200);
        
        setTimeout(() => {
            headContainer.classList.add('hidden');
            welcomeScreen.classList.remove('hidden');
        }, 1000);
    });
});
