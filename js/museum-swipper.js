var swiper = new Swiper(".mySwiper", {
    
    autoplay: {
        delay: 2500,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});