const gridMain = document.getElementById('gridContainer');
const gridButton = document.querySelector('.setBtn');


//Create the inner <div>'s
function createDivs(gridSize) {
    const widthHeight = 100 / gridSize;
    const div = document.createElement('div');
    div.classList.add('innerGrid');
    div.style.width = `${widthHeight}%`;
    div.style.height = `${widthHeight}%`;
    return div;
}

//Create the grid and append it to the main grid
function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        gridMain.appendChild(createDivs(Math.sqrt(gridSize)));
    }
}

//Change div color
gridMain.addEventListener('mouseover', function(e) {
    if(e.target.matches('.innerGrid')) {
        e.target.classList.add('gridColor');
    }
});

//Button function to set grid number
gridButton.addEventListener('click', function() {
    let gridSize = Number(prompt("How many square per side is your grid?"));
    let totalGrid = gridSize * gridSize;

    if(gridSize > 100) {
        alert('This number is too big: choose a number below 100');
    }else {
        createGrid(totalGrid);
    }
});





