let myText = document.getElementById("myText")

myText.classList.add("colorText")
console.log(myText.classList.contains(`colorText`));


myText.classList.add(`boldText`)
console.log(myText.classList);


let text = document.getElementById("text")

text.classList.add('fontFamily')
text.classList.add('boldText')
text.classList.add('bigText')
console.log(text.classList);


let firstForm = document.forms.dogform;
let firstFormPetName = document.forms[1].petname;
let firstFormPetAge = document.forms[1].petage
console.log(firstForm);
console.log(firstFormPetName);
console.log(firstFormPetAge);

let personForm = document.forms.personform;
let firstElement = personForm.elements.age;

console.log(firstElement);

let userForm = document.forms.user
console.log(userForm);

let userFormTwo = document.getElementById(`user`)
console.log(userFormTwo);

let userFormThree = document.forms[3]
console.log(userFormThree.elements.login);

let formFieldset = userForm.elements.userFields;
console.log(formFieldset);

document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    formData.forEach(function(value,key){
        console.log(`${key}: ${value}`);
        
    })
})

const names = ["matan", "sarah", "david", "ron"];
let newNamesArray = []
names.forEach(function(value){
    let capitalized = value.charAt(0).toUpperCase() + value.slice(1)
    newNamesArray.push(capitalized)
})
console.log(newNamesArray);

let form = document.forms[5];
let ageElems = form.elements.age;
console.log(ageElems)
// RadioNodeList(2)
//  0: input
//  1: input
//  length: 2
console.log(ageElems[1].value); // "10"


let dropdown = document.getElementById(`school-type`);
let selected = Array.from(dropdown.options).filter(option =>option.selected).map(option => option.value)
console.log(selected);


let option = new Option("Work", "Work", true,true)
dropdown.add(option)

selected = Array.from(dropdown.options).filter(option => option.selected).map(option => option.value)
console.log(option);

let optionPre = new Option("Primary-School", "Primary-School", true,true)
dropdown.add(option)

dropdown.insertBefore(optionPre, dropdown.firstChild)
console.log(optionPre);
console.log(dropdown);

// dropdown.remove(3)
// console.log(dropdown);


// for (let i = 0; i < dropdown.length; i++) {
//     const element = dropdown[i];
//     if (dropdown.options[i].value === "college") {
//         dropdown.remove(i)
//     }
    
// }
// console.log(dropdown);

dropdown.selectedIndex = 3
dropdown.remove(dropdown.selectedIndex)
console.log(dropdown);

let button = document.getElementById(`button`)
button.addEventListener("click", alertChoice)


function alertChoice() {
    alert(`User Choise is: ${dropdown.value}`)
}