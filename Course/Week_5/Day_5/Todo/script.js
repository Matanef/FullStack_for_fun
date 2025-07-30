let form = document.getElementById("form")
let input = document.getElementById("inputfield")
let button = document.getElementById("submitButton")
let list = document.getElementsByClassName("list")[0]


let todoList = []

button.addEventListener("click", addItem)


function addItem(event){
    event.preventDefault()
    let inputValue = input.value
    let lettersRegex = /^[A-Za-z]+$/
    if (!inputValue || !lettersRegex.test(inputValue)) {
        alert("input invalid")
    }else if (todoList.includes(inputValue)){
        alert("this item already exist in the list")
    }
    else{
        todoList.push(inputValue)
        console.log(todoList);
        let liList = document.createElement("li")
        liList.innerHTML = `${inputValue}`
        list.appendChild(liList)
    }

}


