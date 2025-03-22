
const container = document.querySelector(".mainContainer");

for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("box");
    container.appendChild(cell);
}