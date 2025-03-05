//ساخت اسلایدر
let fetchSlider = async () => {
  let linkApi = await fetch("http://localhost:3000/slider");
  let data = await linkApi.json();
  let slider = data.map((sliderItem) => {
    return `<div class="swiper-slide"><img src="${sliderItem.img}" ></div>`;
  });
  document
    .querySelector(".swiper-wrapper")
    .insertAdjacentHTML("beforeend", slider.join());
};

export default fetchSlider;