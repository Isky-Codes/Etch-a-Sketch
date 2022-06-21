let gridMain = document.querySelector('.gridContainer');


//Create the inner <div>'s
function createDivs() {
    const div = document.createElement('div');
    div.classList.add('innerGrid');
    return div;
}

//Create the grid and append it to the main grid
function createGrid() {
    for(let i = 0; i < 256; i++) {
        gridMain.appendChild(createDivs());
    }
}

createGrid();

//Change div color

gridMain.addEventListener('mouseover', function(e) {
    if(e.target.matches('.innerGrid')) {
        e.target.classList.add('gridColor');
    }
});

