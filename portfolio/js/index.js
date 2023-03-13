// benadryl func
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function startAnimation(h1) {
  clearInterval(interval);

  let iteration = 0;

  interval = setInterval(() => {
    h1.innerText = h1.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return h1.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= h1.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

const h1Elements = document.querySelectorAll("h1.woozy");
h1Elements.forEach((h1) => {
  h1.addEventListener("mouseenter", () => {
    startAnimation(h1);
  });
  h1.addEventListener("mouseleave", () => {
    clearInterval(interval);
    h1.innerText = h1.dataset.value;
  });
});

// for (;;) {

//   console.log("ahoj matejuu");
// }

// alert
function addClickListener() {
  // Get all the interactable divs
  const interactableDivs = document.querySelectorAll(".loremi");

  // Add a click event listener to each div
  interactableDivs.forEach((div) => {
    div.addEventListener("click", () => {
      alert("jeste nefunguje (mam skill issue) + to ma byt single page");
    });
  });
}

// Call the function to add the click event listeners
addClickListener();

window.addEventListener("DOMContentLoaded", function () {
  // Wait for the page to load before starting the animation

  var body = document.querySelector("body");
  body.classList.add("reveal"); // Add the "reveal" class to start the animation
});

//
//
//
