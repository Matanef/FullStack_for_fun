function isBlank(userInput) {
return userInput === ""
    
}
let isBlankResult = isBlank("")
console.log(isBlankResult);


// function abbrevName(nameInput){
//     let string = nameInput
//     let nameArray = string.split(" ")
//     let firstName = nameArray[0]
//     let sureName = nameArray[1]
//     if (sureName.length > 1) {
//         let firstletter = sureName[0]
//         return firstName + " " + firstletter + "."
//     }
// }

// let abbrevfunction = abbrevName("Matan Efrati")
// console.log(abbrevfunction);


// function abbrevName(nameInput) {
//     let [firstname, lastname] = nameInput.split(" ");
//     if (!lastname) {
//         return firstname
//     } else {
//         return firstname + " " + lastname[0] + "."
//     }
    
    
// } 
// let abbrevfunction = abbrevName("Matan Efrati")
// console.log(abbrevfunction);

function swapCase(sentence) {
    let newSentence=[];
    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i];
        if (letter === letter.toUpperCase()) {
            newSentence += letter.toLowerCase()
        } else {
            newSentence += letter.toUpperCase()
        }
        
        
    }
    return newSentence
}

let swapcasefinal = swapCase("Blah BlAh")
console.log(swapcasefinal);


function isOmniPresent(numAarrays, omniNumber) {
    for (let i = 0; i < numAarrays.length; i++) {
        const subArray = numAarrays[i];
        if (!subArray.includes(omniNumber)) {
            return false;
        }

    }
    return true
}
let isOmniPresentFinal = isOmniPresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)
console.log(isOmniPresentFinal);
