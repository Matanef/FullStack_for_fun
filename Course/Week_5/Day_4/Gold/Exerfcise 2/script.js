let container = document.getElementById("container")
let p = document.createElement("p")
p.innerHTML = "I am a paragraph"
p.setAttribute("draggable", "true")
p.setAttribute("id", "dragPara1")
p.classList.add("dragPara")
container.appendChild(p)
container.classList.add("container")

p.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text/plain", event.target.id)

})

p.addEventListener("drag", function(event){
    p.innerHTML = `dragging`
    // p.style.fontSize = "12px"
})

p.addEventListener("dragend", function(event){
    // p.style.fontSize = "50px"
    p.innerHTML = `I am a paragraph`
})

container.addEventListener("dragover", function(event){
    event.preventDefault()
    
})
container.addEventListener("drop",function(event){
    event.preventDefault()
    let id = event.dataTransfer.getData("text/plain");
    let dragged = document.getElementById(id);
    let rect = container.getBoundingClientRect();
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    dragged.style.position = "absolute"
    dragged.style.left = `${x}px`
    dragged.style.top = `${y}px`
    let fontSize = Math.max(10, Math.min(100, x/10))
    dragged.style.fontSize = `${fontSize}px`
    if (dragged.parentNode !== container){
        container.appendChild(dragged)
    }

})