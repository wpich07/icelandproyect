/* ============================================================
   ICELAND PRIVATE TOURS - Global JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ========== HEADER SCROLL EFFECT ========== */
  const header = document.getElementById('header');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  /* ========== MOBILE MENU TOGGLE ========== */
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function () {
      const isOpen = navList.classList.toggle('open');
      const icon = menuToggle.querySelector('i');

      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close mobile menu on link click
    navList.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  /* ========== FAQ ACCORDION ========== */
  document.querySelectorAll('.faq-question').forEach(function (button) {
    button.addEventListener('click', function () {
      const item = button.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all (and sync aria-expanded on every question)
      document.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('active');
        const q = el.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });

      // Open clicked if it was closed
      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

});
