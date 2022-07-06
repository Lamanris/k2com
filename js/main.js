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
document.body.addEventListener('click', function (e) {
    if (!document.querySelector('.header-catalogue__sidebar-wrap').contains(e.target) && !document.querySelector('.header-catalogue__content').contains(e.target) && !headerCatalogueBtn.contains(e.target)) {
        document.body.classList.remove('catalogue')
    }
})
const headerCatalogueSidebarBtns = document.querySelectorAll('.header-catalogue__sidebar-wrap .header-catalogue__sidebar-btn')
const headerCatalogueContent = document.querySelector('.header-catalogue__content')
if (headerCatalogueSidebarBtns.length > 0) {
    let firstRender = false
    headerCatalogueSidebarBtns.forEach(el => {
        const catalogueSidebarItem = el.closest('.header-catalogue__sidebar-item')
        const catalogueCat = catalogueSidebarItem.querySelector('.header-catalogue__cat')
        if (catalogueSidebarItem) {
            function triggerCatalogueBtnDesktop () {
                headerCatalogueSidebarBtns.forEach(el => el.classList.remove('header-catalogue__sidebar-btn--active'))
                el.classList.add('header-catalogue__sidebar-btn--active')
                headerCatalogueContent.innerHTML = ''
                if (catalogueCat) {
                    const catalogueCatClone = catalogueCat.cloneNode(true)
                    headerCatalogueContent.appendChild(catalogueCatClone)
                }
            }
            function triggerCatalogueBtnMobile () {
                el.classList.toggle('header-catalogue__sidebar-btn--active')
                catalogueSidebarItem.classList.toggle('header-catalogue__sidebar-item--active')
            }
            function deviceChangeHandler(x) {
                if (x.matches) {
                    el.removeEventListener('click', triggerCatalogueBtnDesktop)
                    el.addEventListener('click', triggerCatalogueBtnMobile)
                } else {
                    el.removeEventListener('click', triggerCatalogueBtnMobile)
                    const catalogueCat = catalogueSidebarItem.querySelector('.header-catalogue__cat')
                    if (catalogueCat && !firstRender) {
                        firstRender = true
                        const catalogueCatClone = catalogueCat.cloneNode(true)
                        headerCatalogueContent.appendChild(catalogueCatClone)
                        el.classList.add('header-catalogue__sidebar-btn--active')
                    }
                    el.addEventListener('click', triggerCatalogueBtnDesktop)
                }
            }
            var smallDevice = window.matchMedia("(max-width: 660px)")
            deviceChangeHandler(smallDevice)
            smallDevice.addEventListener('change', deviceChangeHandler)
        }
    })
    function deviceChangeHandler(x) {
        if (x.matches) {
            const headerCatalogueItemTrigger = document.querySelectorAll('.header-catalogue__item p')
            if (headerCatalogueItemTrigger.length > 0) {
                headerCatalogueItemTrigger.forEach(el => {
                    const triggerWrapper = el.closest('.header-catalogue__item')
                    el.addEventListener('click', () => {
                        triggerWrapper.classList.toggle('header-catalogue__item--active')
                    })
                })
            }
        }
    }
    var smallDevice = window.matchMedia("(max-width: 660px)")
    deviceChangeHandler(smallDevice)
}


