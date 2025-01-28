// 3. Steven Head Image Change
document.getElementById('steven-head').addEventListener('click', function () {
    window.location.href = "https://youtu.be/r6LI-VrzWxU?si=2weHQjWMRx_mX958";
});

// 7. Elf Girl Video Section
const elfGirlVideo = document.querySelector('.elf-girl-video-section video');
const videos = [
    '001-1_30fps_2000px_infinite-loop_10M.webm',
    '001-2_30fps_2000px_infinite-loop_10M.webm',
    '001-3_30fps_2000px_infinite-loop_10M.webm',
    '002-1_30fps_2000px_infinite-loop_10M.webm',
    '002-2_30fps_2000px_infinite-loop_10M.webm',
    '002-3_30fps_2000px_infinite-loop_10M.webm',
    '003-1_30fps_2000px_infinite-loop_10M.webm',
    '003-2_30fps_2000px_infinite-loop_10M.webm',
    '003-3_30fps_2000px_infinite-loop_10M.webm',
    '004-1_30fps_2000px_infinite-loop_10M.webm',
    '004-2_30fps_2000px_infinite-loop_10M.webm',
    '004-3_30fps_2000px_infinite-loop_10M.webm',
    '005-1_30fps_2000px_infinite-loop_10M.webm',
    '005-2_30fps_2000px_infinite-loop_10M.webm',
    '005-3_30fps_2000px_infinite-loop_10M.webm',
    '006-1_30fps_2000px_infinite-loop_10M.webm',
    '006-2_30fps_2000px_infinite-loop_10M.webm',
    '006-3_30fps_2000px_infinite-loop_10M.webm',
    '007-1_30fps_2000px_infinite-loop_10M.webm',
    '007-2_30fps_2000px_infinite-loop_10M.webm',
    '007-3_30fps_2000px_infinite-loop_10M.webm',
    '008-1_30fps_2000px_infinite-loop_10M.webm',
    '008-2_30fps_2000px_infinite-loop_10M.webm',
    '008-3_30fps_2000px_infinite-loop_10M.webm',
    '009-1_30fps_2000px_infinite-loop_10M.webm',
    '009-2_30fps_2000px_infinite-loop_10M.webm',
    '009-3_30fps_2000px_infinite-loop_10M.webm'
];

function loadRandomElfGirlVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const selectedVideo = videos[randomIndex];
    const videoSrc = `assets/animations/${selectedVideo}`;
    elfGirlVideo.src = videoSrc;
    elfGirlVideo.load();
}

// Initialize the video when the page loads
window.addEventListener('load', loadRandomElfGirlVideo);

// Intersection Observer to load iframes when they are in the viewport
const iframeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const iframe = entry.target;
            if (!iframe.src) {
                iframe.src = iframe.dataset.src;
            }
        }
    });
}, {
    rootMargin: '100px 0px', // Adjust the root margin as needed
    threshold: 0.1
});

// Select all iframes and observe them
document.querySelectorAll('.video-carousel iframe, .video-grid iframe').forEach(iframe => {
    iframeObserver.observe(iframe);
});