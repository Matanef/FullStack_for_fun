let box = document.getElementById("box")
box.setAttribute("draggable", "true")
box.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text/plain", event.target.id)
})

let target = document.getElementById("target")
target.addEventListener("dragover", function(event){
    event.preventDefault();
})

target.addEventListener("drop",function(event){
    event.preventDefault()
    let data = event.dataTransfer.getData('text/plain')
    let draggedElement = document.getElementById(data)

    let rect = target.getBoundingClientRect();
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top

    draggedElement.style.left = `${x}px`
    draggedElement.style.top = `${y}px`

    if (draggedElement.parentNode !== target){
        target.appendChild(draggedElement)
    }
    console.log("Current parent:", draggedElement.parentNode.id);
    console.log("Target container:", target.id);
})
