document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuItems = document.querySelector('.burger-menu-items');

    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('active'); // Toggle class on burgerMenu
        menuItems.classList.toggle('active'); // Toggle class on menuItems
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!burgerMenu.contains(event.target) && !menuItems.contains(event.target)) {
            burgerMenu.classList.remove('active');
            menuItems.classList.remove('active');
        }
    });
});