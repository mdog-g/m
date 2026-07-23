(function () {
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  window.addEventListener('load', () => {
    if (window.initConstellation) {
      window.initConstellation('hero-canvas', 'bolt', 900);
      window.initConstellation('science-canvas', 'burst', 700);
    }
  });
})();
