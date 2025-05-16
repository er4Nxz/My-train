
// ساخت منو
let fetchMenu = async () => {
  let linkApi = await axios("http://localhost:3000/menu");
  let menu = linkApi.data.map((menuItem) => {
    return `<div class="menuNavTitle">
                  <a href="${menuItem.link}">${menuItem.name}</a>
              </div>`;
  });
  document
    .querySelector(".menuNav")
    .insertAdjacentHTML("afterbegin", menu.join(""));
};
export default fetchMenu;
