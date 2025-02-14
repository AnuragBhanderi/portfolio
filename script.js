document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault()
    alert("Thank You for your Response.")
})

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if dark mode was enabled before
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        // Save user preference in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});