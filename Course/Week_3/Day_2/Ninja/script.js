//Excercise 1

5 >= 1
    console.log(5 >= 1);
    //true

    0 === 1
console.log(0 === 1);
//false

    4 <= 1
    console.log(4 <= 1);
    
    1 != 1
    console.log(1 != 1);
    
    "A" > "B"
    console.log("A" > "B");
    
    "B" < "C"
    console.log("B" < "C");
    
    "a" > "A"
    console.log("a" > "A");
    
    "b" < "A"
    console.log("b" < "A");
    
    true === false
    console.log(true === false);
    
    true != true
    console.log(true != true);

    //Excercise 2
// let userstring = prompt(`Please enter several numbers separated by commas`);
// let numberarray = userstring.split(",").map(Number)
// console.log(typeof(userstring));
// console.log(numberarray);

// sum=0;
// for (let index = 0; index < numberarray.length; index++) {
//     const element = numberarray[index];
//     sum += element
// }

// console.log(sum);

    
// Excercise 3

// let userInput = prompt('Please enter a sentence containing the word "Nemo"')
// console.log(userInput);
// let sentenceArray = userInput.split(" ");
// console.log(sentenceArray);
// for (let index = 0; index < sentenceArray.length; index++) {
//     const element = sentenceArray[index];
//     if (element == "Nemo" || element == "nemo") {
//         let indexofnemo = sentenceArray.indexOf(element)
//         console.log(`I found Nemo at ${indexofnemo}`);
//     } else {
//         console.log(`I can't find Nemo`);
    

//     }
// }


// let userInput2 = prompt('Please enter a sentence containing the word "Nemo"')
// console.log(userInput2);

// let userindex = userInput2.indexOf("Nemo" && "nemo")
// console.log(userindex);

//Excercise 4

let userNumber = parseInt(prompt(`Please select a number`))
console.log(typeof(userNumber));
// if (usernumber<2) {
//     console.log(`boom`);
// } else  {
//     let boomsentence = "B" + "o".repeat(usernumber) + "m"
    
//     if (usernumber % 2 === 0 && usernumber %5 ===0) {
//         boomsentence = boomsentence.toUpperCase() + "!"
//     } else if (usernumber %5 ===0) {
//         boomsentence.toUpperCase()
//     } else if (usernumber % 2 === 0) {
//         boomsentence += "!"
//     }
//     console.log(boomsentence);
    
// }
let result = ""
if (userNumber < 2) {
    result = "Boom"
} else {
    result = "B" + "o".repeat(userNumber) + "m"
    if (userNumber % 2 === 0){
        result += "!"
    }
    if (userNumber %5 ===0) {
        result = result.toUpperCase()
    }
}
console.log(result);
