let container = document.getElementById("container")
let banner = document.createElement("banner")
banner.setAttribute("id", "banner")
container.appendChild(banner)
let button = document.getElementById("clear")


// function setTimeoutPractice() {
//     alert("Hello World")
// }

// setTimeout(setTimeoutPractice, 2000)

// function setTimeoutPracticeTwo() {
//     let p = document.createElement("p")
//     container.appendChild(p)
//     p.innerHTML = `Hello World`

// }
// setTimeout(setTimeoutPracticeTwo, 2000)

let id;
function setIntervalPractice() {
    id = setInterval(function() {
    let p = document.createElement("p")
    container.appendChild(p)
    p.innerHTML = `Hello World`
    if (container.getElementsByTagName("p").length>=5) {
        clearInterval(id)
    }
    }, 2000);
    
}
setIntervalPractice()

// button.addEventListener("click", function(){
//     clearInterval(id)
// })