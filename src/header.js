import image from "./imgs/logo.png";

const createHeader = () => {
  const header = document.querySelector("#header");

  const oakleylogo = new Image();
  oakleylogo.classList.add("logo");
  oakleylogo.src = image;
  header.appendChild(oakleylogo);

  const nav = document.createElement("nav");
  header.appendChild(nav);

  const homeBtn = document.createElement("button");
  homeBtn.innerHTML = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = "Menu";
  const aboutBtn = document.createElement("button");
  aboutBtn.innerHTML = "About";

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(aboutBtn);

  const reserveBtn = document.createElement("button");
  reserveBtn.innerHTML = "Book a table";
  header.appendChild(reserveBtn);
};

export default createHeader;
