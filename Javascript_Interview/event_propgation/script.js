// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");
// const body = document.querySelector("body");
// const input = document.querySelector("input");

// div.addEventListener("click", (event) => {
//   console.log(event.currentTarget.tagName);
// });
// form.addEventListener("click", () => {
//   alert("form");
// });
// button.addEventListener("click", () => {
//   alert("button");
// });

// // body.addEventListener("click", () => {
// //   alert("body");
// // });
// // input.addEventListener("focus", () => {
// //   alert("input");
// // });

const openModalBtn = document.querySelector(".open_modal_button");
const modalContainer = document.querySelector(".modal_container");

openModalBtn.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

modalContainer.addEventListener("click", (e) => {
  if (e.target.className === "modal_container")
    modalContainer.style.display = "none";
});

document.getElementById("parent").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log("You selected on ", e.target.textContent);
  }
});
