function drinkCoffee(){
    console.log("The user drinks coffee in the morning");
}

drinkCoffee()


// function userInfo (username, userAge) {
//     console.log("My name is " + username + ", my age is " + userAge);
// }
// userInfo("Matan", 40)


// function agecalc (myAge) {
//     let mumsAge = myAge*2
//     let dadsAge = mumsAge*1.2
//     console.log(`my age is ${myAge}, my mum's age is ${mumsAge} and my dads age is ${dadsAge}`);
    
// }

// agecalc(40)

function agecalc (myAge) {
    let mumsAge = myAge*2
    let dadsAge = mumsAge*1.2
    let result = `my age is ${myAge}, my mum's age is ${mumsAge} and my dads age is ${dadsAge}`;
    return result
}

let sentence = agecalc(40)
console.log(sentence);


function mumreturn(myAge) {
    let mumage = myAge*2
    return mumage
}

let actualAge = mumreturn(40);
console.log(`my mums age is ${actualAge}`);
