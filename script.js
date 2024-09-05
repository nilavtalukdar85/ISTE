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
let typed = new Typed('.auto-type', {
    strings: ['Education'],
    typeSpeed: 80,
    startDelay: 0,
    backSpeed: 10,
    loop: true,
});