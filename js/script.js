initializeGrid(16);

function initializeGrid(gridSize){
    createGridContainer();
    createGrid(gridSize);
    enableGridSquareColorChange();
}

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

function enableGridSquareColorChange(){
    let gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(gridSquare => gridSquare.addEventListener("mouseover", changeGridSquareColor));
}

function changeGridSquareColor(){
    if (!this.classList.contains('visited')){
        this.style.backgroundColor = getRandomColor();
        this.classList.add('visited');
    }
    else{
        let currentColor = this.style.backgroundColor;
        this.style.backgroundColor = darkenColor(currentColor);
    }

}

function getGridSize(){
    let gridSize = prompt("Please enter the number of squares per side:");
    let isSizeValid = false;
    while(!isSizeValid){
        console.log(+'gridSize');
        if(gridSize == null){
            return;
        }
        else if(isNaN(gridSize)){
            gridSize = prompt("Not a numeric value! Please try again:");
        }
        else if(gridSize <= 0){
            gridSize = prompt("Please enter a number greater than 0:");
        }
        else if(gridSize > 100){
            gridSize = prompt("Please enter a number less than 100:");
        }
        else{
            isSizeValid = true;
            deleteGridContainer();
            initializeGrid(gridSize);
        }
    }
}

function createGridContainer(){
    let body = document.querySelector('body');
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('container'); 
    body.appendChild(containerDiv);
}

function deleteGridContainer(){
    let body = document.querySelector('body');
    body.removeChild(body.lastChild);
}

function getRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function darkenColor(rgbValue){
    let rgbList = rgbValue.substring(4, rgbValue.length-1)
        .replace(/ /g, '')
        .split(',');
    for(let i = 0; i < 3; i++){
        rgbList[i] = addTenPercentDarkness(rgbList[i])
    }
    return `rgb(${rgbList[0]}, ${rgbList[1]}, ${rgbList[2]})`;
}

function addTenPercentDarkness(value){
    let darkerValue = value - Math.floor(255/10);
    if(darkerValue < 0) darkerValue = 0;
    return darkerValue;
}