/** @format */

const container = document.getElementById("container");
const eraserButton = document.getElementById("eraser");
const resetButton = document.getElementById("reset");
const brushButton = document.getElementById("brush");
let colorPalet = document.querySelectorAll(".colorbox");
console.log(colorPalet);

function gridCreator(rows, columns) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", columns);
  for (c = 0; c < rows * columns; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }

  const hoveredGrid = document.querySelectorAll(".grid-item");

  //hoveredGrid.forEach((element) => {
  //element.addEventListener("mouseenter", () => {
  // element.classList.add("on_mouse_enter");
  // });
  // });

  colorPalet.forEach((color) => {
    color.addEventListener("click", () => {
      console.log(color.id);
      hoveredGrid.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          element.style.backgroundColor = `${color.id}`;
        });
      });
    });
  });

  brushButton.addEventListener("click", () => {
    hoveredGrid.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        //element.classList.add("on_mouse_enter");
        element.style.backgroundColor = "yellow";
        element.style.bordercolor = "red";
      });
    });
  });

  eraserButton.addEventListener("click", () => {
    hoveredGrid.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        //element.classList.remove("on_mouse_enter");
        element.style.backgroundColor = "black";
      });
    });
  });

  resetButton.addEventListener("click", () => {
    hoveredGrid.forEach((grid) => {
      grid.style.backgroundColor = "black";
    });
  });
}

gridCreator(16, 16);
