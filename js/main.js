// Header Burger
const headerBurger = document.querySelector('.header-burger')
const headerBurgerLink = document.querySelectorAll('.header-burger__wrap .header-menu a')

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


// Header Catalogue

const headerCatalogueBtn = document.querySelector('.header__btn-catalogue')
if (headerCatalogueBtn) {
    headerCatalogueBtn.addEventListener('click', () => {
        document.body.classList.toggle('catalogue')
    });
}