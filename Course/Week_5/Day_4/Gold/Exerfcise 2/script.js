let container = document.getElementById("container")
let p = document.createElement("p")
p.textContent = "I am a paragraph"
p.setAttribute("draggable", 'true')
p.classList.add("dragPara")
container.appendChild(p)

p.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text/plain", event.target.id)
})

container.addEventListener("dragover", function(event){
    event.preventDefault()
})
container.addEventListener("drop",function(event){
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