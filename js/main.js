// Header Burger
const headerBurger = document.querySelector('.header-burger')
const headerBurgerLink = document.querySelectorAll('.header__wrapper-burger a')

if (headerBurger) {
    headerBurger.addEventListener('click', () => {
        document.body.classList.toggle('burger')
    });
    headerBurgerLink.forEach((el) => {
        el.addEventListener('click', () => {
            document.body.classList.toggle('burger')
        })
    });
}