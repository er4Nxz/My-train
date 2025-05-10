let fetchStory = async () => {
  const linkApi = await fetch("http://localhost:3000/story");
  const response = await linkApi.json();
  const story = response.map((item) => {
    return `<div class="storyCard">
                  <div class="storyPerson"><img src="${item.image}" alt=""></div>
                  <div class="storyText"><span>${item.text}</span></div>
                </div>`;
  });
  document
    .querySelector(".swiper-wrapper")
    .insertAdjacentHTML("beforeend", story.join(""));
};
let JsSwiper = () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 12.5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};
let fetchClear = async () => {
  await fetchStory();
  JsSwiper();
};
fetchClear();
