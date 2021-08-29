const menu = document.querySelector('#mobile-menu')
const menuinks = document.querySelector('.navbar-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuinks.classList.toggle('active');
})