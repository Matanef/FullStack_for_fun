//Excercise 1
let sentence = ["my","favorite","color","is","blue"];
let stringSentence = sentence.join()
console.log(stringSentence);

let newSentence = stringSentence.replace(/,/g, " ")
console.log(newSentence);

//Excercise 2
let str1 = "mix";
let str2 = "pod";

newstr1 = str1.slice(0,2)
console.log(newstr1);

newstr2 = str2.slice(0,2)
console.log(newstr2);

let finishedstr1 = str1.replace(/mi/g, newstr2);
console.log(finishedstr1);

let finishedstr2 = str2.replace(/po/g, newstr1);
console.log(finishedstr2);


let restofstr1 = str1.slice(2)
console.log(restofstr1);

let restofstr2 = str2.slice(2)
console.log(restofstr2);

let swapedstr1 = newstr1 + restofstr2
console.log(swapedstr1);

let swapedstr2 = newstr2 + restofstr1
console.log(swapedstr2);


let str3 = str1 + " " + str2
console.log(str3);

let combined = `${str1} ${str2}`
console.log(combined);


//Excercise 3

let usernumberone = parseInt(prompt(`Please pick a number`))
let usernumbertwo = parseInt(prompt(`Please pick another number`))
let usercalcchoise = prompt(`Please select which action would you like to take`)
// if(isNaN(usernumberone || isNaN(usernumbertwo))){
//     alert(`You need to enter a valid number00`)
// } else if (usercalcchoise === `+`){
//     let sum = usernumberone + usernumbertwo
//     alert(`the sum of the numbers picked is ${sum}`)
// } else if (usercalcchoise === `-`) {
//     let subtraction = usernumberone - usernumbertwo;
//     alert(`the subtraction is ${subtraction}`)
// } else if (usercalcchoise === `*`) {
//     let multiplication = usernumberone * usernumbertwo;
//     alert(`result of multiplication ${multiplication}`)
// } else if (usercalcchoise === `/`) {
//     let division = usernumberone / usernumbertwo;
//     alert(`the division of ${usernumberone} with ${usernumbertwo} is ${division}`)
// }else {
//     alert(`This is not a valid action. please choose from the following: +, -, * or /`)
// }

switch (usercalcchoise) {
    case '+':
        alert(`Result: ${usernumberone + usernumbertwo}`)        
        break;

    case '-':
        alert(`Result: ${usernumberone - usernumbertwo}`)
        break;
    case '*':
        alert(`Result: ${usernumberone * usernumbertwo}`)
        break;
    case '/':
        alert(usernumbertwo != 0 
            ? `Result: ${usernumberone/usernumbertwo}`
            : "error: Division by zero is not allowed")
        default:
            alert("Invalid action. Choose +, -. * or /")

}




