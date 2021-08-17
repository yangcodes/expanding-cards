// const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//     console.log("war");
//   });
// }

function setClickListeners() {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClass();
      panel.classList.add("active");
    });
  });
}

function removeActiveClass() {
  const activePanel = document.querySelector(".active");
  activePanel.classList.remove("active");
}

setClickListeners();

/*panels.forEach((panel) => {
  panel.addEventListener("click", function (e) {
    if (e.target.classList.contains("panel")) {
      panel.classList.remove("active");
    }
  });
});

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
}); */
