const navToggle = document.getElementById('navToggle');
const drawer = document.getElementById('mobileDrawer');
const drawerClose = document.getElementById('drawerClose');

function openDrawer() {
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}

navToggle?.addEventListener('click', openDrawer);
drawerClose?.addEventListener('click', closeDrawer);

drawer?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeDrawer);
});
