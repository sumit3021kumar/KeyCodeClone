"use strict";

// change theme function
const toggleTheme = function () {
  const themeButton = document.querySelector(".toggle-button");
  const htmlTag = document.documentElement;

  if (htmlTag.classList.contains("light-theme")) {
    htmlTag.classList.add("dark-theme");
    htmlTag.classList.remove("light-theme");
    themeButton.innerText = "Dark Theme";
  } else {
    htmlTag.classList.add("light-theme");
    htmlTag.classList.remove("dark-theme");
    themeButton.innerText = "Light Theme";
  }
};

const getKeyInformation = function (e) {
  console.log(e);
  const cards = document.querySelector(".cards");
  const keycodeDisplay = document.querySelector(".keycode-display");
  const itemKey = document.querySelector(".item-key .main-description");
  const itemLocation = document.querySelector(
    ".item-location .main-description "
  );
  const itemWhich = document.querySelector(".item-which .main-description");
  const itemCode = document.querySelector(".item-code .main-description ");

  const textDisplay = document.querySelector(".text-display");

  textDisplay.classList.add("hide");
  cards.classList.remove("hide");

  keycodeDisplay.innerText = e.which;
  itemKey.innerText = e.key;
  itemLocation.innerText = e.location;
  itemWhich.innerText = e.which;
  itemCode.innerText = e.code;
};

// document calling keydow
document.addEventListener("keydown", function (e) {
  getKeyInformation(e);
});
