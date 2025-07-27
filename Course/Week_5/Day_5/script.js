let container = document.getElementById("container")
let colorarea = document.getElementById("colorarea")
let blankarea = document.getElementById("blankarea")
let selectColor = null

function getRandomHexColor() {
    return '#' + Math.floor(Math.random()* 16777215).toString(16)
}

for (let i = 0; i < 1500; i++) {
    let square = document.createElement("div")
    square.classList.add("square")
    blankarea.appendChild(square)
    square.addEventListener("click", function(event){
    if (selectColor) {
        square.style.backgroundColor = selectColor
    }
})
}

for (let i = 0; i < 10; i++) {
    let colorsquare = document.createElement("div")
    colorsquare.classList.add("colorsquare")
    let randomColor = getRandomHexColor()
    colorsquare.style.backgroundColor = randomColor
    colorarea.appendChild(colorsquare)
    
    colorsquare.addEventListener("click", function() {
        selectColor = randomColor
        document.querySelectorAll(".colorsquare").forEach(cs => cs.style.outline = "")
        colorsquare.style.outline = "3px solid black"
    })

}

