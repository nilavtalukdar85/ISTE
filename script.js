document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
let logoImg = document.querySelector('.logo-img');
logoImg.addEventListener('click', () => {
    location.reload();
});