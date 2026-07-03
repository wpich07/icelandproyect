document.addEventListener("DOMContentLoaded", function () {
    const days = document.querySelectorAll(".day-accordion");
    if (days.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: "-25% 0px -25% 0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active-scroll");
        }
        });
    }, observerOptions);

    days.forEach((day) => {
        observer.observe(day);
        const summary = day.querySelector(".day-summary");
        if (!summary) return;

        const toggle = () => {
            day.classList.toggle("active-scroll");
            const isExpanded = summary.getAttribute("aria-expanded") === "true";
            summary.setAttribute("aria-expanded", String(!isExpanded));
        };

        summary.addEventListener("click", toggle);

        // summary is a div with role="button", so keyboard activation
        // (Enter / Space) has to be wired up manually.
        summary.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
        }
        });
    });
    });
