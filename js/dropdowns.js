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
    offset: [-20, 10]
});

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
});