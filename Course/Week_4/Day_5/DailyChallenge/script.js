let userCount = parseInt(prompt("Please choose a number"))
let subtraction = 1
let remainingBottels = userCount
let sentence =  `${remainingBottels} Bottels of beer on the wall`

while (remainingBottels>0) {
    console.log(`${remainingBottels} bottle${remainingBottels === 1 ? '' : 's'} of beer on the wall`);
    remainingBottels -= subtraction
    
}