import image from "./imgs/logo.png";
import divider from "./imgs/divider.png";

const createContent = () => {
  const content = document.querySelector("#content");

  const contentBox = document.createElement("div");
  contentBox.classList.add("contentbox");

  const restaurantName = new Image();
  restaurantName.src = image;

  const divider = new Image();
  divider.src = divider;

  const buttons = document.createElement("div");

  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = "Menu";

  const reserveBtn = document.createElement("button");
  reserveBtn.innerHTML = "Reserve";

  buttons.appendChild(menuBtn);
  buttons.appendChild(reserveBtn);

  contentBox.appendChild(restaurantName);
  contentBox.appendChild(divider);
  contentBox.appendChild(buttons);
  content.appendChild(contentBox);
};

export default createContent;
