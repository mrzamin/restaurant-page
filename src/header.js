import image from "./imgs/logo.png";

const createHeader = () => {
  const header = document.querySelector("#header");

  const logo = new Image(); //Header logo
  logo.src = image;
  logo.classList.add("logo");

  const nav = document.createElement("nav"); //Header navigation
  const navTabs = ["Home", "Menu", "About"];
  navTabs.forEach((tab, index) => {
    const button = document.createElement("button");
    button.innerHTML = `${navTabs[index]}`;
    button.classList.add("nav");
    nav.appendChild(button);
  });

  const reserveBtn = document.createElement("button"); //Reserve a table btn
  reserveBtn.innerHTML = "Book a table";
  reserveBtn.classList.add("reserve");

  header.appendChild(logo);
  header.appendChild(nav);
  header.appendChild(reserveBtn);
};

export default createHeader;
