let form = document.getElementById("form")
let input = document.getElementById("inputfield")
let button = document.getElementById("submitButton")
let list = document.getElementsByClassName("list")[0]
let clearButton = document.getElementById("clear")


let todoList = []
let taskIdCounter = 0



button.addEventListener("click", addItem)


function addItem(event){
    event.preventDefault()
    let inputValue = input.value.trim()
    let lettersRegex = /^[A-Za-z]+$/
    if (!inputValue || !lettersRegex.test(inputValue)) {
        alert("input invalid")
        return
    }
    if (todoList.some(task => task.text.toLowerCase() === inputValue.toLowerCase())){
        alert("This item already exist in the list")
        return
    }


    let newTask = {
    task_id: taskIdCounter++,
    text: inputValue,
    done: false
    }
    todoList.push(newTask)
    console.log(todoList);
    
    let liList = document.createElement("li");
    liList.setAttribute("data-task-id", newTask.task_id)

    let xIcon = document.createElement("i")
    xIcon.className = "fa-solid fa-x"
    xIcon.style.cursor = "pointer"
    xIcon.style.marginRight = "10px"
    xIcon.addEventListener("mousedown", function() {
        deleteTask(newTask.task_id)
    })

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.addEventListener("change", function(){
        doneTask(newTask.task_id, checkbox, liList)
    })


let span = document.createElement("span")
    span.textContent = ` ${newTask.task_id +1}. ${inputValue}`

    liList.appendChild(xIcon)
    liList.appendChild(checkbox)
    liList.appendChild(span)
    list.appendChild(liList)


    input.value = ""

}


clearButton.addEventListener("click", function() {
    todoList = []
    list.innerHTML = ""
    taskIdCounter = 0
    
})


function deleteTask(taskId){
    todoList = todoList.filter(task => task.task_id !== taskId)
    let liToRemove = document.querySelector(`[data-task-id='${taskId}']`)
    if (liToRemove) liToRemove.remove()
    console.log(todoList);
    
}

function doneTask(taskId, checkbox, liElement) {
    let task = todoList.find(t => t.task_id === taskId)
    if (task) {
        task.done = checkbox.checked
        if (task.done) {
            liElement.style.color = "red"
            liElement.style.textDecoration = "line-through"
        } else {
            liElement.style.color = "black"
            liElement.style.textDecoration = "none"
        }
    }
}

