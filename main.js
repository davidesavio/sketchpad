let isMouseDown = false;

function createGrid () {
    let container = document.getElementById('container')
    let grid = new Array(64*64)
    for (let i = 0; i < grid.length; i++) {
        let div = document.createElement('div')
        div.setAttribute('id', `cell_${i}`)
        div.classList.add("cell")
        div.style.width = `${500/64}px`
        div.style.height = `${500/64}px`
        div.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            if (e.button === 0)
                div.style.backgroundColor = 'black'
            else if (e.button === 2)
                div.style.backgroundColor = 'white'
        })
        div.addEventListener('mouseover', (e) => {
            if (isMouseDown) {
                if (e.buttons === 1)
                    div.style.backgroundColor = 'black'
                else if (e.buttons === 2)
                    div.style.backgroundColor = 'white'
            }
        })
        div.addEventListener('mouseup', () => {
            isMouseDown = false;
        })
        grid[i] = div
    }
    for (let y = 0; y < grid.length; y++) {
        container.appendChild(grid[y])
    }
}





createGrid()