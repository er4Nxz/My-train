let fetchMenu = async () => {
  let linkApi = await fetch("http://localhost:3000/menu");
  let data = await linkApi.json();
  let menu = data.map((menuItem) => {
    return `<div class="menuNavTitle">
                <a href="${menuItem.link}">${menuItem.name}</a>
            </div>`;
  });
  document
    .querySelector(".menuNav")
    .insertAdjacentHTML("afterbegin", menu.join());
};
fetchMenu();

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
fetchSlider();
