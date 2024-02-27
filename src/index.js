import Home from "./homepage";
import Header from "./header";
import Menu from "./menu";
import About from "./about";
import "./styles.css";

Header();
const content = document.querySelector("#content");
const nav = document.querySelectorAll(".nav");
const tabs = [Home, Menu, About];

nav.forEach((button) => {
  button.addEventListener("click", function (e) {
    const button = e.target;
    const index = [...nav].indexOf(button);
    renderTab(index);
  });
});

const renderTab = (index) => {
  const tab = tabs[index];
  clearContent();
  tab();
  console.log(tab);
};

const clearContent = () => {
  content.innerHTML = "";
};
// const homeBtn = header.homeBtn;
// const menuBtn = header.menuBtn;
// const aboutBtn = header.aboutBtn;

// buttons.forEach((button) => {
//   button.addEventListener("click", openPage(button));
// });

// const openPage = (button) => {
//   if (button == homeBtn) {
//     createContent();
//   } else if (button == menuBtn) {
//     createMenu();
//   } else if (button == aboutBtn) {
//     createAboutPage();
//   } else {
//     return;
//   }
// };

window.onload = renderTab(0);
