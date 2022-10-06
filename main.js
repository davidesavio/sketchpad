let grid = []
let isMouseDown = false;
let gridDimension = 16;
let colors = ['black', 'white']
const inputColor1 = document.getElementById('color1')
const inputColor2 = document.getElementById('color2') 
const backColor = document.getElementById('backColor')
const background = document.getElementById('background')
const erase = document.getElementById('erase')
const range = document.getElementById('range')
const rangeValue = document.getElementById('rangeValue')
const container = document.getElementById('container')

inputColor1.addEventListener('change', (e) => {
    colors[0] = e.target.value;
    console.log(colors);
})
inputColor2.addEventListener('change', (e) => {
    colors[1] = e.target.value;
    console.log(colors);
})
backColor.addEventListener('change', (e) => {
    background.style.backgroundColor = e.target.value
})
erase.addEventListener('click', () => {
    grid.forEach((cell) => {cell.style.backgroundColor = 'transparent'})
})
range.addEventListener('input', (e) => {
    rangeValue.innerText = e.target.value
})
range.addEventListener('change', (e) => {
    gridDimension = e.target.value
    createGrid(gridDimension)
})


function createGrid (dimension) {
    grid = new Array(dimension*dimension)
    container.innerHTML = ''
    for (let i = 0; i < grid.length; i++) {
        let div = document.createElement('div')
        div.setAttribute('id', `cell_${i}`)
        div.classList.add("cell")
        div.style.width = `${500/dimension}px`
        div.style.height = `${500/dimension}px`
        addDivListeners(div, colors)
        grid[i] = div
        container.appendChild(div)
    }
}

function addDivListeners(div, colors) {
    div.addEventListener('mousedown', (e) => {paintMouseDown(e, div)})
    div.addEventListener('mouseover', (e) => {paintMouseOver(e, div)})
    div.addEventListener('mouseup', stopPaint)
}

const paintMouseDown = (e, div) => {
    isMouseDown = true;
    if (e.button === 0)
        div.style.backgroundColor = colors[0]
    else if (e.button === 2)
        div.style.backgroundColor = colors[1]
}

const paintMouseOver = (e, div) => {
    if (isMouseDown) {
        if (e.buttons === 1)
            div.style.backgroundColor = colors[0]
        else if (e.buttons === 2)
            div.style.backgroundColor = colors[1]
    }
}

const stopPaint = () => {
    isMouseDown = false;
}



createGrid(gridDimension)