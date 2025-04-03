document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            button.classList.add("active");

            const category = button.textContent.toLowerCase().replace(" ", "-");

            portfolioItems.forEach(item => {
                if (category === "all" || item.dataset.category === category) {
                    item.classList.remove("hidden");
                    // Force reflow to trigger CSS transition
                    void item.offsetWidth;
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });
});