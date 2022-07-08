const swiper = new Swiper('.slider-banner__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.slider-banner .swiper-pagination',
        clickable: true
    },
});

const productSwiperThumbnails = new Swiper(".product__slider-thumbnails .swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
const productSwiperWithThumbs = new Swiper(".product__slider-with-thumbs .swiper", {
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    thumbs: {
        swiper: productSwiperThumbnails,
    },
});

const productSwiperOneSlider = new Swiper(".product__slider-one-slider .swiper", {
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    navigation: {
        nextEl: ".product__slider-one-slider .swiper-button-next",
        prevEl: ".product__slider-one-slider .swiper-button-prev",
    },
});