document.addEventListener('DOMContentLoaded', () => {
    const headContainer = document.getElementById('head-container');
    const headEnterSite = document.getElementById('head-enter-site');
    const content = document.getElementById('content');
    const sparklesContainer = document.getElementById('sparkles');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navbarHeadContainer = document.querySelector('.navbar-head-container');
    const navbarSparklesContainer = document.querySelector('.navbar-sparkles');
    const elfGirlVideo = document.getElementById('elf-girl-video');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const bookImage = document.getElementById('book-image');

    let isSparkleActive = false;
    let isHeadClicked = false;
    let watchedVideos = [];

    function createSparkle(container) {
        if (!isSparkleActive && container !== navbarSparklesContainer) return;
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 1.5 + 's';
        container.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }

    function startSparkles() {
        isSparkleActive = true;
    }

    function stopSparkles() {
        isSparkleActive = false;
        const sparkles = sparklesContainer.querySelectorAll('.sparkle');
        sparkles.forEach(sparkle => {
            sparkle.classList.add('sparkle-fade-out');
            setTimeout(() => {
                sparkle.remove();
            }, 500);
        });
    }

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
        if (sectionId === 'elf-girls') {
            loadRandomElfGirlVideo();
        }
    }

    function resetNavbarActive() {
        navbar.querySelectorAll('a, li').forEach(el => el.classList.remove('active'));
    }

    function loadRandomElfGirlVideo() {
        const totalVideos = 27; // 9 elf girls * 3 versions each
        let availableVideos = Array.from({ length: totalVideos }, (_, i) => i + 1)
            .filter(num => !watchedVideos.includes(num));

        if (availableVideos.length === 0) {
            watchedVideos = [];
            availableVideos = Array.from({ length: totalVideos }, (_, i) => i + 1);
        }

        const randomIndex = Math.floor(Math.random() * availableVideos.length);
        const selectedVideo = availableVideos[randomIndex];
        watchedVideos.push(selectedVideo);

        const elfGirlNumber = Math.floor((selectedVideo - 1) / 3) + 1;
        const versionNumber = ((selectedVideo - 1) % 3) + 1;
        const videoSrc = `assets/animations/00${elfGirlNumber}-${versionNumber}_30fps_2000px_infinite-loop_10M.webm`;

        elfGirlVideo.src = videoSrc;
        elfGirlVideo.load();
        elfGirlVideo.play().catch(error => {
            console.error('Error playing video:', error);
        });
    }

    headContainer.addEventListener('mouseenter', startSparkles);
    headContainer.addEventListener('mouseleave', stopSparkles);

    headContainer.addEventListener('mousedown', () => {
        headEnterSite.src = 'assets/head_closed.png';
    });

    headContainer.addEventListener('mouseup', () => {
        headEnterSite.src = 'assets/head_open.png';
        if (!isHeadClicked) {
            isHeadClicked = true;
            setTimeout(() => {
                headContainer.style.opacity = '0';
                setTimeout(() => {
                    headContainer.style.display = 'none';
                    content.classList.remove('hidden');
                    content.classList.add('visible');
                    navbar.classList.remove('hidden');
                    navbar.classList.add('visible');
                    showSection('home');
                }, 300);
            }, 200);
        }
    });

    headContainer.addEventListener('mousedown', (e) => {
        e.preventDefault();
    });

    navbar.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substring(1);
            showSection(sectionId);

            resetNavbarActive();

            e.target.classList.add('active');

            const parentLi = e.target.closest('li');
            if (parentLi) {
                parentLi.classList.add('active');
            }

            const dropdown = e.target.closest('.dropdown');
            if (dropdown) {
                dropdown.classList.add('active');
            } else {
                navbar.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
            }

            const aboutMeDropdown = navbar.querySelector('.dropdown');
            if (sectionId === 'about' || sectionId === 'contact' || sectionId === 'occult' || sectionId === 'video-games') {
                aboutMeDropdown.classList.add('active');
                aboutMeDropdown.querySelector('a').classList.add('active');
            }
        }
    });

    function createNavbarSparkle() {
        if (navbarHeadContainer.matches(':hover')) {
            createSparkle(navbarSparklesContainer);
        }
    }

    setInterval(createNavbarSparkle, 50);

    setInterval(() => createSparkle(sparklesContainer), 50);

    navbarHeadContainer.addEventListener('click', () => {
        showSection('home');
        resetNavbarActive();
    });

    const eventDate = new Date(2023, 3, 10);

    function updateCounter() {
        const today = new Date();
        const diffTime = Math.abs(today - eventDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        document.getElementById('days-counter').textContent = diffDays;
    }

    updateCounter();
    setInterval(updateCounter, 24 * 60 * 60 * 1000);

    elfGirlVideo.addEventListener('click', () => {
        window.open('https://www.deviantart.com/stevencasteel/gallery/92813799/elf-girls', '_blank');
    });

    fullscreenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (elfGirlVideo.requestFullscreen) {
            elfGirlVideo.requestFullscreen();
        } else if (elfGirlVideo.mozRequestFullScreen) {
            elfGirlVideo.mozRequestFullScreen();
        } else if (elfGirlVideo.webkitRequestFullscreen) {
            elfGirlVideo.webkitRequestFullscreen();
        } else if (elfGirlVideo.msRequestFullscreen) {
            elfGirlVideo.msRequestFullscreen();
        }
    });

    bookImage.addEventListener('click', () => {
        window.open('https://a.co/d/3VrAuVG', '_blank');
    });
});