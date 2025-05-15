
//ساخت اسلایدر
let fetchSlider = async () => {
  let linkApi = await axios("http://localhost:3000/slider");
  let slider = linkApi.data.map((sliderItem) => {
    return `<div class="swiper-slide"><img src="${sliderItem.img}" ></div>`;
  });
  document
    .querySelector(".swiper-wrapper")
    .insertAdjacentHTML("beforeend", slider.join(""));
};

export default fetchSlider;