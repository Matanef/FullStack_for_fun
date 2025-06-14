let addressNumber = 19
let addressStreet = 'Nitzana'
let country = 'Israel'

let globalAddress = 'i live at ' + addressStreet + " " + addressNumber + " " + country

console.log(globalAddress)


console.log("5"-3)

let op = "me"
console.log(isNaN(op))

let opOne = "10"
let opTwo = 5

let opThree = opOne + opTwo
console.log(opThree);
let whatis = typeof(opThree)
console.log("what is", whatis);

console.log(isNaN(opThree))


console.log('===================');


let birthYear = 1984
let futureYear = 2034
let age = futureYear -birthYear
console.log(age);
console.log('i will be ' + age + ' in ' + futureYear );

console.log('===================');

let opBoolean = Boolean(futureYear < birthYear)
console.log(opBoolean);


let user1 = "John"
let user2 = "Bill"
let user3 = "Nancy"

let users = ["John", "Bill", "Nancy"]

console.log(users[0]);

console.log(typeof(users));

let userTest1 = users[1]
console.log("He's name is " + userTest1);

let newUsers = [
    ["Matan", "Dana", "Shirly", "Rafi"], ["Lanou", "Choopy"], ["Blackie"]
]

console.log(newUsers[0][2]);
console.log(newUsers[1][0]);

newUsers[1][1] = "Doobi"
console.log(newUsers[1]);
console.log(newUsers[1].length);

newUsers[1].push('Zredinka')
console.log(newUsers[1]);

newUsers[2].push("Choopy", "Dzimi")
console.log(newUsers[2]);


// newUsers[2].pop()
// console.log(newUsers[2]);

let deletedUsers = newUsers[2].splice(2,1, "Bitkes")
console.log(deletedUsers);

console.log(newUsers[2]);


let favorite = newUsers[2].slice(1)
console.log(newUsers[2]);
console.log(favorite);
console.log(newUsers[2]);

let favorite2 = newUsers[2].slice(1,3)
console.log(newUsers[2]);
console.log(favorite2);
console.log(newUsers[2]);

let newUsersStringOne = newUsers.toString()
console.log(newUsersStringOne);

let newUsersStringTwo = newUsers[1].toString()
console.log(newUsersStringTwo);
