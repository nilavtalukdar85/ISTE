// Navbar starts
document.getElementById('hamburger').addEventListener('click', function() {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
let logoImg = document.querySelector('.logo-img');
logoImg.addEventListener('click', () => {
    location.reload();
});
// Navbar ends