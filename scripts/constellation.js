(function () {
  const palette = ['#8052ff', '#ffb829', '#15846e', '#c084fc', '#5b8def', '#ffffff'];

  function samplePathPoints(drawPath, size, count) {
    const off = document.createElement('canvas');
    off.width = size;
    off.height = size;
    const octx = off.getContext('2d');
    octx.fillStyle = '#fff';
    drawPath(octx, size);
    const data = octx.getImageData(0, 0, size, size).data;
    const candidates = [];
    for (let y = 0; y < size; y += 2) {
      for (let x = 0; x < size; x += 2) {
        const alpha = data[(y * size + x) * 4 + 3];
        if (alpha > 80) candidates.push({ x: x / size, y: y / size });
      }
    }
    const picked = [];
    for (let i = 0; i < count && candidates.length; i++) {
      const idx = Math.floor(Math.random() * candidates.length);
      picked.push(candidates[idx]);
    }
    return picked;
  }

  function boltPath(ctx, size) {
    ctx.beginPath();
    ctx.moveTo(size * 0.55, 0);
    ctx.lineTo(size * 0.18, size * 0.58);
    ctx.lineTo(size * 0.42, size * 0.58);
    ctx.lineTo(size * 0.32, size);
    ctx.lineTo(size * 0.82, size * 0.4);
    ctx.lineTo(size * 0.55, size * 0.4);
    ctx.lineTo(size * 0.68, 0);
    ctx.closePath();
    ctx.fill();
  }

  function burstPath(ctx, size) {
    const cx = size / 2, cy = size / 2;
    const spikes = 8;
    const outer = size * 0.48;
    const inner = size * 0.18;
    ctx.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? outer : inner;
      const a = (Math.PI / spikes) * i - Math.PI / 2;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  }

  const SHAPES = { bolt: boltPath, burst: burstPath };

  function initConstellation(canvasId, shapeName, particleCount) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let size;

    function build() {
      const rect = canvas.parentElement.getBoundingClientRect();
      size = Math.max(200, Math.min(rect.width, 640));
      canvas.width = size * devicePixelRatio;
      canvas.height = size * devicePixelRatio;
      canvas.style.width = size + 'px';
      canvas.style.height = size + 'px';
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      const targets = samplePathPoints(SHAPES[shapeName], 240, particleCount);
      particles = targets.map((t) => ({
        tx: t.x * size,
        ty: t.y * size,
        x: Math.random() * size,
        y: Math.random() * size,
        size: 2 + Math.random() * 3.5,
        angle: Math.random() * Math.PI * 2,
        rot: (Math.random() - 0.5) * 0.02,
        color: palette[Math.floor(Math.random() * palette.length)],
        settled: false,
      }));
    }

    let particles = [];
    build();
    window.addEventListener('resize', () => {
      clearTimeout(canvas._rt);
      canvas._rt = setTimeout(build, 200);
    });

    function drawTriangle(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.strokeStyle = p.color;
      ctx.globalAlpha = 0.85;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size * 0.87, p.size * 0.5);
      ctx.lineTo(-p.size * 0.87, p.size * 0.5);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    function tick() {
      ctx.clearRect(0, 0, size, size);
      for (const p of particles) {
        p.x += (p.tx - p.x) * 0.04;
        p.y += (p.ty - p.y) * 0.04;
        p.angle += p.rot;
        drawTriangle(p);
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  window.initConstellation = initConstellation;
})();
