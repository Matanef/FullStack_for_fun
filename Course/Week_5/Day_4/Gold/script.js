let root = document.getElementById("root")

// if (root.getElementsByTagName("p").length <26) {
//     let p = document.createElement("p")
//     root.appendChild(p)
// }

for (let i = 0; i < 26; i++) {
    let p = document.createElement("p")
    p.setAttribute("draggable", "true")
    p.setAttribute("id", `letter-${i}`)


    let letter = String.fromCharCode(65 +i)
    p.textContent = letter
    root.appendChild(p)
    p.addEventListener("dragstart", function(event){
        event.dataTransfer.setData("text/plain", event.target.id)
    })
}

root.addEventListener("dragover", function(event){
    event.preventDefault()
})
root.addEventListener("drop",function(event){
event.preventDefault()
let id = event.dataTransfer.getData("text/plain");
let dragged = document.getElementById(id);
let rect = root.getBoundingClientRect();
let x = event.clientX - rect.left
let y = event.clientY - rect.top
dragged.style.position = "absolute"
dragged.style.left = `${x}px`
dragged.style.top = `${y}px`
if (dragged.parentNode !== root){
    root.appendChild(dragged)
}

})

