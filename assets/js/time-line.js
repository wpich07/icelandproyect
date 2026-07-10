document.addEventListener('DOMContentLoaded', () => {
        const items = document.querySelectorAll('.timeline-item');
        const container = document.getElementById('timeline-container');
        const progressBar = document.getElementById('timeline-progress');

        // Анимация появления карточек
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.3 });

        items.forEach(item => observer.observe(item));

        // Анимация центральной линии скролла
        window.addEventListener('scroll', () => {
            const containerRect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            if (containerRect.top < viewportHeight && containerRect.bottom > 0) {
                let scrolled = (viewportHeight / 2 - containerRect.top) / containerRect.height * 100;
                scrolled = Math.max(0, Math.min(100, scrolled));
                progressBar.style.height = scrolled + '%';
            }
        });
    });