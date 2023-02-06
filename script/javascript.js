function etchasketch(){

const container = document.querySelector(".grid");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

createGrid(16);
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseenter", (e) => {
    square.style.backgroundColor = "darkred";
  });
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  squares.forEach((square) => {
    square.style.backgroundColor = "darkblue";
  });
});

}
console.log(etchasketch());