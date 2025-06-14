//excercise_1

const people = ["Greg", "Mary", "Devon", "James"];

const deletedPerson = people.splice(0,1)
console.log(deletedPerson);
console.log(people);

const switchedPersong = people.splice(2,1, "Jason");
console.log(switchedPersong);
console.log(people);

people.push("Matan");
console.log(people);

let maryIndex = people.indexOf("Mary");
console.log(maryIndex);

let peopleCopy = people.slice(1,3);
console.log(peopleCopy);

let fooIndex = people.indexOf("Foo");
console.log(fooIndex);
// this command returns -1 since "Foo" is not in the array


let last = peopleCopy[peopleCopy.length-1]
console.log(last);

console.log(peopleCopy);

for (let index = 0; index < peopleCopy.length; index++) {
    const element = peopleCopy[index];
    console.log(element);
    
    
}

console.log("+++++++++++++++++++++++++++");

console.log(people);

for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
    if (element === "Devon") {
        break
    }
}


//Excercise_2
let colors = ["Blue", "Green", "Red", "Black", "Yellow", "Cyan"]
let suffixArray = ["st", "nd", "rd", "th"]

for (let index = 0; index < colors.length; index++) {
    let position = index + 1;
    let suffix;
    
    if (position===1) {
        suffix = suffixArray[0]
    } else if (position===2){
        suffix = suffixArray[1]
    }else if (position===3){
        suffix = suffixArray[2]
    }else {
        suffix = suffixArray[3]
    }
    console.log(`My ${position}${suffix} Choise is ${colors[index]}`);
    
}


//Excercise_3

// let userNumber = prompt("Please Pick a Number")
// console.log(typeof(userNumber))
// console.log(userNumber);
// while (userNumber<10) {
//     userNumber = prompt("Please Pick a Number")
//     console.log(userNumber);
// }


//Excercise_4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


let floorAmount = building.numberOfFloors
console.log(floorAmount);


let aptPerFloor = building.numberOfAptByFloor.firstFloor
console.log(aptPerFloor);

let firstFloorApt = building.numberOfAptByFloor["firstFloor"]
console.log(firstFloorApt);

let thirdFloorApt = building.numberOfAptByFloor["thirdFloor"]
console.log(`thirdFloorApt ${thirdFloorApt}`);


// for (const key in building.numberOfAptByFloor) {
//     if ((building.numberOfAptByFloor, key)) {
//         const element = building.numberOfAptByFloor[key];
//         console.log(element);
        
//     }
// }

let secondTenant = building.numberOfRoomsAndRent["dan"][0]
console.log(secondTenant);

for (const key in building.numberOfRoomsAndRent) {
    if (key === "dan") {
        const element = building.numberOfRoomsAndRent[key][0];
        console.log(`Tenant name:${key}, Amount of Rooms ${element}`);
        
    }
}


