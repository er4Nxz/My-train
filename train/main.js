let fetchStory = async () => {
  let linkApi = await fetch("http://localhost:3000/story");
  let response = await linkApi.json();
  let story = response.map((item) => {
    return `<div class="swiper-slide"><div class="storyCard">
                  <div class="storyPerson"><img src="${item.imag}" alt=""></div>
                  <div class="storyText"><span>${item.text}</span></div>
                </div></div>`;
  });
  document
    .querySelector(".swiper-wrapper")
    .insertAdjacentHTML("beforeend", story.join(""));
};
let jsSwiper = () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 13.2,
    spaceBetween: 5,
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
let init = async () => {
  await fetchStory();
  jsSwiper();
};
init();
