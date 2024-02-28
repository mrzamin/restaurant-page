import Home from "./homepage";
import Header from "./header";
import Menu from "./menu";
import About from "./about";
import "./styles.css";

Header();
Home();

const content = document.querySelector("#content");
const logo = document.querySelector(".logo");
const nav = document.querySelectorAll(".nav");
const reserveBtns = document.querySelectorAll(".reserve");
const tabs = [Home, Menu, About];

nav.forEach((button) => {
  button.addEventListener("click", function (e) {
    const button = e.target;
    const index = [...nav].indexOf(button);
    renderTab(index);
  });
});

reserveBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    renderTab(2);
  });
});

logo.addEventListener("click", function (e) {
  renderTab(0);
});

const renderTab = (index) => {
  const tab = tabs[index];
  clearContent();
  tab();
};

const clearContent = () => {
  content.innerHTML = "";
};
