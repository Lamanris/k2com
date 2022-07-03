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


// Modals
const modals = document.querySelectorAll("[data-modal]");
modals.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const modal = document.getElementById(trigger.dataset.modal);
        modal.classList.add("open");
        const exits = modal.querySelectorAll(".modal-exit");
        exits.forEach(function (exit) {
            exit.addEventListener("click", function (event) {
                event.preventDefault();
                modal.classList.remove("open");
            });
        });
    });
});

// Modals Select
tippy('.modal-select__wrap', {
    interactive: true,
    trigger: 'click',
    theme: 'default-dropdown-theme',
    arrow: false,
    content(reference) {
        return reference.querySelector('.modal-select-options');
    },
    allowHTML: true,
    onShow(instance) {
        instance.reference.classList.add('modal-select__wrap--active')
    },
    onHide(instance) {
        instance.reference.classList.remove('modal-select__wrap--active')
    },
    onMount(instance) {
        const allModalSelectOptions = document.querySelectorAll('.modal-select-options')
        if (allModalSelectOptions.length > 0) {
            allModalSelectOptions.forEach(el => {
                const selectOptions = el.querySelectorAll('.modal-select-options__item')
                if (selectOptions.length > 0) {
                    selectOptions.forEach(option => {
                        option.addEventListener('click', () => {
                            selectOptions.forEach(el => el.classList.remove('modal-select-options__item--active'))
                            option.classList.add('modal-select-options__item--active')
                            const modalSelect = option.closest('.modal-select')
                            const modalSelectInput = modalSelect.querySelector('input')
                            const modalSelectPreview = modalSelect.querySelector('.modal-select-preview p')
                            modalSelectPreview.innerText = option.innerText;
                            modalSelectInput.value = option.getAttribute('data-select')
                            instance.hide()
                        })
                    })
                }
            })
        }
    },
    placement: 'bottom-start',
    offset: [0, 0]
});


// Modal Lizing
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
function formValidation(form) {
    const inputs = form.querySelectorAll('input')

    if (inputs.length > 0) {
        inputs.forEach(el => {
            const inputWrapper = el.closest('.modal-input')
            if (el.getAttribute('data-input-required')) {
                if (!el.value) {
                    inputWrapper.classList.add('modal-input--error')
                    modalInputError.forEach(el => {
                        if (el.reference.classList.contains('modal-input--error')) {
                            el.show()
                        }
                    })
                } else {
                    modalInputError.forEach(error => {
                        inputWrapper.classList.remove('modal-input--error')
                        if (!error.reference.classList.contains('modal-input--error')) {
                            if (el.getAttribute('data-input-inn')) {
                                if (el.value.length < 10) {
                                    inputWrapper.classList.add('modal-input--error')
                                    error.setContent('<span class="modal-input__error">Неверное значение</span>')
                                } else {
                                    error.setContent('<span class="modal-input__error">Поле обязательно для заполнения</span>')
                                }
                            } else if (el.getAttribute('data-input-phone')) {

                            } else if (el.getAttribute('data-input-email')) {

                            } else {
                                error.hide()
                                error.setContent('<span class="modal-input__error">Поле обязательно для заполнения</span>')
                            }
                        } else {

                        }
                    })
                }
            }
        })
    }
}
const modalLizingForm = document.querySelector('.modal-lizing form')
modalLizingForm.addEventListener('submit', function (e) {
    e.preventDefault()
    if (formValidation(e.target)) {
        console.log(123)
    }
})




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




