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
      navList.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (navList.classList.contains('open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });

    // Close mobile menu on link click
    navList.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
        menuToggle.querySelector('i').className = 'fas fa-bars';
      });
    });
  }

  /* ========== FAQ ACCORDION ========== */
  document.querySelectorAll('.faq-question').forEach(function (button) {
    button.addEventListener('click', function () {
      const item = button.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('active');
      });

      // Open clicked if it was closed
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

});
