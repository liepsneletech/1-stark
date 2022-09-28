"use strict";

const mobileMenuIcon = document.querySelector(".mobile-menu-btn");
const mainNav = document.querySelector(".main-nav");
const x = document.querySelector(".close");
const ham = document.querySelector(".hamburger");

mobileMenuIcon.addEventListener("click", function () {
  mainNav.classList.toggle("mobile-menu-open");
  ham.classList.toggle("hide");
  x.classList.toggle("show");
});
