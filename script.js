// script.js

// Wait until DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // Contact Form Submission
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation (could be expanded)
    if (!name || !email || !message) {
      feedback.textContent = 'Please fill in all fields.';
      feedback.className = 'text-danger';
      return;
    }

    // Simulate sending (in production use fetch() to send to server)
    feedback.textContent = 'Sending...';
    feedback.className = 'text-muted';

    setTimeout(() => {
      feedback.textContent = 'Message sent successfully!';
      feedback.className = 'text-success';
      form.reset();
    }, 1000);
  });

  // Navbar background toggle on scroll
  // const navbar = document.querySelector('.navbar');
  // const navbarBnd = document.querySelector('.navbar-brand');
  // const navbarJs = document.querySelector('.nav-link');

  // window.addEventListener('scroll', () => {
  //   if (window.scrollY > 200) {
  //     navbar.classList.add('nav-change');
  //     navbarBnd.classList.add('navbar-bnd');
  //     navbarJs.classList.add('navbar-js');
  //   } else {
  //     navbar.classList.remove('nav-change');
  //     navbarBnd.classList.remove('navbar-bnd');
  //     navbarJs.classList.remove('navbar-js');
  //   }
  // });

const navbar = document.querySelector('.navbar');
const navbarBrand = document.querySelector('.navbar-brand');
const navLinks = document.querySelectorAll('.nav-link'); // FIXED

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navbar.classList.add('nav-change');
    navbarBrand.classList.add('navbar-bnd');
    navLinks.forEach(link => link.classList.add('navbar-js')); // FIXED
  } else {
    navbar.classList.remove('nav-change');
    navbarBrand.classList.remove('navbar-bnd');
    navLinks.forEach(link => link.classList.remove('navbar-js')); // FIXED
  }
});

});
