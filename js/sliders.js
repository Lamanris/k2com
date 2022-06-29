const swiper = new Swiper('.slider-banner__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.slider-banner .swiper-pagination',
        clickable: true
    },
});