//Siia lisada eestikeelne selgitus, kuidas töötab

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add or remove the "is-visible" class based on element visibility
function toggleVisibility() {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('is-visible');
        } else {
            section.classList.remove('is-visible');
        }
    });
}

// Get all sections
const sections = document.querySelectorAll('.fade-in');

// Set up the IntersectionObserver to call the toggleVisibility function
const observer = new IntersectionObserver(toggleVisibility);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});