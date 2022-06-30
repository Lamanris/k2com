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



// Dropdowns
function toggleItemActive(e) {
    const parentItem = e.target.parentElement
    parentItem.classList.toggle('footer-menu__item--active')
}
function initFooterDropdown(x) {
    const footerMenuItem = document.querySelectorAll('.footer-menu__item')
    if (x.matches) {
        footerMenuItem.forEach(el => {
            const footerMenuItemTitle = el.querySelector('h5')
            footerMenuItemTitle.addEventListener('click', toggleItemActive)
        })
    } else {
        footerMenuItem.forEach(el => {
            const footerMenuItemTitle = el.querySelector('h5')
            footerMenuItemTitle.removeEventListener('click', toggleItemActive)
        })
    }
}
var smallDevice = window.matchMedia("(max-width: 660px)")
initFooterDropdown(smallDevice) // Call listener function at run time
smallDevice.addEventListener('change', initFooterDropdown) // Attach listener function on state changes