function playTheGame() {
    let userChoise = confirm("Would you like to play a game?")
    if (userChoise===true) {
        alert(`User Confirmed`)
        let userNumber = parseInt(prompt(`Please pick a number between 0 to 10`))
        if (isNaN(userNumber) || userNumber=="") {
            alert(`Sorry Not a number, Goodbye`)
            return;
        }else if(userNumber>10 || userNumber<0){
            alert(`Sorry it's not a good number, Goodbye`)
            return;
        }else {
            let computerNumber = Math.floor((Math.random() *10) + 1)
            console.log(userNumber);
            console.log(computerNumber);
            compareNumbers(userNumber, computerNumber);
        }
    }else {
        alert(`No problem, Goodbye`)
    }
}



function compareNumbers(userNumber,computerNumber){
    let numberOfGuesses = 0;
    while (numberOfGuesses<3) {
        if (userNumber>computerNumber) {
            numberOfGuesses++
            alert(`The number you selected is bigger then the computer's number, you have ${3-numberOfGuesses} attempts left`)
        } else if (userNumber<computerNumber) {
            numberOfGuesses++
            alert(`The number you selected is smaller then the computer's number, you have ${3-numberOfGuesses} attempts left`)
        } else{
            alert(`Winner`)
            return;
        }
        if (numberOfGuesses<3) {
            userNumber = parseInt(prompt("Try again: Enter a number between 0 and 10"));
            if (isNaN(userNumber)) {
                alert('Invalid Input, quitting...')
                return;
            }
        }  

    }
    alert(`Too many Atempts`)
}