var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    loop:Infinity,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });