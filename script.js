document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Highlight active section in the navigation bar
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const navItem = document.querySelector(`nav ul li a[href="#${id}"]`);
            if (entry.isIntersecting) {
                navItem.classList.add("active");
            } else {
                navItem.classList.remove("active");
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Dynamic footer year update
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Naman Agarwal. All rights reserved.`;

    // Show a greeting alert on page load
    setTimeout(() => {
        alert("Welcome to Naman Agarwal's Portfolio! Explore and enjoy!");
    }, 1000);

    // Back to top button
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "↑ Back to Top";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "60px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.padding = "10px 15px";
    backToTopButton.style.backgroundColor = "#444";
    backToTopButton.style.color = "#fff";
    backToTopButton.style.border = "none";
    backToTopButton.style.borderRadius = "5px";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none";
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,  // Animation duration in milliseconds
        once: true,  // Ensure animations occur only once
        offset: 200,  // Distance to start the animation from the element
    });
});
