let elementDiv = document.getElementsByTagName("div")[0]
console.log(elementDiv);

let elementDivTwo = document.getElementById("practiceDiv")
console.log(elementDivTwo);

let ulP = document.getElementsByTagName("ul")[0];
console.log(ulP);

let ulPTwo = document.querySelector("ul");
console.log(ulPTwo);

let lipP = document.getElementsByTagName("li")[1];
console.log(lipP);

let liPTwo = document.querySelectorAll("li")[1].innerHTML
console.log(liPTwo);


// let elements = document.querySelectorAll('ul > li:last-child');

// for (let elem of elements) {
//      alert(elem.innerHTML); // "test", "passed"
// }


// Exercise 2

let practiceDIV = document.querySelectorAll("div")
console.log(practiceDIV);

let practiceDivTwo = document.getElementsByTagName("div")[0].innerHTML
console.log(practiceDivTwo);

let ulpractice = document.getElementsByTagName("ul")

for (const ul of ulpractice) {
    
    for (let element of ul.children) {
    if (element.matches("li")) {
        console.log(element.innerHTML);
        
    }
}
}

let liPractice = document.querySelectorAll('ul > li:first-child')

for (const li of liPractice) {
    console.log(li.innerHTML);
    
}

let newInput = document.getElementById("dI")

console.log(`hreflang = ${dI.hreflang}`);
console.log(`href = ${dI.href}`);
console.log(`rel = ${dI.rel}`);
console.log(`target = ${dI.target}`);
console.log(`type = ${dI.type}`);


