let userCount = parseInt(prompt("Please choose a number"))
let subtraction = 1
let remainingBottels = userCount
let sentence =  `${remainingBottels} Bottels of beer on the wall`

while (remainingBottels>0) {
    console.log(`${remainingBottels} bottle${remainingBottels === 1 ? '' : 's'} of beer on the wall`);
    console.log(`${remainingBottels} bottle${remainingBottels === 1 ? '' : 's'} of beer`)
    
    
    let pronoun = subtraction === 1 ? 'it' : 'them';
    console.log(`Take ${subtraction} down, pass ${pronoun} around`);

    remainingBottels -= subtraction

    if (remainingBottels<=0) {
        console.log('no more bottels on the wall');
        
    }else{
        console.log(`${remainingBottels} bottel${remainingBottels === 1 ? '' : 's'} of beer on the wall`);
        
    }

    
    subtraction++


        
    
}