
// let userlanguage = prompt('which language do you speak')
// let lowecaselang = userlanguage.toLocaleLowerCase()
// console.log(lowecaselang);


// switch (lowecaselang) {
//     case `french`:
//         console.log(`Bonjour`);
//         break;
//     case `english`:
//         console.log(`Hello`);
//         break;
//     case `hebrew`:
//         console.log(`Shalom`);
//         break;
//     default:
//         console.log(`01110011 01101111 01110010 01110010 01111001`);
//         break;
// }

//Excercise 2

// let usergrade = parseInt(prompt(`Please enter your grade in numbers`))

// if (usergrade> 90) {
//     console.log(`A`);
// } else if (usergrade<=90 && usergrade>80) {
//     console.log(`B`);
// }else if (usergrade<= 80 && usergrade >=70){
//     console.log(`C`);
// }else {
//     console.log(`D`);
// }

// Excercise 3

let userverb = prompt(`Please enter a Verb`);
let userVerbLength = userverb.length;
console.log(userVerbLength);

for (let index = 0; index < userverb.length; index++) {
    const element = userverb[index];

}

if (userVerbLength>= 3 && !userverb.endsWith("ing")) {
    userverb = userverb + "ing"
} else if (userVerbLength>= 3 && userverb.endsWith("ing")) {
    userverb = userverb + "ly"
}else{
    userverb = userverb
}


console.log(userverb);
