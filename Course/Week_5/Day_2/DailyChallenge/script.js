// let form = document.getElementById("libform")
// form.addEventListener("submit", generateStory)

// function generateStory(e) {
//     e.preventDefault()
//     let nounValue = document.getElementById("noun").value
//     let adjectiveValue = document.getElementById("adjective").value
//     let personValue = document.getElementById("person").value
//     let verbValue = document.getElementById("verb").value
//     let placeValue = document.getElementById("place").value
//     let button = document.getElementById("lib-button")

//     if (!nounValue || !adjectiveValue || !personValue || !verbValue || !placeValue) {
//         alert("Please fill in AALL the fields")
//         return;        
//     }

//     let story = `${personValue} went to ${placeValue} with a ${adjectiveValue} ${nounValue}, and decided to ${verbValue} there`;
//     document.getElementById("story").textContent = story

// }


const storyTemplates = [
  (noun, adjective, person, verb, place) => `${person} found a ${adjective} ${noun} in ${place} and used it to ${verb}.`,
  (noun, adjective, person, verb, place) => `Once upon a time, ${person} went to ${place} with nothing but a ${adjective} ${noun}. They decided to ${verb}.`,
  (noun, adjective, person, verb, place) => `In ${place}, ${person} saw a ${noun} that was incredibly ${adjective}. Naturally, they had to ${verb}.`
];

function shuffleStory(e) {
    e.preventDefault()
    let nounValue = document.getElementById("noun").value
    let adjectiveValue = document.getElementById("adjective").value
    let personValue = document.getElementById("person").value
    let verbValue = document.getElementById("verb").value
    let placeValue = document.getElementById("place").value
    if (!nounValue || !adjectiveValue || !personValue || !verbValue || !placeValue) {
        alert("Please fill in AALL the fields")
        return;        
    }
    let randomIndex = Math.floor(Math.random()* storyTemplates.length)
    let newStory = storyTemplates[randomIndex](nounValue,adjectiveValue, personValue, verbValue, placeValue)
    document.getElementById("story").textContent = newStory
}

document.getElementById("shuffle-button").addEventListener("click", shuffleStory)