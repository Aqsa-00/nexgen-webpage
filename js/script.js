document.addEventListener('DOMContentLoaded', () => {
    // Setup the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'show' class to start the animation
                entry.target.classList.add('show');
                // Stop observing the element once it has been revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible in the viewport
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before the element fully enters from the bottom
    });

    // Select all elements with the animation class
    const animatedElements = document.querySelectorAll('.animate-from-left');

    // Attach the observer to each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if(hamburger && navLinks) {
    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");

});
}

// Close menu when a link is clicked
document.querySelectorAll(".nav-links li a").forEach( link =>{
    link.addEventListener("click", () =>{
        if(hamburger.classList.contains("active")) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        }
    });
});

// SROLL EFFECTS HEADER
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    }
    else{
        header.style.boxShadow = "var(--shadow-sm)";
    }
});
});