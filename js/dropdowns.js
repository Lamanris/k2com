// Dropdowns

// Footer Accordion
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


// Header Accordion
const headerMenuItem = document.querySelectorAll('.header-burger__wrap .header-menu__link-collapse')
if (headerMenuItem.length > 0) {
    headerMenuItem.forEach(el => {
        const headerMenuItemTitle = el.querySelector('p')
        headerMenuItemTitle.addEventListener('click', () => {
            el.classList.toggle('header-menu__link-collapse--active')
        })
    })
}

// Header Dropdown
tippy('.header-menu__link-dropdown', {
    interactive: true,
    trigger: 'click',
    theme: 'default-dropdown-theme',
    arrow: false,
    content(reference) {
        return reference.querySelector('.header-menu__link-dropdown__list');
    },
    allowHTML: true,
    onShow(instance) {
        instance.reference.classList.add('header-menu__link-dropdown--active')
    },
    onHide(instance) {
        instance.reference.classList.remove('header-menu__link-dropdown--active')
    },
    placement: 'bottom-start',
    offset: [-20, 10],
    appendTo: () => document.body
});

// Region Dropdown
tippy('.header-region__trigger', {
    interactive: true,
    trigger: 'click',
    theme: 'default-dropdown-theme',
    arrow: false,
    content(reference) {
        return reference.querySelector('.header-region__list');
    },
    allowHTML: true,
    onShow(instance) {
        instance.reference.parentElement.classList.add('header-region--active')
    },
    onHide(instance) {
        instance.reference.parentElement.classList.remove('header-region--active')
    },
    placement: 'bottom-start',
    appendTo: () => document.body
});

// Map Dropdown
tippy('.map-dropdown', {
    interactive: true,
    trigger: 'click',
    theme: 'default-dropdown-theme',
    arrow: false,
    content(reference) {
        return reference.querySelector('.map-dropdown__list');
    },
    allowHTML: true,
    onShow(instance) {
        instance.reference.classList.add('map-dropdown--active')
    },
    onHide(instance) {
        instance.reference.classList.remove('map-dropdown--active')
    },
    placement: 'bottom-start',
    offset: [0, 0],
    appendTo: () => document.body
});