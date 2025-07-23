



// function myMove(){
//     let square = document.getElementById("animate")
//     let container = document.getElementById("container")
//     let containerWidth = container.offsetWidth
//     let squareWidth = square.offsetWidth
//     let moveId = setInterval(function(){
//         square.style.transition = "left 4s ease-in-out"
//         square.style.left = containerWidth-squareWidth+"px"
        
// }, 1000)

// }


function myMove(){
    let square = document.getElementById("animate")
    let container = document.getElementById("container")
    let containerWidth = container.offsetWidth
    let squareWidth = square.offsetWidth
    let position = 0;
    square.style.left = position + "px"
    let moveId = setInterval(function(){
        if (position >= containerWidth - squareWidth) {
            clearInterval(moveId)
        }else{
            position++
            square.style.left = position + "px"
        }
        
}, 1)

}
