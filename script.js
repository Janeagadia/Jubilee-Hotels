"use strict";

// alert("Hi jane");

const btnTabs = document.querySelector(".btns-tab-container");
const btnsTabsPair = document.querySelectorAll(".btns-tab");
const serviceContent = document.querySelectorAll(".service-content");

btnTabs.addEventListener("click", function (e) {
  const clicked = e.target;
  // console.log(clicked);

  btnsTabsPair.forEach((btn) => btn.classList.remove("btns-tab-active"));
  clicked.classList.add("btns-tab-active");

  serviceContent.forEach((content) =>
    content.classList.remove("service-content-active")
  );
  document
    .querySelector(`.service-content-${clicked.dataset.tab}`)
    .classList.add("service-content-active");
});
