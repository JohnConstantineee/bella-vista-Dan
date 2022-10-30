const burgerButton = document.querySelector('.header__burger-button');
const burgerMenu = document.querySelector('.header__burger-menu');
burgerButton.addEventListener('click', e => {
    burgerMenu.classList.toggle('header__burger-menu--active')
    burgerButton.classList.toggle('active-burger')
})

console.log('')