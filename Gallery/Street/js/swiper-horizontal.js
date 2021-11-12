const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});