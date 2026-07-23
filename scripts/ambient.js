(function () {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const palette = ['#8052ff', '#ffb829', '#15846e', '#c084fc', '#5b8def'];

  let width, height, particles;
  const DENSITY = 0.00009;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.documentElement.scrollHeight;
    const count = Math.min(160, Math.floor(width * height * DENSITY));
    particles = Array.from({ length: count }, () => spawn());
  }

  function spawn() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: 2 + Math.random() * 4,
      speed: 0.05 + Math.random() * 0.15,
      drift: (Math.random() - 0.5) * 0.2,
      angle: Math.random() * Math.PI * 2,
      rot: (Math.random() - 0.5) * 0.01,
      color: palette[Math.floor(Math.random() * palette.length)],
      opacity: 0.15 + Math.random() * 0.35,
    };
  }

  function drawTriangle(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.strokeStyle = p.color;
    ctx.globalAlpha = p.opacity;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(0, -p.size);
    ctx.lineTo(p.size * 0.87, p.size * 0.5);
    ctx.lineTo(-p.size * 0.87, p.size * 0.5);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.y -= p.speed;
      p.x += p.drift;
      p.angle += p.rot;
      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      drawTriangle(p);
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(tick);
})();
