"use strict";

// alert("Hi jane");

const btnTabs = document.querySelector(".btns-tab-container");
const btnsTabsPair = document.querySelectorAll(".btns-tab");
const serviceContent = document.querySelectorAll(".service-content");

btnTabs.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btns-tab");
  // console.log(clicked);

  if (!clicked) return;

  btnsTabsPair.forEach((btn) => btn.classList.remove("btns-tab-active"));

  serviceContent.forEach((content) =>
    content.classList.remove("service-content-active")
  );

  clicked.classList.add("btns-tab-active");
  document

    .querySelector(`.service-content-${clicked.dataset.tab}`)
    .classList.add("service-content-active");
});
