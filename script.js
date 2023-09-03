document.addEventListener('DOMContentLoaded', function ()
 {
// Add event listeners to the links
document.querySelector('a[href="#about"]').addEventListener('click', scrollToSection);
document.querySelector('a[href="#pageProfessionalGame"]').addEventListener('click', scrollToSection);
document.querySelector('a[href="#pageGame"]').addEventListener('click', scrollToSection);
document.querySelector('a[href="#pageWeb"]').addEventListener('click', scrollToSection);
document.querySelector('a[href="#pageHistory"]').addEventListener('click', scrollToSection);
document.querySelector('a[href="#pageContact"]').addEventListener('click', scrollToSection);

// Function to scroll to the section
function scrollToSection(event) {
    event.preventDefault(); // Prevent the default link behavior
    const targetId = event.target.getAttribute('href').substring(1); // Get the target section id
    const targetSection = document.getElementById(targetId); // Get the target section element

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth', // Scroll smoothly to the section
            block: 'start'
        });
    }
}
});