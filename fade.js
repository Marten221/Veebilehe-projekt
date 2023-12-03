document.addEventListener("DOMContentLoaded", function() {
    const fadeContainer = document.getElementById('fadeContainer');

    setTimeout(function() {
        fadeContainer.classList.add('fade-in');
    }, 250);
});