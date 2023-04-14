const gridSize = 16;
createGrid(gridSize);

function createGrid(gridSize){
    let container = document.querySelector(".container");
    for (let i = 0; i < gridSize; i++){
        let row = document.createElement("div");
        row.className = "row";
        for(let j = 0; j < gridSize; j++){
            let div = document.createElement("div");
            div.className = "grid-square";
            row.appendChild(div);
        }
        container.appendChild(row);
    }
    adjustSquareSize(gridSize);
}

function adjustSquareSize(gridSize){
    let gridSquareWidth = 100/gridSize;
    let rowHeight = 100/gridSize;
    let gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(gridSquare => gridSquare.style.cssText = `width:${gridSquareWidth}%;`);
    let rows = document.querySelectorAll(".row");
    rows.forEach(row => row.style.cssText = `height:${rowHeight}%;`);
}