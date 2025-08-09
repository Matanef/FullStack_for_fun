let container = document.getElementById("container")
let gameBoard = document.getElementById("game-board")
let generateButton = document.getElementById("generate-board")
let score = 0
let timeLeft = 30
let moleInterval
let timerInterval
let isGameRunning = false
let topScore = 0

let gameInterval = null

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
    score = 0
    timeLeft = 30
    divscore.innerHTML = `Score: ${score}`
    timerdisplay.innerHTML = `Time left: ${timeLeft}`
    isGameRunning = true

    if (moleInterval) {
        clearInterval(moleInterval)
    }
    if (timerInterval) {
        clearInterval(timerInterval)
    }
    moleInterval = setInterval(() => {
       spawnMole(size) 
    }, 1500);
    timerInterval = setInterval(() => {
        timeLeft--
        timerdisplay.innerHTML = `Time left: ${timeLeft}`
        if (timeLeft <=0) {
            clearInterval(moleInterval)
            clearInterval(timerInterval)
            isGameRunning = false
        if (score > topScore) {
        topScore = score
        }
        topScoreDisplay.innerHTML = `Top Score: ${topScore}`
        alert(`Game Over! Final Score: ${score}. Top Score: ${topScore}`)

        }
    }, 1000);


}


function spawnMole(size){
    let holes = document.querySelectorAll(".hole")
    holes.forEach(hole => {
        hole.classList.remove("mole")
        hole.removeAttribute("data-hit")
    });

    let randomIndex = Math.floor(Math.random() * size* size)
    let randomHole = document.querySelector(`[data-index="${randomIndex}"]`)
    randomHole.style.cursor = "pointer"

    if (randomHole) {
        randomHole.classList.add("mole")
        randomHole.setAttribute("data-hit", "false")
    }
    
}



let scoreContainer = document.getElementById("scoreContainer")
scoreContainer.style.display = "flex"
scoreContainer.style.justifyContent = "center"

let divscore = document.createElement("div")
divscore.innerHTML = `Score: ${score}`
scoreContainer.appendChild(divscore)

let topScoreDisplay = document.createElement("div")
topScoreDisplay.innerHTML = `Top Score: ${topScore}`
topScoreDisplay.style.marginLeft = "20px"
scoreContainer.appendChild(topScoreDisplay)


let timerdisplay = document.createElement("div")
timerdisplay.innerHTML = `Time left: ${timeLeft}`
timerdisplay.style.marginLeft = "20px"
scoreContainer.appendChild(timerdisplay)


gameBoard.addEventListener("click", function(event){
    if (!isGameRunning) return
    let target = event.target
    if (target.classList.contains("mole")) {
        score++
        divscore.innerHTML = `Score: ${score}`

        target.setAttribute("data-hit", "true")
        target.classList.add("hit");
        target.classList.remove("mole");
        console.log("Mole was hit!", target);
        setTimeout(() => {
            target.classList.remove("hit")
        }, 300);
    }else{
        score--
        divscore.innerHTML = `Score: ${score}`
    }
    
})




