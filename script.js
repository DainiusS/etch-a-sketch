const container = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset");

let givenGridNumber = 16;

function createGrid(gridNumber){
    let a = 480 / gridNumber;
    for (let i = 0; i < gridNumber * gridNumber; i++){
        const gridElement = document.createElement("div");
        gridElement.setAttribute("style", "border: 1px solid black");
        gridElement.style.setProperty("height", a - 2 + "px");
        gridElement.style.setProperty("width", a - 2 + "px");
        gridElement.classList.add("grid-obj");
        gridElement.addEventListener("mouseover", () => gridElement.classList.add("onHover"));
        container.appendChild(gridElement);
    }
}

createGrid(givenGridNumber);

const gridObjects = document.querySelectorAll("#grid-container > *");

resetButton.addEventListener("click", function() {
    // gridObjects.forEach( (obj) => {
    // obj.classList.remove("onHover");
    // });
    givenGridNumber = Number(prompt("How many squares do you want? Do not exceed 100 :)"));
    if (givenGridNumber >= 100) {
        givenGridNumber = 16;
        alert("You entered invalid number try again :)");
    } else if (givenGridNumber <= 0 || givenGridNumber == null){
        return;
    }
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }    
    createGrid(givenGridNumber);
});

