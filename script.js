document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((el) => {
      el.classList.remove('open');
      el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      el.querySelector('.faq-toggle').textContent = 'Read more';
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      item.querySelector('.faq-toggle').textContent = 'Close';
    }
  });
});

// Hours: highlight today + show open/closed status, in Sydney local time
const HOURS = {
  0: null,
  1: null,
  2: [9 * 60, 19 * 60 + 30],
  3: [9 * 60 + 30, 18 * 60 + 30],
  4: [9 * 60 + 30, 19 * 60 + 30],
  5: null,
  6: [10 * 60, 16 * 60 + 30],
};

function sydneyNow() {
  const parts = new Intl.DateTimeFormat('en-AU', {
    timeZone: 'Australia/Sydney',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).formatToParts(new Date());
  const map = {};
  parts.forEach((p) => (map[p.type] = p.value));
  const weekdayIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[map.weekday];
  const hour = parseInt(map.hour, 10) % 24;
  const minute = parseInt(map.minute, 10);
  return { day: weekdayIndex, minutes: hour * 60 + minute };
}

const now = sydneyNow();
const row = document.querySelector(`#hoursTable tr[data-day="${now.day}"]`);
if (row) row.classList.add('today');

const statusEl = document.getElementById('openStatus');
const todayHours = HOURS[now.day];
let isOpen = false;
if (todayHours) {
  isOpen = now.minutes >= todayHours[0] && now.minutes < todayHours[1];
}
if (statusEl) {
  statusEl.textContent = isOpen ? 'Open now' : 'Closed now';
  statusEl.classList.toggle('status-open', isOpen);
}
