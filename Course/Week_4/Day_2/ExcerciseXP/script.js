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

console.log(stock);


let shoppingList = ["Banana", "Orange", "Apple"]
let billAmount = 0;


function myBill() {
    for (let i = 0; i < shoppingList.length; i++) {
    // console.log(element);
        let fruit = shoppingList[i].toLowerCase()
        console.log(`this is the fruit ${fruit}`);
        console.log(`this is how many are in stock ${stock[fruit]}`);
        console.log(`this is the price of each fruit ${prices[fruit]}`);
        
        for (const fruit in stock) {
            const fruitamount = stock[fruit];
            const fruitPrice = prices[fruit]
            // console.log(key);
            if (fruit ===shoppingList[i].toLowerCase() && fruitamount>0) {
                stock[fruit] = stock[fruit] -1
                billAmount +=fruitPrice               
            }
        }
        
        }
        return billAmount
        
    
}

let billAmountInMoney = myBill()
console.log(billAmountInMoney);
console.log(stock);

// Excercise 5

// let changeArray = [0.01, 0.05, 0.10, 0.25]
// let calculation = 0

// function changeEnough(itemPrice, amountOfChange) {
//     for (let i = 0; i < changeArray.length; i++) {
//         const coins = changeArray[i];
//         for (let j = 0; j < amountOfChange.length; j++) {
//             const walletCoins = amountOfChange[j];
//             // console.log(walletCoins);    
//         }
//         // console.log(coins);
//         calculation += changeArray.map((element, index) => element*amountOfChange[index])
//         return calculation
        
        
        
//     }
//     if (calculation > itemPrice) {
//         return true
//     }else {
//         return false
//     }
// }
// let changeenoughoutput = changeEnough(5,[20, 30, 10, 25])
// console.log(changeenoughoutput);


let changeArray = [0.01, 0.05, 0.10, 0.25]
let calculation = 0

function changeEnough(itemPrice, amountOfChange) {


    for (let i = 0; i < changeArray.length; i++) {
        calculation += amountOfChange[i]*changeArray[i]
        
    }
    return calculation >= itemPrice
}

let final = changeEnough(6, [27, 10, 33,10])
console.log(final);


// Excerscise 6

let hotelPerNight = 140
let total = 0
function hotelCost(numberOfNights) {
    
    console.log(numberOfNights);
    if (isNaN(numberOfNights) || numberOfNights==="") {
        prompt("Please enter a valid number")
    }else {
       total = numberOfNights*hotelPerNight
        return total
    }
}
// let finalCost = hotelCost()
// console.log(finalCost);

function planeRideCost (destination) {
    do {
        destination = prompt("Please enter your destination").toLowerCase()
    
    } while (!isNaN(destination) || destination==="");
    console.log(destination);
    let destObject = {
        london: 183,
        paris: 220,
        Other: 300
    }
    if (destObject[destination]) {
        return destObject[destination]
    } else {
        return destObject.Other
    }
}

// let plc = planeRideCost()
// console.log(plc);

function rentalCarCost(numberOfRentalCar) {

    let rentalFee = 40;
    let discountDays = 10;
    let discount = 0.05;
    let rentFee = 0

        console.log(numberOfRentalCar);
    if (numberOfRentalCar<discountDays) {
        rentFee = rentalFee*numberOfRentalCar;
        return rentFee
    } else{
        rentFee = rentalFee*numberOfRentalCar - discount*rentalFee*numberOfRentalCar;
        return rentFee
    }
    }

// let rentalTotal = rentalCarCost()
// console.log(rentalTotal);


function totalVacationCost() {
    let totalVacationCost = 0;
    let numberOfNights = prompt("Please enter the amount of nights you will stay in the hotel")
    let finalCost = hotelCost(numberOfNights);
        do {
        destination = prompt("Please enter your destination").toLowerCase()
    
    } while (!isNaN(destination) || destination==="");
    let plc = planeRideCost(destination);
        do {
        numberOfRentalCar = prompt("Please enter your number of days to rent a car").toLowerCase()
    
    } while (isNaN(numberOfRentalCar) || numberOfRentalCar==="");
    let rentalTotal = rentalCarCost(numberOfRentalCar);
    totalVacationCost += finalCost+plc+rentalTotal
    return totalVacationCost
}

let finalTotalVacationCost = totalVacationCost()
console.log(finalTotalVacationCost);
