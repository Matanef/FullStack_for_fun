let userOneWord = prompt("Player 1, Please enter a word with at least 8 letters")
while (userOneWord.length<8) {
    userOneWord = prompt("the word must contain at leaset 8 letters ")
}

let wordArray = userOneWord.toLowerCase().split("");
let displayArray = new Array(wordArray.length).fill("*")


let numberOfAttempts = 0
let maxAttempts = 10

while (numberOfAttempts<maxAttempts && displayArray.includes('*')) {
    let guess = prompt("Player 2, guess a letter").toLowerCase();
    
    if (guess.length !== 1 || !guess.match(/[a-z]/)) {
        alert("Please enter a single letter")
        continue;
    }
    let correcttGuesses = false;
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i]===guess) {
            displayArray[i] =guess;
            correcttGuesses = true
        }
        
    }
    if (!correcttGuesses) {
        numberOfAttempts++;
        console.log(`Wrong guess. you have ${maxAttempts-numberOfAttempts}`);
        
    }
    console.log(displayArray.join(` `));
    
}

if (!displayArray.includes(`*`)) {
    console.log(`Congratz, you guessed the word`);
} else{
    console.log(`out of attempts, the word was ${userOneWord}`);
    
}

