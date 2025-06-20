const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

let adjustedarray = fruits.splice(0,1)
console.log(adjustedarray);
console.log(fruits);

let sortedArray = fruits.sort()
console.log(sortedArray);

fruits.push("Kiwi")
console.log(fruits);

fruits.splice(0,1)
console.log(fruits);

fruits.reverse()
console.log(fruits);


//excercise 2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let oranges = moreFruits[1][1]
console.log(oranges);


