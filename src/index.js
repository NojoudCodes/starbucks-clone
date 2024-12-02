const openMenuToggle = document.getElementById('menu-toggle-open');
const closeMenuToggle = document.getElementById('menu-toggle-close');

const mobileMenu = document.getElementById('mobile-menu');
const openMenu = document.getElementById('menu-toggle-open');
const closeMenu = document.getElementById('menu-toggle-close');

openMenuToggle.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenuToggle.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
});
