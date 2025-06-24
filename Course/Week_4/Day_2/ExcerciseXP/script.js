//Excercise 1

function infoAboutMe(params) {
    console.log(`My name is Matan and I'm learning`);
    
}
infoAboutMe()


function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`the persons name is ${personName}, he's age is ${personAge} and he's favorite color is ${personFavoriteColor}`);
    
}

infoAboutPerson("Matan", 40, "Blue")
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


//Excercise 2


// function calculateTip() {
//     let billAmount = parseInt(prompt("Please enter the amount of the bill"));
//     if (billAmount<50) {
//         let tip = billAmount*0.2
//         let finalAmount = billAmount+tip
//         return finalAmount
//     } else if (billAmount>=50 && billAmount<=200) {
//         let tip = billAmount*0.15
//         let finalAmount = billAmount+tip
//         return finalAmount       
//     } else{
//         let tip = billAmount*0.1
//         let finalAmount = billAmount+tip
//         return finalAmount 
//     }
    
// }
// let finalAmount = calculateTip()
// console.log(finalAmount);


// Excercise 3
// let numArray = []
// function isDivisible() {
//     for (let index = 0; index < 500; index++) {
//         let element = index
//         if (element % 23 ===0) {
//             numArray.push(element)
//             return numArray;            ;
//         }
        
//     }
// }
// let blah = isDivisible()
// console.log(blah);

// function isDivisible() {
//     let numArray = []
//     let sum =0;

//     for (let index = 0; index <= 500; index++) {
//         if (index % 23 ===0) {
//              numArray.push(index)
//              sum += index           ;
//          }
        
//     }
//     console.log(`the numbers divisible by 23 are: ${numArray}`);
//     console.log(`the sum of the numbers is: ${sum}`);
    
     
// }

// isDivisible()

function isDivisible(divisor) {
    let numArray = []
    let sum =0;

    for (let index = 0; index <= 500; index++) {
        if (index % divisor ===0) {
             numArray.push(index)
             sum += index           ;
         }
        
    }
    console.log(`the numbers divisible by 23 are: ${numArray}`);
    console.log(`the sum of the numbers is: ${sum}`);
    
     
}

isDivisible(50)


// Excercise 4

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

console.log(stock.);


let shoppingList = ["Banana", "Orange", "Apple"]
let billAmount = 0;

function myBill() {
    for (let index = 0; index < shoppingList.length; index++) {
        const element = shoppingList[index].toLocaleLowerCase();
        if (element in stock) {
            stock[element] = element-1
            for (const key in prices) {
                if (Object.prototype.hasOwnProperty.call(prices, key)) {
                    const element = prices[key];
                    billAmount += element;       
                }
            }
            
            
        }
        
    }
    return billAmount
}
let billAmountInMoney = myBill()
console.log(billAmountInMoney);
