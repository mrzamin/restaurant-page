const createMenu = () => {
  const content = document.querySelector("#content");

  const menuBox = document.createElement("div");
  menuBox.classList.add("menubox");
  menuBox.innerHTML = "HELLLLO";

  //Card 1
  const card1 = document.createElement("div");
  const img1 = new Image();
  const heading1 = document.createElement("h3");
  const descr1 = document.createElement("p");
  heading1.innerHTML = "Shrimp Corndog";
  descr1.innerHTML = "Bistro honey mustard";
  card1.appendChild(img1);
  card1.appendChild(heading1);
  card1.appendChild(descr1);

  //Card 2
  const card2 = document.createElement("div");
  const img2 = new Image();
  const heading2 = document.createElement("h3");
  const descr2 = document.createElement("p");
  heading2.innerHTML = "Bacon-wrapped apricots";
  descr2.innerHTML =
    "tequila-soaked apricots, hickory smoked bacon, jalapeño kumquat, honey glaze";
  card2.appendChild(img2);
  card2.appendChild(heading2);
  card2.appendChild(descr2);

  //Card 3
  const card3 = document.createElement("div");
  const img3 = new Image();
  const heading3 = document.createElement("h3");
  const descr3 = document.createElement("p");
  heading3.innerHTML = "Cauliflower piccata";
  descr3.innerHTML =
    "Lemon caper aioli, pine nuts, parsley, pickled carrots, parmesan crisp";
  card3.appendChild(img3);
  card3.appendChild(heading3);
  card3.appendChild(descr3);

  //Card 4
  const card4 = document.createElement("div");
  const img4 = new Image();
  const heading4 = document.createElement("h3");
  const descr4 = document.createElement("p");
  heading4.innerHTML = "Shrimp Corndog";
  descr4.innerHTML = "Bistro honey mustard";
  card4.appendChild(img4);
  card4.appendChild(heading4);
  card4.appendChild(descr4);

  //Card 5
  const card5 = document.createElement("div");
  const img5 = new Image();
  const heading5 = document.createElement("h3");
  const descr5 = document.createElement("p");
  heading5.innerHTML = "Shrimp Corndog";
  descr5.innerHTML = "Bistro honey mustard";
  card5.appendChild(img5);
  card5.appendChild(heading5);
  card5.appendChild(descr5);

  //Card 6
  const card6 = document.createElement("div");
  const img6 = new Image();
  const heading6 = document.createElement("h3");
  const descr6 = document.createElement("p");
  heading6.innerHTML = "Shrimp Corndog";
  descr6.innerHTML = "Bistro honey mustard";
  card6.appendChild(img6);
  card6.appendChild(heading6);
  card6.appendChild(descr6);

  menuBox.appendChild(card1);
  menuBox.appendChild(card2);
  menuBox.appendChild(card3);
  menuBox.appendChild(card4);
  menuBox.appendChild(card5);
  menuBox.appendChild(card6);

  content.appendChild(menuBox);
};

export default createMenu;
