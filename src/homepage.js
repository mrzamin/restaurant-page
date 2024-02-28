import image from "./imgs/logo.png";

const createContent = () => {
  const content = document.querySelector("#content");

  const contentBox = document.createElement("div");
  contentBox.classList.add("contentbox");

  const restaurantName = new Image();
  restaurantName.src = image;
  restaurantName.classList.add("restaurantname");

  const buttons = document.createElement("div");
  buttons.classList.add("homebuttons");

  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = "Menu";

  const reserveBtn = document.createElement("button");
  reserveBtn.innerHTML = "Reserve";

  buttons.appendChild(menuBtn);
  buttons.appendChild(reserveBtn);

  contentBox.appendChild(restaurantName);
  contentBox.appendChild(buttons);
  content.appendChild(contentBox);
};

export default createContent;
