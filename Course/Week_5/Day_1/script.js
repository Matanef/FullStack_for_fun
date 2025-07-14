function insertRow() {
    let table = document.getElementById("sampleTable")
    let currentRowCount = table.rows.length +1;
    
    
    
    let row = table.insertRow(2)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    cell1.innerHTML = `Row${currentRowCount} Cell1`
    cell2.innerHTML = `Row${currentRowCount} Cell2`
}

let button = document.getElementById("jsstyle")
console.log("Button element:", button);

button.addEventListener("mouseover", () =>{
    console.log("mouse was hovering over the button");
})


function changeStyle() {
button.addEventListener("mouseover", ()=> {
    button.classList.add("hovered")
        
})
button.addEventListener("mouseout", ()=> {
    button.classList.remove("hovered")
        
})


}

let div = document.getElementById("divstyle")
let buttonThree = document.getElementById("jsstyletwo")

function changeDiv() {
    div.addEventListener("mouseover", (e) => {
    div.classList.add("divstyle")
})
    div.addEventListener("mouseout", (e) => {
    div.classList.remove("divstyle")
})
}


buttonThree.addEventListener("mouseover", (e)=> {
    buttonThree.classList.add("buttonstyle")
    console.log("i was hovered");
    
    // e.stopPropagation()

})
buttonThree.addEventListener("mouseout", (e)=> {
    buttonThree.classList.remove("buttonstyle")
    console.log("i was hovered off");
    
    // e.stopPropagation()

})
buttonThree.addEventListener("click", (e)=> {
    console.log("button was clicked");
    e.stopPropagation()
})

div.addEventListener("click", (e)=> {
    console.log("div was clicked");
    
})




function getvalue(event) {
    event.preventDefault();
    let form = document.getElementById("form1")
    let inputone = form.fname.value
    let inputtwo = form.lname.value
    let result = document.getElementById("result")
    
    result.innerHTML = `${inputone} ${inputtwo}`
}