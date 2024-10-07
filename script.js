document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const navbar = document.getElementById('navbarNav');
    if (navbar.classList.contains('show')) {
        console.log('Navbar is now hidden');
    } else {
        console.log('Navbar is now shown');
    }
});