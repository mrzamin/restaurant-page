import corndog from "./imgs/corndog.jpg";
import apricots from "./imgs/apricots.jpg";
import cauliflower from "./imgs/cauliflower.jpg";
import salmon from "./imgs/salmon.jpg";
import salad from "./imgs/salad.jpg";
import beef from "./imgs/beef.jpg";

class Item {
  constructor(image, name, descr) {
    this.image = image;
    this.name = name;
    this.descr = descr;
  }
}

let menu = [
  new Item(`${corndog}`, "Shrimp Corndog", "Bistro honey mustard"),
  new Item(
    `${apricots}`,
    "Bacon-wrapped apricots",
    "Tequila-soaked apricots, hickory smoked bacon, jalapeño kumquat, honey glaze"
  ),
  new Item(
    `${cauliflower}`,
    "Cauliflower piccata",
    "Lemon caper aioli, pine nuts, parsley, pickled carrots, parmesan crisp"
  ),
  new Item(
    `${salmon}`,
    "Salmon Filet",
    "Olive oil poached,white bean bacon purée, red onion poppy seed marmalade, broccolini, pickled mustard molasses glaze, smoked onion rings"
  ),
  new Item(
    `${salad}`,
    "Spinach Salad",
    "Spinach, zucchini sauté, mustard cream, crispy leeks"
  ),
  new Item(
    `${beef}`,
    "Beef brisket",
    "Wild mushroom ragout, cheddar potato latke, ratatouille, artichoke gremolata, blue cheese, miso tomato ketchup"
  ),
];

const createMenu = () => {
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menucontainer");

  const divContainer = document.createElement("div");
  divContainer.classList.add("divcontainer");

  menu.forEach((item) => {
    const card = document.createElement("div");

    const img = new Image();
    img.src = item.image;
    img.classList.add("image");

    const name = document.createElement("h3");
    name.classList.add("name");
    name.innerHTML = `${item.name}`;

    const descr = document.createElement("p");
    descr.classList.add("descr");
    descr.innerHTML = `${item.descr}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(descr);

    divContainer.appendChild(card);
  });

  menuContainer.appendChild(divContainer);
  content.appendChild(menuContainer);
};

export default createMenu;
