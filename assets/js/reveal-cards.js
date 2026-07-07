document.addEventListener('DOMContentLoaded', function () {
    const dayCards = document.querySelectorAll('.day-card, .journal-day, .itinerary-8day-block');

    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.15 });

    dayCards.forEach(function (card) {
      revealObserver.observe(card);
    });
  });