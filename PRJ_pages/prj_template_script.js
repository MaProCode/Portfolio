    AOS.init();

// DARK MODE
// --------- 
    function toggleMode() {
      document.body.classList.toggle("light-mode");
    }


// effetto ZOOM su IMMAGINI
// --------- --------------
    const overlay = document.getElementById("zoomOverlay");
    const zoomedImageContainer = document.getElementById("zoomedImageContainer");
    const zoomedImage = document.getElementById("zoomedImage");

    document.querySelectorAll('.media-row figure img').forEach(img => {
      img.addEventListener('click', () => {
        zoomedImage.src = img.src;
        overlay.classList.add('active');
        zoomedImageContainer.style.display = 'block';
      });
    });

    overlay.addEventListener('click', () => {
      overlay.classList.remove('active');
      zoomedImageContainer.style.display = 'none';
      zoomedImage.src = '';
    });











// effetto NUVOLA DI PARTICELLE
// ----------------------------
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const particles = [];
    const particleCount = 150;
  
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
  
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = !document.body.classList.contains('light-mode');
      const particleColor = isDark ? '#00A8E8' : '#0D0D0D';
      const linkColor = isDark ? 'rgba(0, 168, 232, 0.2)' : 'rgba(13, 13, 13, 0.1)';
  
      particles.forEach(p => {
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.shadowColor = particleColor;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
  
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 250) {
            const alpha = 1 - dist / 250;
            ctx.globalAlpha = alpha * 0.5;
            ctx.strokeStyle = linkColor;
            ctx.lineWidth = 3.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
  
      requestAnimationFrame(drawParticles);
    }
  
    drawParticles();
  
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  
    // Ri-colora le particelle quando si cambia modalità
    document.querySelector('.toggle-mode').addEventListener('click', () => {
      setTimeout(() => drawParticles(), 300);
    });