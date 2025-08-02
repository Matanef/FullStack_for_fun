let container = document.getElementById("container")
let gameBoard = document.getElementById("game-board")
let generateButton = document.getElementById("generate-board")


let moleInterval = null
generateButton.addEventListener("click", () => {
    let size = parseInt(document.getElementById("board-size").value)
    createGrid(size)
    startGame(size)
});

function createGrid(size){
    gameBoard.innerHTML = ""

    gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gameBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size*size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("hole")
        cell.setAttribute("data-index", i);
        gameBoard.appendChild(cell)
        
    }
}

function startGame(size){
    if (moleInterval) {
        clearInterval(moleInterval)
    }
    moleInterval = setInterval(() => {
       spawnMole(size) 
    }, 1500);
}

function spawnMole(size){
    let holes = document.querySelectorAll(".hole")
    holes.forEach(hole => hole.classList.remove("mole"));
    let randomIndex = Math.floor(Math.random() * size* size)
    let randomHole = document.querySelector(`[data-index="${randomIndex}"]`)

    if (randomHole) {
        randomHole.classList.add("mole")
    }
}