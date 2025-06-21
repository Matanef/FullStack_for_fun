let sentence = "The movie is not that bad, I like it";
let editedsentence = sentence.replace(",","")
console.log(editedsentence);


let sentenceArray = editedsentence.split(" ")
console.log(sentenceArray);

let wordNot = sentenceArray.indexOf("not");
console.log(wordNot);
let wordBad = sentenceArray.indexOf("bad");
console.log(wordBad);

if (wordNot !== -1 && wordBad !== -1 && wordBad>wordNot) {
    sentenceArray.splice(wordNot, 3, "good" + ",")
    let sentencetostring = sentenceArray.join(" ")
    console.log(sentencetostring);
}else {
    console.log(sentence);
    
}


// if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
//   let toReplace = sentence.slice(wordNot, wordBad + "bad".length); // 'not that bad'
//   let newSentence = sentence.replace(toReplace, "good");
//   console.log(newSentence);
// } else {
//   console.log(sentence);
// }




// if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
//   // Build the final sentence in 3 parts:
//   let before = sentence.slice(0, wordNot);
//   let after = sentence.slice(wordBad + 3); // 3 is length of "bad"
//   let newSentence = before + "good" + after;
//   console.log(newSentence);
// } else {
//   console.log(sentence);
// }