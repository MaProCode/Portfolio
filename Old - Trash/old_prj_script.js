const progressBar = document.getElementById('swiperProgress');
const slider = document.getElementById('swiperSlider');

    // gestione Swiper
    const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
      },
      on: {
        slideChangeTransitionStart() {
          progressBar.style.animation = 'none';
          progressBar.offsetHeight;     // trigger reflow
          progressBar.style.animation = 'progressBarAnim 5s linear infinite';
        }
      }
    });


    // Ferma autoplay quando parte un video
    document.querySelectorAll('video').forEach(video => {
      video.addEventListener('play', () => swiper.autoplay.stop());
      video.addEventListener('pause', () => swiper.autoplay.start());
    });


    // Ferma animazione della barra su hover
    slider.addEventListener('mouseenter', () => {
      progressBar.style.animationPlayState = 'paused';
    });
    
    slider.addEventListener('mouseleave', () => {
      progressBar.style.animationPlayState = 'running';
    });