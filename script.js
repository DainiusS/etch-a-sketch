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
        gridElement.addEventListener("mouseover", () => {
            let r = Math.round((Math.random() * 256));
            let g = Math.round((Math.random() * 256));
            let b = Math.round((Math.random() * 256));
            gridElement.style.setProperty("background-color", "rgb(" + r +","+g+","+b+")");
        });
        container.appendChild(gridElement);
    }
}

createGrid(givenGridNumber);





const gridObjects = document.querySelectorAll("#grid-container > *");

resetButton.addEventListener("click", function() {
    // gridObjects.forEach( (obj) => {
    // obj.classList.remove("onHover");
    // });
    givenGridNumber = Number(prompt("How many squares per side do you want? Do not exceed 100 :)"));
    if (givenGridNumber >= 100) {
        givenGridNumber = 16;
        alert("You entered invalid number");
    } else if (givenGridNumber <= 0 || givenGridNumber == null){
        return;
    }
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }    
    createGrid(givenGridNumber);
});

