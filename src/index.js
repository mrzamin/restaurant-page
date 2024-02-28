import Home from "./homepage";
import Header from "./header";
import Menu from "./menu";
import About from "./about";
import "./styles.css";

Header();
const content = document.querySelector("#content");
const nav = document.querySelectorAll(".nav");
const reserveBtn = document.querySelector(".reserve");
const tabs = [Home, Menu, About];

nav.forEach((button) => {
  button.addEventListener("click", function (e) {
    const button = e.target;
    const index = [...nav].indexOf(button);
    renderTab(index);
  });
});

reserveBtn.addEventListener("click", function (e) {
  renderTab(2);
});

const renderTab = (index) => {
  const tab = tabs[index];
  clearContent();
  tab();
};

const clearContent = () => {
  content.innerHTML = "";
};

window.onload = renderTab(0);
