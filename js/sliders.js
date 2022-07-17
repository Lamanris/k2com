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

const breakpoint = window.matchMedia( '(min-width:661px)' );
let specialOffersSwiper;
const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {
        // clean up old instances and inline styles when available
        if ( specialOffersSwiper !== undefined ) specialOffersSwiper.destroy( true, true );
        // or/and do nothing
        return;
        // else if a small viewport and single column layout needed
    } else if ( breakpoint.matches === false ) {
        // fire small viewport version of swiper
        return enableSwiper();
    }
};
const enableSwiper = function() {
    specialOffersSwiper = new Swiper ('.section-spacing__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
    });
};
// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();
