// function wordsInTheStars(words) {
//     let astlength = words.length;
//     console.log(astlength);
    
//     let stars = "*"
//     let sentenceArray = words.split(",")
//     console.log(sentenceArray);
//     for (let i = 0; i < astlength.length; i++) {
//         for (let j = 0; j < sentenceArray.length; j++) {
//             if (condition) {
//                 const word = sentenceArray[j];
//                 return word
//             }
//         }
        
        
        
//     }
    
// }

// let a = wordsInTheStars("Hello,World,in,a,frame")
// console.log(a);

// function wordsInTheStars(words) {
//     let sentence = words
//     console.log(sentence);
//     let sentenceArray = sentence.split(",")
//     console.log(sentenceArray);
//     let longestWordlength = 0
//     for (let i = 0; i < sentenceArray.length; i++) {
//         let word = sentenceArray[i]
        
//         if (word.length> longestWordlength) {
//             longestWordlength = word.length
//             console.log(`the longest word length is: ${longestWordlength}`);
//         }
//         let paddedWord = word.padEnd(longestWordlength)
//         console.log(`* ${paddedWord} *`);
//         // const element = sentenceArray[i];
//         // console.log(element);        
//     }
//     let border = "*".repeat(longestWordlength + 4)
//     console.log(border);
    
    
// }

// let a = wordsInTheStars("Hello,World,in,a,frame")
// console.log(a);


function wordsInTheStars(words) {
    let sentence = words
    console.log(sentence);
    let sentenceArray = sentence.split(",")
    console.log(sentenceArray);
    let longestWordlength = 0;
    for (let i = 0; i < sentenceArray.length; i++) {
        let word = sentenceArray[i];
        if (word.length > longestWordlength) {
            longestWordlength = word.length
            console.log(longestWordlength);  
        }
        console.log(word);
    }
    let border = "*".repeat(longestWordlength + 4)
    console.log(border);

    for (let i = 0; i < sentenceArray.length; i++) {
        const word = sentenceArray[i];
        let paddedWord = word.padEnd(longestWordlength)
        console.log(`* ${paddedWord} *`);
        
    }
    console.log(border);
}

let a = wordsInTheStars("Hello,World,in,a,frame")
console.log(a);