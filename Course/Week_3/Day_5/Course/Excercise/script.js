let arr = [1, 4, 7, 10]
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}


for (let index = 0; index <= 15; index++) {
    if (index % 2===0) {
        console.log(`this number is an even number ${index}`);
    }else {
        console.log(`this number is an odd number ${index}`);
        
    }
        

    
}

let person = {fname:"John", lname:"Doe", age:25};
for (let x in person) {
  console.log(x) //fname lname age
  console.log(person[x]) // John Doe 25
}

// let colors = ["blue", "yellow", "red"];

// for (let i in colors) {
//    console.log(i); //0 1 2
//    console.log(colors[i]) //blue yellow red
// }

// let colors = ["blue", "yellow", "red"];

// for (let i of colors) {
//    console.log(i); // logs blue, yellow, red
// }

// let i = 0;
// do {
//   console.log("The number is " + i)
//   i++;
// }
// while (i < 10);




let names= ["john", "sarah", 23, "Rudolf",34]

// for (const element of names) {
//     if (isNaN(element) ) {
//         console.log(element.charAt(0).toUpperCase() + element.slice(1));
//     }else {

//     }
    
// }

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    while (isNaN(element)) {
        console.log(element);
        
    }
    
}