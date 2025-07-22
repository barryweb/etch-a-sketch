const container = document.querySelector("#container");
const button = document.querySelector("#btn");
const resetBtn = document.querySelector("#resetBtn");
const rgbBtn = document.querySelector("#rgbBtn");
const DEFAULT_GRID_SIZE = 16;
let rgbColorEnabled = false;

function createGrid(gridSize) {

	container.innerHTML = "";
	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;
	const squareWidth = containerWidth / gridSize;
	const squareHeight = containerHeight / gridSize;

	for (let i = 0; i < gridSize * gridSize; i++) {

		const div = document.createElement("div");
		div.classList.add("square");
		div.style.width = `${squareWidth}px`;
		div.style.heigth = `${squareHeight}px`;

		div.addEventListener("mouseenter", () => {
			if (rgbColorEnabled) {
				div.style.backgroundColor = getRandomSquareColor();
			}
		});
		container.appendChild(div);
	}
}

createGrid(DEFAULT_GRID_SIZE);

button.addEventListener("click", () => {
	let gridSize = parseInt(prompt(
		`To adjust the grid, enter a number between 1 and 100: `
	));

	if (typeof gridSize !== "number" 
		|| isNaN(gridSize)
		|| gridSize <= 0
		|| gridSize > 100) {
			alert("Invalid input. Input a number between 1 and 100.");
			return;
		}
		createGrid(gridSize);
});

rgbBtn.addEventListener("click", () => {
	rgbColorEnabled = true;
});

resetBtn.addEventListener("click", () => {
	const allSquareDivs = document.querySelectorAll(".square");
	allSquareDivs.forEach((square) => {
		square.style.backgroundColor = "";
	});
	rgbColorEnabled = false;
});


function getRandomSquareColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}


