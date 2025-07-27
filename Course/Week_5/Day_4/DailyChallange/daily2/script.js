function changeText () {
    let text = ["", ".", "..", "..."]
    let counter = 0
    let elem = document.getElementById("changeText")
    setInterval(change, 1000);
    function change() {
        elem.innerText= text[counter]
            counter ++
            if (counter >= text.length) {
                counter = 0
            }        
    }
}

changeText()


// let loadingArray = []
// let laodingCont = document.getElementById("loadingcont")
// for (let i = 0; i < laodingCont.length; i++) {
//     loadingArray.push(i);
//     console.log(loadingArray);
    
    
    
// }

let contArray = []
let loadingCont = document.getElementById("loadingcont").innerHTML
for (let i = 0; i < loadingCont.length; i++) {
    contArray.push(loadingCont)
    
}
console.log(contArray);


