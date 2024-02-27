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
  homeBtn.classList.add("nav");
  homeBtn.innerHTML = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.innerHTML = "Menu";
  menuBtn.classList.add("nav");
  const aboutBtn = document.createElement("button");
  aboutBtn.innerHTML = "About";
  aboutBtn.classList.add("nav");

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(aboutBtn);

  const reserveBtn = document.createElement("button");
  reserveBtn.innerHTML = "Book a table";
  header.appendChild(reserveBtn);

  return {
    homeBtn,
    menuBtn,
    aboutBtn,
  };
};

export default createHeader;
