window.addEventListener("load", function () {
  setTimeout(function () {
    const swiperElement = document.querySelector(
      ".elementor-image-carousel-wrapper"
    );
    if (swiperElement && typeof Swiper !== "undefined") {
      const swiper = new Swiper(swiperElement, {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".elementor-swiper-button-next",
          prevEl: ".elementor-swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        },
        on: {
          init: function () {
            console.log("Swiper initialized");
          },
          slideChange: function () {
            console.log("Slide changed");
          },
        },
      });
    } else {
      console.log("Swiper element not found or Swiper not loaded");
    }
  }, 1000);
});
