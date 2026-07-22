// Announcement bar dismiss
const announcement = document.getElementById('announcement');
const announcementClose = document.getElementById('announcementClose');
if (announcementClose) {
  announcementClose.addEventListener('click', () => {
    announcement.classList.add('is-hidden');
  });
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav__menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'flex';
    navMenu.style.display = isOpen ? 'none' : 'flex';
    navMenu.style.flexDirection = 'column';
    navMenu.style.gap = '16px';
  });
}

// Contact form submission (Formspree)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const action = contactForm.getAttribute('action') || '';

    if (action.includes('YOUR_FORM_ID')) {
      formStatus.textContent = 'Online form isn’t connected yet — please call or text 0434 030 559 to book.';
      formStatus.classList.add('is-visible');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formStatus.textContent = 'Message sent — we’ll be in touch shortly.';
        formStatus.classList.add('is-visible');
        contactForm.reset();
      } else {
        formStatus.textContent = 'Something went wrong — please call or text 0434 030 559 instead.';
        formStatus.classList.add('is-visible');
      }
    } catch (err) {
      formStatus.textContent = 'Something went wrong — please call or text 0434 030 559 instead.';
      formStatus.classList.add('is-visible');
    } finally {
      submitBtn.disabled = false;
    }
  });
}
