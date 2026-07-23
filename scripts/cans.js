(function () {
  function wrapLabel(label, maxChars) {
    const words = label.split(' ');
    const lines = [];
    let current = '';
    words.forEach((word) => {
      const test = current ? `${current} ${word}` : word;
      if (test.length > maxChars && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    });
    if (current) lines.push(current);
    return lines;
  }

  function canSVG(id, { accent, accent2, label, big }) {
    const w = big ? 220 : 150;
    const h = big ? 440 : 300;
    const bandY = h * 0.4;
    const bandH = h * 0.24;
    const bandCenterY = bandY + bandH / 2;
    const fontSize = big ? w * 0.05 : w * 0.07;
    const lineHeight = fontSize * 1.15;
    const lines = wrapLabel(label.toUpperCase(), big ? 18 : 11);
    const startY = bandCenterY - ((lines.length - 1) * lineHeight) / 2 + fontSize * 0.35;
    const labelTspans = lines
      .map((line, i) => `<tspan x="${w * 0.5}" y="${startY + i * lineHeight}">${line}</tspan>`)
      .join('');

    return `
    <svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" role="img" aria-label="${label} can">
      <defs>
        <linearGradient id="body-${id}" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#040404"/>
          <stop offset="42%" stop-color="#1c1c1c"/>
          <stop offset="55%" stop-color="#131313"/>
          <stop offset="100%" stop-color="#020202"/>
        </linearGradient>
        <linearGradient id="band-${id}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${accent}"/>
          <stop offset="100%" stop-color="${accent2}"/>
        </linearGradient>
        <linearGradient id="rim-${id}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eaeaea"/>
          <stop offset="100%" stop-color="#7d7d7d"/>
        </linearGradient>
        <clipPath id="clip-${id}">
          <rect x="${w * 0.125}" y="${h * 0.075}" width="${w * 0.75}" height="${h * 0.83}" rx="${w * 0.11}"/>
        </clipPath>
      </defs>
      <ellipse cx="${w * 0.5}" cy="${h * 0.075}" rx="${w * 0.375}" ry="${h * 0.024}" fill="url(#rim-${id})"/>
      <rect x="${w * 0.125}" y="${h * 0.075}" width="${w * 0.75}" height="${h * 0.83}" rx="${w * 0.11}" fill="url(#body-${id})" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <ellipse cx="${w * 0.5}" cy="${h * 0.075}" rx="${w * 0.3}" ry="${h * 0.017}" fill="#0a0a0a"/>
      <g clip-path="url(#clip-${id})">
        <rect x="${w * 0.125}" y="${bandY}" width="${w * 0.75}" height="${bandH}" fill="url(#band-${id})"/>
        <polygon points="${w * 0.5},${h * 0.18} ${w * 0.56},${h * 0.225} ${w * 0.44},${h * 0.225}" fill="${accent}"/>
        <text text-anchor="middle" font-size="16" font-weight="700" letter-spacing="1" fill="#fff" font-family="-apple-system,Segoe UI,Roboto,sans-serif">
          <tspan x="${w * 0.5}" y="${h * 0.29}" font-size="${w * 0.09}">NOVA</tspan>
        </text>
        <text text-anchor="middle" font-weight="700" letter-spacing="0.3" fill="#000" opacity="0.82" font-family="-apple-system,Segoe UI,Roboto,sans-serif" font-size="${fontSize}">
          ${labelTspans}
        </text>
        <rect x="${w * 0.19}" y="${h * 0.09}" width="${w * 0.09}" height="${h * 0.78}" rx="${w * 0.045}" fill="#fff" opacity="0.05"/>
      </g>
      <rect x="${w * 0.125}" y="${h * 0.885}" width="${w * 0.75}" height="${h * 0.03}" rx="${h * 0.015}" fill="url(#rim-${id})" opacity="0.45"/>
    </svg>`;
  }

  function init() {
    document.querySelectorAll('[data-can]').forEach((el) => {
      const id = el.getAttribute('data-can');
      const accent = el.getAttribute('data-accent');
      const accent2 = el.getAttribute('data-accent2') || accent;
      const label = el.getAttribute('data-label') || '';
      const big = el.hasAttribute('data-big');
      el.innerHTML = canSVG(id, { accent, accent2, label, big });
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
