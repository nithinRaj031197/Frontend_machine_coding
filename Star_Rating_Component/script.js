const starContainerElement = document.getElementById("star-container");

const starElements = document.querySelectorAll(".star");
console.log("starElements", starElements);
const countElement = document.getElementById("count");

let filled = 0;

starContainerElement.addEventListener("mouseover", (event) => {
  const idx = Number(event.target.dataset.index);

  for (let index = 0; index < 5; index++) {
    starElements[index].classList.remove("star-filled");
  }

  for (let index = 0; index < idx; index++) {
    starElements[index].classList.add("star-filled");
  }
});

starContainerElement.addEventListener("mouseleave", (event) => {
  for (let index = 0; index < 5; index++) {
    starElements[index].classList.remove("star-filled");
  }

  for (let index = 0; index < filled; index++) {
    starElements[index].classList.add("star-filled");
  }
});

starContainerElement.addEventListener("click", (event) => {
  const idx = +event.target.dataset.index;

  for (let index = 0; index < 5; index++) {
    starElements[index].classList.remove("star-filled");
  }

  for (let index = 0; index < idx; index++) {
    starElements[index].classList.add("star-filled");
  }

  countElement.textContent = idx;
  filled = idx;
});
