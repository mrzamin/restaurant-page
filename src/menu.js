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
  new Item(`${corndog}`, "Shrimp corndog", "Bistro honey mustard"),
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
    "Salmon filet",
    "Olive oil poached, white bean bacon purée, red onion poppy seed marmalade, broccolini, pickled mustard molasses glaze, smoked onion rings"
  ),
  new Item(
    `${salad}`,
    "Spinach salad",
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

  const menuContainer = document.createElement("div"); //Menu container
  menuContainer.classList.add("menucontainer");

  menu.forEach((item) => {
    const card = document.createElement("div"); //Menu item card
    card.classList.add("card");

    const img = new Image(); //Menu item image
    img.src = item.image;
    img.classList.add("image");

    const name = document.createElement("h3"); //Menu item name
    name.innerHTML = `${item.name}`;
    name.classList.add("name");

    const descr = document.createElement("p");
    descr.innerHTML = `${item.descr}`;
    descr.classList.add("descr");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(descr);

    menuContainer.appendChild(card);
  });

  content.appendChild(menuContainer);
};

export default createMenu;
