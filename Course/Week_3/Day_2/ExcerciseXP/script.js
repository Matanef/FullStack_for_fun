//Excercise_1

let favoriteFood = "Banana"
let favoriteMeal = "Breakfast"

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);


//Excercise_2

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength  = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

let myWatchedSeriesSentence = `I watcth ${myWatchedSeries}`
console.log(myWatchedSeriesSentence);

let myWatchedSeriesSentenceTwo = "";

for (let index = 0; index < myWatchedSeries.length; index++) {
    if (index===myWatchedSeriesLength-1 && index!==0){
        myWatchedSeriesSentenceTwo += "and" + " " + myWatchedSeries[index];
    } else {
        myWatchedSeriesSentenceTwo +=  myWatchedSeries[index] + ",";
    }    
}
console.log(myWatchedSeriesSentenceTwo);
console.log(`i watch ${myWatchedSeriesLength} series: ${myWatchedSeriesSentenceTwo}`);

let myWatchedSeriesSentenceThree = " "

for (let index = 0; index < myWatchedSeriesLength; index++) {
    if (index===myWatchedSeriesLength-1 && myWatchedSeriesLength>1) {
        myWatchedSeriesSentenceThree += "and " + myWatchedSeries[index];
    } else {
        myWatchedSeriesSentenceThree +=  myWatchedSeries[index];
        if (index < myWatchedSeriesLength -2) {
            myWatchedSeriesSentenceThree += ", "
        } else {
            myWatchedSeriesSentenceThree += " "
        }
    }   
    
}
console.log(`i watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentenceThree}`);

let bangIndex = myWatchedSeries.indexOf("the big bang theory")
console.log(bangIndex);

let newWtchedSeriesArray = myWatchedSeries.splice(2,1,"Friends")
console.log(newWtchedSeriesArray);
console.log(myWatchedSeries);

myWatchedSeries.push("Bojack Horseman")
console.log(myWatchedSeries);


// let biggerwatchseries = myWatchedSeries.push("Bojack Horseman");
// console.log(biggerwatchseries);

// console.log(myWatchedSeries);

myWatchedSeries.unshift("Battlestar Galactica")
console.log(myWatchedSeries);

myWatchedSeries.splice(1,1)
console.log(myWatchedSeries);

console.log(myWatchedSeries[1][2]);

console.log(myWatchedSeries);

// Excercise_3

let celsiusTemp = 25
let farenheitTemp = celsiusTemp*(9/5) +32
console.log(`${celsiusTemp}\u00B0 Celsius is ${farenheitTemp}\u00B0 Farenheit`);

// Excercise 4

let c;
let a = 34;
let b = 21;
console.log(a+b) //first expression
// Prediction: 55
// Actual:

a = 2;

console.log(a+b) //second expression
// Prediction: 23
// Actual:
console.log(c);

console.log(3 + 4 + '5');
// Prediction: 75
// Actual:

//Excercise 5
console.log(typeof(15));

// Prediction: number
// Actual:

typeof(5.5)
// Prediction: number
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof("hello")
// Prediction:string
// Actual:

typeof(true)
console.log(typeof(true));

// Prediction: boolean
// Actual:

typeof(1 != 2)
console.log(typeof(1 != 2));
// Prediction: true
// Actual:

"hamburger" + "s"
console.log("hamburger" + "s");

// Prediction: hamburgers
// Actual:

"hamburgers" - "s"
console.log("hamburgers" - "s");

// Prediction: errror typeof
// Actual:NaN

"1" + "3"
console.log("1" + "3");

// Prediction: 13
// Actual:

"1" - "3"
console.log("1" - "3");

// Prediction: NaN
// Actual:-2

"johnny" + 5
console.log("johnny" + 5);

// Prediction:johnny5
// Actual:

"johnny" - 5
console.log("johnny" - 5);
// Prediction:error NaN
// Actual:

99 * "hello"
console.log(99 * "hello");
// Prediction:NaN
// Actual:

1 != 1
console.log(1 != 1);
// Prediction:False
// Actual:

1 == "1"
console.log(1 == "1");

// Prediction: NaN
// Actual:true

1 === "1"
console.log(1 === "1");

// Prediction: NaN
// Actual:false

// Excercise 6

5 + "34"
// Prediction: 534
// Actual:

5 - "4"
// Prediction: 1
// Actual:

10 % 5
// Prediction: 2
// Actual:

5 % 10
// Prediction: 0.5
// Actual:

" " + " "
// Prediction: 2 blank spaces
// Actual:

" " + 0
// Prediction: 0
// Actual:

true + true
console.log(true + true);

// Prediction: 2
// Actual:

true + false
console.log(true + false);
// Prediction:1
// Actual:1

false + true
console.log(false + true);

// Prediction:1
// Actual:

false - true
console.log(false - true);
// Prediction:-1
// Actual:

!true
console.log(!true);
// Prediction: false
// Actual:

3 - 4
// Prediction: -1
// Actual: