import image from "./imgs/logo.png";

const createHomepage = () => {
  const content = document.querySelector("#content");

  const contentBox = document.createElement("div"); //Container
  contentBox.classList.add("contentbox");

  const restaurantName = new Image(); // Logo
  restaurantName.src = image;
  restaurantName.classList.add("restaurantname");

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("homebuttons");

  const homeBtns = ["Menu", "Reserve"];
  homeBtns.forEach((btn, index) => {
    const btn = document.createElement("button");
    btn.innerHTML = `${homeBtns[index]}`;
    btnContainer.appendChild(btn);
  });

  contentBox.appendChild(restaurantName);
  contentBox.appendChild(btnContainer);

  content.appendChild(contentBox);
};

export default createHomepage;
