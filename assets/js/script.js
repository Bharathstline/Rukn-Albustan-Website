document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navbarNav = document.getElementById('navbarNav');

  // Toggle Navbar Menu and Change Icon
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuToggle.classList.toggle('open');
    navbarNav.classList.toggle('show');
  });

  // Close Navbar When Clicking Outside
  document.addEventListener('click', (e) => {
    if (!navbarNav.contains(e.target) && !menuToggle.contains(e.target)) {
      navbarNav.classList.remove('show');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
