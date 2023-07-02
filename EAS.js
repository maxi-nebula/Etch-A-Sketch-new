/** @format */

const container = document.getElementById("container");
const eraserButton = document.getElementById("eraser");
const resetButton = document.getElementById("reset");
const brushButton = document.getElementById("brush");
console.log(resetButton);
function gridCreator(rows, columns) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", columns);
  for (c = 0; c < rows * columns; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }

  const hoveredGrid = document.querySelectorAll(".grid-item");

  hoveredGrid.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.classList.add("on_mouse_enter");
    });
  });

  brushButton.addEventListener("click", () => {
    hoveredGrid.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.classList.add("on_mouse_enter");
      });
    });
  });

  eraserButton.addEventListener("click", () => {
    hoveredGrid.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.classList.remove("on_mouse_enter");
      });
    });
  });

  resetButton.addEventListener("click", () => {
    let styledGrid = document.querySelectorAll(".on_mouse_enter");
    console.log(styledGrid);

    styledGrid.forEach((element) => {
      {
        element.classList.remove("on_mouse_enter");
      }
    });
  });

  let colorPalet = document.querySelectorAll(".colorbox");
  console.log(colorPalet);
  colorPalet.forEach((color) => {
    color.addEventListener("click", () => {
      console.log(color.id);
    });
  });
}

gridCreator(16, 16);
