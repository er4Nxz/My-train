let Menu = async () => {
  let linkApi = await fetch("http://localhost:3000/menu");
  let data = await linkApi.json();
  let menu = data.map((menuItem) => {
    return `<div class="menuNavTitle">
                <a href="${menuItem.link}">${menuItem.name}</a>
            </div>`;
  });
  document.querySelector(".menuNav").insertAdjacentHTML("afterbegin", menu.join())
};
Menu()
