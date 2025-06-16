//Excercise_1

let numbers = [123, 8409, 100053, 333333333, 7]
let numbersDevidedByThree = []

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (numbers[index]%3 ===0 ) {
        numbersDevidedByThree.push(numbers[index])
        console.log(`${element}`);
        
    } else {

    }
}
console.log(numbersDevidedByThree);


//Excercise_2

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

// let userInput = prompt("Please enter a name")
// if (userInput===guestList[key]) {
//     console.log(`Hello, my name is ${guestList[key]}`);
    
// }
// let userInput = prompt("Please enter a name")

// for (const name in guestList) {
//     if (name===userInput) {
//         console.log(`Hi, My name is ${name} and i'm from ${guestList[name]}`);
//     } else {
//         console.log(`Hi, I'm a guest`);
        
//     }
// }

// Excercise_3

let age = [20,5,12,43,98,55];

let largest = age[0]

let sum = 0;
for (let i = 0; i < age.length; i++) {
    const element = age[i];
    sum += element
    
}
console.log(sum);



for (let index = 0; index < age.length; index++) {
    if (age[index]>largest) {
        largest=age[index]
        
    }
}
console.log(largest);
