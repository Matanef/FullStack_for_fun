let pets = ['cat','dog','fish','rabbit','cow']
console.log(pets);


console.log("Slice ===>");

let dogTwo = pets.slice(1,2)
console.log(dogTwo);

// console.log("Splice ===>");

// let dog = pets.splice(1,1)
// console.log(dog);

let petsTwo = pets.splice(3,1,"horse")
console.log(petsTwo);
console.log(pets);

let arrayLength = pets.length
console.log(arrayLength);
