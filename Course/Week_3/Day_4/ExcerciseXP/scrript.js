let x = 5;
let y = "d";

if (x>y) {
    console.log(`the number ${x} is bigger then ${y}`);

} else if (y>x) {
    console.log(`the number ${y} is bigger then ${x}`);
    
}else {
    console.log(`please enter a valid number`);
    
}

//Excercise 2

let newDog = "Chihuahua"
let newDogLength = newDog.length

console.log(newDogLength);
console.log(newDog.toUpperCase());
console.log(newDog.toLocaleLowerCase());

if (newDog == "Chihuahua") {
    console.log(`I love Chihuahuas, it’s my favorite dog breed`);
}else {
    console.log(`I dont care, I prefer cats`);  
}

// excercise 3

// let userNumber = parseInt(prompt('Please enter a number'))
// if (userNumber % 2===0) {
//     console.log(`the number is ${userNumber} and is even `);    
// } else {
//     console.log(`the number is ${userNumber} and is Odd `);
    
// }

//excercise 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let usersLength = users.length
console.log(usersLength);


if (usersLength === 0) {
    console.log(`no users connected`);
} else if (usersLength === 1) {
    console.log(`${users[0]} is connected`);
}else if (usersLength === 2) {
    console.log(`The users ${users[0]} and ${users[1]} are connected`);
} else if (usersLength > 2) {
    let additionalusers = usersLength - 2
    console.log(`The users ${users[0]} and ${users[1]} and ${additionalusers} are connected`);  
}
    
