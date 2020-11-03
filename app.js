/*
    @author: Asad Jawaid
    @Program Description: 
*/

// original grid size
let originalGridSize = 16;
// store the grid size into this variable;
let newGridSize;
// select container
const container = document.querySelector('.container');
// select the clear button
const clearDivBtn = document.querySelector('#clear-button');
// select the random color button
const randomColorBtn = document.querySelector('#random-colors');
// select resize button
const resizeGrid = document.querySelector('#resize-grid');
// select button to change color to black
const blackBtn = document.querySelector('#black-color');
// select shade button
const shade = document.querySelector('#shade');
// select input for custom color:
const customColor = document.querySelector('#select-custom-color');
// Create original grid of size 16 when the application loads
createGrid(originalGridSize);

// clear the sketch pad
clearDivBtn.addEventListener('click', function (e) {

    let sqaureDiv = document.querySelectorAll('.sqaure-div'); // select the divs that were created previously from new input or original
    container.innerHTML = ''; // remove old divs
    // check if the the current size of the grid is equal to 16 or not
    if(Math.sqrt(sqaureDiv.length) === 16) {
        createGrid(originalGridSize);
    }
    else{
        createGrid(newGridSize); // if the user has already selected a new grid size then use that grid size when clearing the sketch pad
    } 
});

// resize grid
resizeGrid.addEventListener('click', askGridSize);

// randomly generate colors when the user selects the random color btn
randomColorBtn.addEventListener('click', function () {  
    let sqaureDiv = document.querySelectorAll('.sqaure-div'); // select the divs that were created previously from new input or original
    sqaureDiv.forEach((divs) => {
        divs.addEventListener('mouseover', function () {
            let generateRandomColor = Math.floor(Math.random()*16777215).toString(16)
            divs.style.backgroundColor = '#' + generateRandomColor;
            colorToChange = generateRandomColor;
        });
    });
});

blackBtn.addEventListener('click', function (e) {  
    let sqaureDiv = document.querySelectorAll('.sqaure-div'); // select the divs that were created previously from new input or original
    sqaureDiv.forEach((divs) => {
        divs.addEventListener('mouseover', function (e) {
            divs.style.backgroundColor = 'black';
        });
    });
});

shade.addEventListener('click', function (e) {
    let sqaureDiv = document.querySelectorAll('.sqaure-div'); // select the divs that were created previously from new input or original
    
    sqaureDiv.forEach((divs) => {
        let shadeColor = 204;
        divs.addEventListener('mouseover', function (e) {
            shadeColor -= 25;
            divs.style.backgroundColor = `rgb(${shadeColor}, ${shadeColor}, ${shadeColor})`;
        });
    });
});

customColor.addEventListener('input', function (e) {
    let selectedColor = customColor.value; // store the value of the selected color the user has chosen
    let sqaureDiv = document.querySelectorAll('.sqaure-div'); // select the divs that were created previously from new input or original
    console.log(selectedColor);
    sqaureDiv.forEach((divs) => {
        divs.addEventListener('mouseover', function (e) {
            divs.style.backgroundColor = `${selectedColor}`;
        });
    });
});

/************************************************************************************************************* 
* Functions
**************************************************************************************************************/
function askGridSize() {
    newGridSize = Number(prompt('Enter a grid size between 16 and 100.'));

    if(newGridSize >= 16 && newGridSize <= 100) {
        container.innerHTML = ''; // remove old divs that were previously created
        // alter the container grid size to the desire input the user has asked for and then make a grid of that size by creating these divs and appending..
        container.style.setProperty('display', 'grid');  
        container.style.setProperty('grid-template-columns', 'repeat(' + newGridSize + ', 1fr)');       
        container.style.setProperty('grid-template-rows', 'repeat(' + newGridSize + ', 1fr)');  
        createGrid(newGridSize); // send the new size of the grid to the function
    }
    else {
        alert('Invalid grid size! Please enter a number between 16 and 100!');
    }
}

function createGrid(gridSize) {
    // columns and rows are the same so make the new size of the grid to the power of two
    for (let i = 0; i < (gridSize ** 2); i++) {
        let newSquare = document.createElement('div');
        newSquare.classList.add('sqaure-div'); // properties of sqaure-div to the newly created div
        container.appendChild(newSquare); // append to container
    }

    let newlyCreatedSqaures = document.querySelectorAll('.sqaure-div'); // select the divs that were just created
    
    // change color when the user hovers over the new divs
    newlyCreatedSqaures.forEach((divs) => {
        divs.addEventListener('mouseover', function () {
            divs.style.backgroundColor = '#293252';
        });
    });   
}

