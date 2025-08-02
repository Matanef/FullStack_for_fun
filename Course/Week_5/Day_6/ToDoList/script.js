let container = document.getElementById("container")
let form = document.getElementById("myForm")
let button = document.getElementById("button")
let tasksContainer = document.getElementById("tasksContainer")



form.addEventListener("submit", addItem)

function createTaskItem(taskContent) {
    let li = document.createElement("li")
    li.setAttribute("id", "task")
    li.innerHTML = taskContent
    li.addEventListener("click", toggleTask);
    return li

}

function addItem(event) {
    event.preventDefault()
    let inputField = document.getElementById("inputField")
    let taskContent = inputField.value.trim()
    console.log(taskContent);
    if (taskContent !== "") {
        let taskItem = createTaskItem(taskContent)
        tasksContainer.appendChild(taskItem)
        inputField.value = "" 
    }
    
}

function toggleTask() {
    this.classList.toggle("completed")
}



