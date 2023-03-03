const swiper = new Swiper('.swiper-tech', {
    /*navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },*/
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
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
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        768: {
            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        1024: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
    }
});