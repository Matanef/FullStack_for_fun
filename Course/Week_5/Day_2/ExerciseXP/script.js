let hOne = document.getElementsByTagName("h1")[0]
let innertext = hOne.innerHTML
console.log(innertext);

let firstarticle = document.getElementsByTagName("article")[0]
let allParainfirstarticle = firstarticle.getElementsByTagName("p")
let lastPara = allParainfirstarticle[allParainfirstarticle.length-1]
lastPara.remove()

let hTwo = document.getElementsByTagName("h2")[0]
hTwo.addEventListener("click", function(event) {
    hTwo.classList.add("back")
})

let hThree = document.getElementsByTagName("h3")[0]
hThree.addEventListener("click", function(event) {
    hThree.classList.add("hide")
})

let button = document.getElementsByTagName("button")[0]
button.addEventListener("click", function(event) {
    let allParainfirstarticle = document.getElementsByTagName("p")
    for (let p of allParainfirstarticle) {
        p.classList.add("pback")
    }

})

hOne.addEventListener("mouseover", function(){
    let randomSize = Math.floor(Math.random() *101)
    hOne.style.fontSize = `${randomSize}px`
})

let secondP = document.getElementsByTagName("p")[1]
secondP.addEventListener("mouseover", function(){
    console.log("Hovered");
    secondP.classList.add("fade")
})


//exercise 2
let form = document.getElementsByTagName("form")[0]

    let usersAnswer = document.getElementsByClassName("usersAnswer")[0]
console.log(form);
form.addEventListener("submit", function(e){
    e.preventDefault()
    let newInputOne = document.getElementById("fname").value
    let newInputTwo = document.getElementById("lname").value
    if (newInputOne === "" || newInputTwo=== "") {
        alert("Please fill both of the fields")
        return;   
    }
    usersAnswer.innerHTML = `<li>${newInputOne}</li> <li>${newInputTwo}</li>`
})

//exercise 3
let allBoldItems;

function getBoldItems(){
    allBoldItems = document.querySelectorAll("p strong")
       
}
getBoldItems()
console.log(allBoldItems);

function highlight() {
    allBoldItems.forEach(element => {
        element.classList.add("bluesen")
    });
}



function returnItemsToDefault(){
        allBoldItems.forEach(element => {
        element.classList.remove("bluesen")
    });
}


function calculatingRadius(){
    let exponent = 3
    let formThree = document.getElementById("MyForm")

    formThree.addEventListener("submit", function(e){
        e.preventDefault();
        let radius = document.getElementById("radius").value
        let volumeField = document.getElementById("volume")
        volume = (4/3)*Math.PI*Math.pow(radius, exponent)
        volumeField.value = volume
        console.log(`volume: ${volume}`);
        
    })
    
    
    

}

calculatingRadius()