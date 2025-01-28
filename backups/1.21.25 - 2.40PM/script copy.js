// 3. Steven Head Image Change
document.getElementById('steven-head').addEventListener('click', function() {
  window.location.href = "https://youtu.be/r6LI-VrzWxU?si=2weHQjWMRx_mX958";
});

// 3. Social Icons Carousel
const socialCarousel = document.getElementById('social-carousel');
const socialTrack = socialCarousel.querySelector('.carousel-track');
const socialIcons = socialTrack.querySelectorAll('.social-icon');
const socialIconWidth = socialIcons[0].offsetWidth + 10; // + margin
let socialIndex = 0;
let isDraggingSocial = false;
let startXSocial;
let currentXSocial;

function updateSocialCarousel() {
  socialTrack.style.transform = `translateX(${-socialIndex * socialIconWidth}px)`;
}

function moveSocialCarousel(direction) {
  socialIndex += direction;
  const numIcons = socialIcons.length;
  socialIndex = (socialIndex % numIcons + numIcons) % numIcons; // Keep index within bounds
  updateSocialCarousel();
}

// Automatic scrolling for social carousel
let socialScrollInterval = setInterval(() => {
  moveSocialCarousel(1);
}, 3000);

socialCarousel.addEventListener('mouseenter', () => {
  clearInterval(socialScrollInterval);
});

socialCarousel.addEventListener('mouseleave', () => {
  socialScrollInterval = setInterval(() => {
    moveSocialCarousel(1);
  }, 3000);
});

// Click event for social icons
socialIcons.forEach(icon => {
  icon.addEventListener('click', function() {
    window.open(this.dataset.url, '_blank');
  });
});

// Drag to scroll functionality for social carousel
socialTrack.addEventListener('mousedown', (e) => {
  isDraggingSocial = true;
  startXSocial = e.pageX - socialTrack.offsetLeft;
  currentXSocial = socialTrack.style.transform ? parseInt(socialTrack.style.transform.split('(')[1]) : 0; // Get current translation
  socialTrack.style.transition = 'none'; // Disable transition while dragging
});

socialTrack.addEventListener('mousemove', (e) => {
  if (!isDraggingSocial) return;
  e.preventDefault();
  const x = e.pageX - socialTrack.offsetLeft;
  const walk = (x - startXSocial) * 2; // Adjust sensitivity here
  socialTrack.style.transform = `translateX(${currentXSocial + walk}px)`;
});

socialTrack.addEventListener('mouseup', () => {
  isDraggingSocial = false;
  socialTrack.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
});

socialTrack.addEventListener('mouseleave', () => {
  isDraggingSocial = false;
  socialTrack.style.transition = 'transform 0.5s ease-in-out';
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

// 8. Video Carousels
const videoCarousels = document.querySelectorAll('.video-carousel');

videoCarousels.forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const iframes = track.querySelectorAll('iframe');
  const iframeWidth = iframes[0].offsetWidth + 10; // + margin
  let index = 0;
  let isDragging = false;
  let startX;
  let currentX;

  function updateCarousel() {
    track.style.transform = `translateX(${-index * iframeWidth}px)`;
  }

  function moveCarousel(direction) {
    index += direction;
    const numIframes = iframes.length;

    // Manual looping
    if (index >= numIframes) {
      index = 0; // Reset to the beginning
    } else if (index < 0) {
      index = numIframes - 1; // Go to the end
    }

    updateCarousel();
  }

  // Automatic scrolling (Optional - You can remove this if you don't need it)
  let scrollInterval = setInterval(() => {
    moveCarousel(1);
  }, 5000);

  carousel.addEventListener('mouseenter', () => {
    clearInterval(scrollInterval);
  });

  carousel.addEventListener('mouseleave', () => {
    scrollInterval = setInterval(() => {
      moveCarousel(1);
    }, 5000);
  });

  // Drag to scroll functionality
  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - track.offsetLeft;
    currentX = track.style.transform ? parseInt(track.style.transform.split('(')[1]) : 0;
    track.style.transition = 'none';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2; // Adjust sensitivity here
    track.style.transform = `translateX(${currentX + walk}px)`;
  });

  track.addEventListener('mouseup', () => {
    isDragging = false;
    track.style.transition = 'transform 0.5s ease-in-out';

    // Snap to the nearest iframe
    const movedX = track.style.transform ? parseInt(track.style.transform.split('(')[1]) : 0;
    const closestIndex = Math.round(Math.abs(movedX) / iframeWidth);
    index = closestIndex;
    updateCarousel();
  });

  track.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      track.style.transition = 'transform 0.5s ease-in-out';

      // Snap to the nearest iframe
      const movedX = track.style.transform ? parseInt(track.style.transform.split('(')[1]) : 0;
      const closestIndex = Math.round(Math.abs(movedX) / iframeWidth);
      index = closestIndex;
      updateCarousel();
    }
  });
});

// Lazy Loading Intersection Observer
const lazyElements = document.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]');

const lazyObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      if (element.tagName === 'IMG') {
        element.src = element.dataset.src;
      } else if (element.tagName === 'IFRAME') {
        element.src = element.dataset.src;
      }
      lazyObserver.unobserve(element);
    }
  });
});

lazyElements.forEach(element => {
  lazyObserver.observe(element);
});