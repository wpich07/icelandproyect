document.addEventListener("DOMContentLoaded", () => {
        const dashboard = document.getElementById('live-dashboard');
        const compassNeedle = document.getElementById('dash-compass');
        const altFill = document.getElementById('dash-alt-fill');
        const txtStage = document.getElementById('dash-stage');
        const txtTemp = document.getElementById('dash-temp');
        const txtElev = document.getElementById('dash-elev');
        
        const days = document.querySelectorAll('.scroll-day');
        const itineraryZone = document.getElementById('itinerary-zone');

        const zoneObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    dashboard.classList.add('visible');
                } else {
                    dashboard.classList.remove('visible');
                }
            });
        }, { threshold: 0.05 });
        
        if(itineraryZone) zoneObserver.observe(itineraryZone);

        const dayObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    
                    const heading = el.getAttribute('data-heading');
                    compassNeedle.style.transform = `rotate(${heading}deg)`;
                    
                    const elevPerc = el.getAttribute('data-elev-perc');
                    altFill.style.height = `${elevPerc}%`;

                    txtStage.textContent = el.getAttribute('data-stage');
                    txtTemp.textContent = el.getAttribute('data-temp');
                    txtElev.textContent = el.getAttribute('data-elev-txt');
                }
            });
        }, { threshold: 0.4 });

        days.forEach(day => dayObserver.observe(day));
    });