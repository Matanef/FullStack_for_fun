let hOne = document.getElementsByTagName("h1")[0]
let innertext = hOne.innerHTML
console.log(innertext);

let allPara = document.getElementsByTagName("p")
let lastPara = allPara[allPara.length-1]
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
    let allPara = document.getElementsByTagName("p")
    for (let p of allPara) {
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
    let strong = document.querySelectorAll("strong").value
     
}