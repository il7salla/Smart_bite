// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple checks for empty fields
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields before submitting.');
    } else {
        alert('Thank you for your message!');
    }
});
