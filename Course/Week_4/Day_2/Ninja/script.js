// function isEven() {
//     let randomNumber = Math.floor(Math.random()*100) +1
//     console.log(randomNumber);
//     for (let index = 0; index <= randomNumber; index++) {
//         if (index % 2 ===0) {
//             console.log(index);
            
//         }
        
//     }
    
// }
// let isEvenResult = isEven()
// console.log(isEvenResult);


//Excercise 2

function isAString(string) {
    let newStringeven = [];
    let newStringOdd = [];
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (i%2===0) {
            newStringeven += letter.toUpperCase()
            newStringOdd += letter
        } else {
            newStringOdd += letter.toUpperCase()
            newStringeven += letter
        }
        
    }
    return `${newStringeven} ${newStringOdd}`
}

let indexOfLetters = isAString("fgfttyuhf")
console.log(indexOfLetters);


//Excercise 3

// let palindromeWord = "kayak"

// function isPalindrome(word) {
//     for (let index = 0; index < word.length; index++) {
//         const letter = word[index];
//         console.log(letter);
//         if (word[index]!== word[word.length-1 -index]) {
//             return false

//         }else {
//             return true
//         }
//     }
// }
// let palindromeFunction = isPalindrome("kayak")
// console.log(palindromeFunction);

// Excercise 4

// function biggestNumberInArray(arrayNumber) {
//     let biggestnumber = Math.max(...arrayNumber)
//     return biggestnumber
// }

// let biggestresult = biggestNumberInArray([2,66,48,35,99,57])
// console.log(biggestresult);


// function isUnique(numarray) {
//     return [...new Set(numarray)];
    
// }

// let isUniqueFinal = isUnique([2,2,66,48,57,66,35,2,99,57])
// console.log(isUniqueFinal);


// function isUnique(numarray) {
//     let unique = []
//     for (let i = 0; i < numarray.length; i++) {
//         let uniqueNumber = numarray[i];
//         if (!unique.includes(uniqueNumber)) {
//             unique.push(uniqueNumber)            
//         }
        
//     }
//     return unique
// }

// let isUniqueFinal = isUnique([2,2,66,48,57,66,35,2,99,57])
// console.log(isUniqueFinal);

// function isUnique(numArray) {
//     uniqueArray = numArray.filter(n => n )
// }

// let isUniqueFinal = isUnique([2,2,66,48,57,66,35,2,99,57])
// console.log(isUniqueFinal);


// Excercise GPT

function isdivisible(numArray) {
    let sortedArray = numArray.filter(n => n%3===0)
    return sortedArray
}

let divisArray = isdivisible([3, 10, 12, 15, 22, 30, 7])
console.log(divisArray);


function fourLetterWord(nameArray) {
    let filterredArray = nameArray.filter(word => word.length>4);
    return filterredArray
}

let finalNameArray = fourLetterWord(["matan", "avi", "ron", "efrati", "bo"])
console.log(finalNameArray);


const pets = [
  { type: "dog", name: "Max" },
  { type: "cat", name: "Luna" },
  { type: "dog", name: "Buddy" },
];

function filterDogs() {
    let animals = pets.filter(pet => pet.type==="dog" )
    return animals
}

let filteredPets = filterDogs()
console.log(filteredPets);
