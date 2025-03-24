const container = document.querySelector(".mainContainer");
const dimensionInput = document.querySelector("#dimensions");
const createCanvasButton = document.querySelector(".canvasButton");


function chooseRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return `#${randomColor}`;
}

createCanvasButton.addEventListener("click", () => {
    side = parseInt(dimensionInput.value);
    if (side > 100) {
        side = 100;
        console.log("shrunk");
    }
    boxSize = containerSize / side;
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
        console.log("rem");
    }
    createCanvas(side, boxSize);
});

function createCanvas(side, size) {
    for (let i = 0; i < side * side; i++) {

        const cell = document.createElement("div");
        cell.classList.add("box");

        container.appendChild(cell);
        cell.style.width = `${size}px`;
        cell.style.height = `${size}px`;


        cell.addEventListener("mouseover", () => {
            // cell.classList.add("boxHovered");
            cell.style.backgroundColor = chooseRandomColor();
        });
    }
}

size = 10;

const containerSize = container.clientWidth;
var boxSize = containerSize / size;
createCanvas(size, boxSize);
console.log(containerSize, boxSize);