// Phone Mask
const inputsPhone = document.querySelectorAll("input[data-input-phone]");
inputsPhone.forEach(el => {
    el.addEventListener("input", (e) => {
        const value = el.value.replace(/\D+/g, "");
        const numberLength = 11;
        let result = '';
        for (let i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
                case 0:
                    result = `+7 (`
                    continue;
                case 4:
                    result += ") ";
                    break;
                case 7:
                    result += " ";
                    break;
                case 9:
                    result += " ";
                    break;
                default:
                    break;
            }
            result += value[i];
        }
        if (el.value.length === 1 && result) {
            el.value = result + el.value;
        } else {
            el.value = result;
        }
    });
})
// INN Mask
const inputsInn = document.querySelectorAll("input[data-input-inn]");
inputsInn.forEach(el => {
    el.addEventListener("input", (e) => {
        const value = el.value.replace(/\D+/g, "");
        const numberLength = 12;
        let result = '';
        for (let i = 0; i < value.length && i < numberLength; i++) {
            result += value[i];
        }
        el.value = result;
    });
})
// Modal Input Errors
const modalInputError = tippy('.modal-input', {
    trigger: 'manual',
    theme: 'default-dropdown-theme',
    content: '<span class="modal-input__error">Поле обязательно для заполнения</span>',
    allowHTML: true,
    placement: 'bottom-start',
    arrow: false,
    offset: [0, 8],
    hideOnClick: false,
});
// Modals
const modals = document.querySelectorAll("[data-modal]");
modals.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const modal = document.getElementById(trigger.dataset.modal);
        if (trigger.dataset.modal === 'modalLizing') {
            const bigCard = trigger.closest('.big-card')
            if (bigCard) {
                const bigCardTitle = bigCard.querySelector('h3')
                const modalLizingInputMachine = modal.querySelector('input[name="modal-lizing-machine"]')
                modalLizingInputMachine.value = bigCardTitle.innerText
            }
        }
        modal.classList.add("open");
        document.body.style.overflow = 'hidden'
        const exits = modal.querySelectorAll(".modal-exit");
        exits.forEach(function (exit) {
            exit.addEventListener("click", function (event) {
                event.preventDefault();
                modal.classList.remove("open");
                document.body.style.overflow = 'auto'
                const modalForm = modal.querySelector('form')
                if (modalForm) {
                    modalForm.reset()
                    const inputWrappers = modalForm.querySelectorAll('.modal-input')
                    if (inputWrappers.length > 0) {
                        inputWrappers.forEach(el => {
                            el.classList.remove('modal-input--error')
                            el.classList.remove('modal-input--error-format')
                        })
                    }
                    modalInputError.forEach(el => {
                        el.hide()
                    })
                    modal.classList.remove('modal--success')
                }
            });
        });
    });
});
// Modal Forms Validation & Submit Handling
function formValidation(form) {
    const inputs = form.querySelectorAll('input')
    let validationArray = []
    if (inputs.length > 0) {
        inputs.forEach((el, ind) => {
            console.log(el.value)
            const inputWrapper = el.closest('.modal-input')
            if (el.getAttribute('data-input-required')) {
                if (el.getAttribute('type') === 'checkbox') {
                    if (!el.checked) {
                        inputWrapper.classList.add('modal-input--error')
                        validationArray[ind] = false

                    } else {
                        inputWrapper.classList.remove('modal-input--error')
                        validationArray[ind] = true
                    }
                } else {
                    if (!el.value) {
                        inputWrapper.classList.add('modal-input--error')
                        validationArray[ind] = false
                    } else {
                        function showFormatError(status) {
                            if (status) {
                                inputWrapper.classList.remove('modal-input--error')
                                inputWrapper.classList.add('modal-input--error-format')
                                validationArray[ind] = false
                            } else {
                                inputWrapper.classList.remove('modal-input--error')
                                inputWrapper.classList.remove('modal-input--error-format')
                                validationArray[ind] = true
                            }
                        }
                        if (el.getAttribute('data-input-inn')) {
                            showFormatError(el.value.length < 10)
                        } else if (el.getAttribute('data-input-phone')) {
                            showFormatError(el.value.length !== 18)
                        } else if (el.getAttribute('data-input-email')) {
                            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                            showFormatError(!el.value.match(emailRegex))
                        } else {
                            showFormatError(false)
                        }
                    }
                }
                modalInputError.forEach(el => {
                    if (el.reference.classList.contains('modal-input--error')) {
                        el.setContent('<span class="modal-input__error">Поле обязательно для заполнения</span>')
                        el.show()
                    } else if (el.reference.classList.contains('modal-input--error-format')) {
                        el.setContent('<span class="modal-input__error">Неверное значение</span>')
                        el.show()
                    } else {
                        el.hide()
                    }
                })
            }
        })
    }
    return validationArray.every(el => el === true)
}
const modalForms = document.querySelectorAll('.modal form')
if (modalForms.length > 0) {
    modalForms.forEach(el => {
        el.addEventListener('submit', function (e) {
            e.preventDefault()
            if (formValidation(e.target)) {
                const modalWrap = e.target.closest('.modal')
                modalWrap.classList.add('modal--loader')
                setTimeout(() => {
                    modalWrap.classList.remove('modal--loader')
                    modalWrap.classList.add('modal--success')
                    setTimeout(() => {
                        if (modalWrap.classList.contains('modal--success')) {
                            modalWrap.classList.remove('modal--success')
                            modalWrap.classList.remove('open')
                            e.target.reset()
                            document.body.style.overflow = 'auto'
                        }
                    }, 5000)
                }, 1000)
            }
        })
    })
}


