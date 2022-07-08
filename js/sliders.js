const swiper = new Swiper('.slider-banner__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.slider-banner .swiper-pagination',
        clickable: true
    },
});

var productSwiperThumbnails = new Swiper(".product__slider-thumbnails .swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var productSwiper = new Swiper(".product__slider-main .swiper", {
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    thumbs: {
        swiper: productSwiperThumbnails,
    },
});