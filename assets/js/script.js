const swiper = new Swiper('.swiper', {
    /*navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },*/
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        640: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerColumn: 1,
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerColumn: 1,
        },
        1024: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
    }
  });