// Banner Form Validation & Submit Handling
const bannerForm = document.querySelectorAll('.form-banner__form')
if (bannerForm.length > 0) {
    bannerForm.forEach(el => {
        el.addEventListener('submit', function (e) {
            e.preventDefault()
            function bannerFormValidation() {
                const inputs = el.querySelectorAll('input')
                let validationArray = []
                if (inputs.length > 0) {
                    inputs.forEach((el, ind) => {
                        const inputWrapper = el.closest('.form-banner__form-input')
                        if (!el.value) {
                            inputWrapper.classList.remove('form-banner__form-input--error-phone')
                            inputWrapper.classList.add('form-banner__form-input--error')
                            validationArray[ind] = false
                        } else {
                            inputWrapper.classList.remove('form-banner__form-input--error')
                            if (el.getAttribute('data-input-phone')) {
                                if (el.value.length !== 18) {
                                    inputWrapper.classList.add('form-banner__form-input--error-phone')
                                    validationArray[ind] = false
                                } else {
                                    inputWrapper.classList.remove('form-banner__form-input--error-phone')
                                    validationArray[ind] = true
                                }
                            } else {
                                validationArray[ind] = true
                            }
                        }
                    })
                }
                return validationArray.every(el => el === true)
            }
            if(bannerFormValidation()) {
                const formBanner = el.closest('.form-banner')
                formBanner.classList.add('form-banner--loader')
                setTimeout(() => {
                    formBanner.classList.remove('form-banner--loader')
                    formBanner.classList.add('form-banner--success')
                    setTimeout(() => {
                        formBanner.classList.remove('form-banner--success')
                        el.reset()
                    }, 20000)
                }, 1000)
            }
        })
    })
}

// Custom Select
const customSelect = tippy('.custom-select__wrap', {
    interactive: true,
    trigger: 'click',
    theme: 'default-dropdown-theme',
    arrow: false,
    content(reference) {
        return reference.querySelector('.custom-select-options');
    },
    allowHTML: true,
    onShow(instance) {
        instance.reference.classList.add('custom-select__wrap--active')
    },
    onHide(instance) {
        instance.reference.classList.remove('custom-select__wrap--active')
    },
    onMount(instance) {
        const tippyBox = instance.popper.firstChild
        const selectOptions = tippyBox.querySelector('.custom-select-options')
        if (selectOptions) {
            const selectOptionsItem = selectOptions.querySelectorAll('.custom-select-options__item')
            if (selectOptionsItem.length > 0) {
                selectOptionsItem.forEach(option => {
                    option.addEventListener('click', () => {
                        selectOptionsItem.forEach(el => el.classList.remove('custom-select-options__item--active'))
                        option.classList.add('custom-select-options__item--active')
                        const modalSelectInput = instance.reference.querySelector('input')
                        modalSelectInput.value = option.getAttribute('data-select')
                        instance.hide()
                    })
                })
            }
        }
    },
    placement: 'bottom-start',
    offset: [0, 0],
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
    onCreate(inst) {
        tippy('.map-wrap__item', {
            interactive: true,
            trigger: 'click',
            theme: 'default-dropdown-theme',
            arrow: false,
            content(reference) {
                return reference.querySelector('.map-wrap__item-card');
            },
            allowHTML: true,
            onShow(instance) {
                instance.reference.classList.add('map-wrap__item--active')
            },
            onHide(instance) {
                instance.reference.classList.remove('map-wrap__item--active')
            },
            onCreate(instance) {
                const title = instance.popper.querySelector('h6')
                const titleClone = title.cloneNode(true)
                titleClone.addEventListener('click', () => {
                    instance.show()
                    inst.hide()
                })
                inst.popper.querySelector('.map-dropdown__list').appendChild(titleClone)
            },
            placement: 'right',
            appendTo: () => document.body,
            zIndex: 9
        });
    },
    placement: 'bottom-start',
    offset: [0, 0],
    appendTo: () => document.body,
    zIndex: 9
});

