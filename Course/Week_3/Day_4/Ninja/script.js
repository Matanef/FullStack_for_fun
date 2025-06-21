// Excercise 1

let persononeyear = 1930
let persontwoyear = 1965

let younger = Math.max(persononeyear, persontwoyear)
let older = Math.min(persononeyear, persontwoyear)

let agedifference = younger - older
console.log(agedifference);

let halfage = younger + agedifference
console.log(halfage);

if (agedifference ===0){
    console.log(`both people are at the same age`);
    
}

// Excercise 2

// let userzipcode = prompt("Please enter your Zip code to procceed").trim();
// let zipcodelength = userzipcode.length
// console.log(zipcodelength);

// if (zipcodelength !== 5) {
//     console.log("Error: Zipcoode must be a 5 numbers string");
    
// } else if (userzipcode.includes(" ") ) {
//     console.log("Zipcode must not contain spaces");
    
// } else if (isNaN(userzipcode)) {
//     console.log("Zipcode must contain only numbers");
    
// }else {
//     console.log("Success");
    
// }


// if (/^\d{5}$/.test(userzipcode)) {
//     console.log("Success");
    
// }else {
//     console.log("Error: invalid zipcode");
    
// }

// Excercise 3

let userword = prompt("Please enter a word")
if (/[aeiouAEIOU]/.test(userword)) {
    userword = userword.replace(/[aeiouAEIOU]/gi, "X")
    console.log(userword);
    
    
}

console.log(userword);
