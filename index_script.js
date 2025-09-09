
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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const isDark = document.body.classList.contains('dark-mode');
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
	  const alpha = 1 - dist / 250;     // dissolvenza graduale
	  ctx.globalAlpha = alpha * 0.5;
	  ctx.strokeStyle = linkColor;
	  ctx.lineWidth = 3.8;  // 2.8
	  ctx.beginPath();
	  ctx.moveTo(particles[i].x, particles[i].y);
	  ctx.lineTo(particles[j].x, particles[j].y);
	  ctx.stroke();
	  ctx.globalAlpha = 1;
	  }
    }
  }
}


window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();

// ---





// effetto TYPEWRITER
// ------------------
    const config = {
      phrases: [                                        // BarbaTrick !
        "> Welcome to my Digital Portfolio Website ",   // aggiungo un ">" all'inizio e arrivo a cancellare fino al 
        "> Embedded Systems Software Design ",          // penultimo carattere, per evitare il saltino di scroll up ad
        "> Software Developent ",                       // ogni fine cancellazione riga
        "> Rapid Prototyping Devices ",
        "> R&D Custom solutions ",
        "> UI/UX Design ",
        "> Website Design & Development "
        // Hardware products Testing
        // Applications for Production sites   
      ],
      typingSpeed: 100,
      deletingSpeed: 50,
      pauseAfterTyping: 1200,
      loop: true
    };

    const el = document.getElementById("typewriter");
    const { phrases, typingSpeed, deletingSpeed, pauseAfterTyping, loop } = config;

    let i = 0, j = 0;
    let currentPhrase = [];
    let isDeleting = false;

    function type() {
      el.textContent = currentPhrase.join("");

      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
      } else if (isDeleting && j >= 0) {
        currentPhrase.pop();
        j--;
      }

      if (j === phrases[i].length) {
        isDeleting = true;
        setTimeout(type, pauseAfterTyping);
        return;
      }
                                                            
      if (j === 1 && isDeleting) {                         // <-- arrivo a cancellare fino al penultimo carattere, per evitare
        isDeleting = false;                                // il saltino di scroll up ad ogni fine cancellazione riga
        i++;
        if (i >= phrases.length && !loop) return;
        i = i % phrases.length;
      }

      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();

    // ---