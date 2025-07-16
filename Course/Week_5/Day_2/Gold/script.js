

let selected = document.getElementById("genres");
let selectedvalue = selected.value;
console.log(selectedvalue);
let newOption = document.createElement("option")
newOption.value = "classis"
newOption.text = "Classic"
newOption.selected = true

selected.appendChild(newOption)

let button = document.getElementsByTagName("input")[0]
let form = document.getElementById("colorSelect")

button.addEventListener("click", removecolor)

function removecolor() {
    let selectedIndex = form.selectedIndex
    console.log(selectedIndex);
    
    if (selectedIndex !== -1) {
        form.removeChild(form.options[selectedIndex])
    }
}


let shoppingList = [];

let root = document.getElementById("root")
let formTwo = document.createElement("form")
formTwo.setAttribute("id", "myDynamicForm")

let inputField = document.createElement("input")
let addItemButton = document.createElement("button")
let ul = document.createElement("ul")

addItemButton.innerHTML = `Add Item`
formTwo.appendChild(inputField)
formTwo.appendChild(addItemButton)

formTwo.appendChild(ul)
addItemButton.addEventListener("click", addItem)
root.appendChild(formTwo)

function addItem(event) {
    event.preventDefault()
    let itemText = inputField.value
    if (itemText.trim === "") return;
    shoppingList.push(itemText);
    let li = document.createElement("li")
    li.textContent = itemText
    ul.appendChild(li);
    inputField.value = ""
    
}

let clearbutton = document.createElement("button")
clearbutton.innerHTML = "Clear All"
formTwo.appendChild(clearbutton)

function ClearAll(event) {
    event.preventDefault()
    shoppingList.length =0
}



