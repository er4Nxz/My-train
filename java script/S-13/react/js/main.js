import fetchMenu from "./Component/menu/menu.js";
import fetchSlider from "./Component/slider/slider.js"
//جاوا اسکریپت خوده اسلایدر
let jsSlider = () => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
//تمیز نوشتن
let init = async () => {
  await fetchMenu();
  await fetchSlider();
  jsSlider();
};
init();
