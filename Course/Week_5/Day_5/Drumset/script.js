let container = document.getElementById("container")
let keysarea = document.getElementById("keysarea")
keysarea.style.display = "flex"


let keyA = document.createElement("div")
keyA.setAttribute("class", "key")
keyA.innerText = "A"
keysarea.appendChild(keyA)
let keyS = document.createElement("div")
keyS.setAttribute("class", "key")
keyS.innerText = "S"
keysarea.appendChild(keyS)
let keyD = document.createElement("div")
keyD.setAttribute("class", "key")
keyD.innerText = "D"
keysarea.appendChild(keyD)
let keyF = document.createElement("div")
keyF.setAttribute("class", "key")
keyF.innerText = "F"
keysarea.appendChild(keyF)
let keyG = document.createElement("div")
keyG.setAttribute("class", "key")
keyG.innerText = "G"
keysarea.appendChild(keyG)
let keyH = document.createElement("div")
keyH.setAttribute("class", "key")
keyH.innerText = "H"
keysarea.appendChild(keyH)
let keyJ = document.createElement("div")
keyJ.setAttribute("class", "key")
keyJ.innerText = "J"
keysarea.appendChild(keyJ)
let keyK = document.createElement("div")
keyK.setAttribute("class", "key")
keyK.innerText = "K"
keysarea.appendChild(keyK)
let keyL = document.createElement("div")
keyL.setAttribute("class", "key")
keyL.innerText = "L"
keysarea.appendChild(keyL)

function Boom(){
    let boom = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/boom.wav`);
    boom.play()
    keyA.style.backgroundColor = "red"
}

keyA.addEventListener('mousedown', Boom)

keyA.addEventListener("mouseup", function(event) {
    keyA.style.backgroundColor = "white"
})

document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="a") {
        Boom()    
        keyA.style.backgroundColor = "red"  
    } 
      
})
document.addEventListener("keyup", function(event){
    if (event.key.toLowerCase() ==="a") {
        keyA.style.backgroundColor = "white"
    }
    
})

function Clap(){
    let clap = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/clap.wav`)
    clap.play()
    keyS.style.backgroundColor = "red"
}

keyS.addEventListener("mousedown", Clap)
keyS.addEventListener("mouseup", function(event){
    keyS.style.backgroundColor = "white"
})
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="s") {
        Clap()        
    }
})
document.addEventListener("keyup", function(event){
        if (event.key.toLowerCase() ==="s") {
        keyS.style.backgroundColor = "white"
    }
})

function HiHat(){
    let hihat = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/hihat.wav`)
    hihat.play()
    keyD.style.backgroundColor = "red"
}

keyD.addEventListener("mousedown", HiHat)

keyD.addEventListener("mouseup", function(event){
    keyD.style.backgroundColor = "white"
})
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="d") {
        HiHat()
        keyD.style.backgroundColor = "red"        
    }
})
document.addEventListener("keyup", function(event){
    if (event.key.toLowerCase() ==="d") {
        keyD.style.backgroundColor = "white"        
    }
})


function Kick() {
    let kick = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/kick.wav`)
    kick.play()
    keyF.style.backgroundColor = "red"
}

keyF.addEventListener("mousedown", Kick)
keyF.addEventListener("mouseup", function(event){
    keyF.style.backgroundColor = "white"
})
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="f") {
        Kick()        
    }
})
document.addEventListener("keyup", function(event){
    if (event.key.toLowerCase() ==="f") {
        keyF.style.backgroundColor = "white"
    }
    
})

function OpenHat() {
    let openhat = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/openhat.wav`)
    openhat.play()
}

keyG.addEventListener("mousedown", OpenHat)
keyG.addEventListener("mouseup", function(){
    keyG.style.backgroundColor = "white"
})
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="g") {
        OpenHat() 
        keyG.style.backgroundColor = "red"       
    }
})
document.addEventListener("keyup", function(event){
    if (event.key.toLowerCase() ==="g") {
        keyG.style.backgroundColor = "white"
    }
    
})

function Ride() {
    let ride = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/ride.wav`)
    ride.play()
    keyH.style.backgroundColor = "red" 
}

keyH.addEventListener("mousedown", Ride)
keyH.addEventListener("mouseup", function(){
    keyH.style.backgroundColor = "white"
})
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="h") {
        Ride()        
    }
})

document.addEventListener("keyup", function(event){
    if (event.key.toLowerCase() ==="h") {
        keyH.style.backgroundColor = "white"
    }
    
})

function Snare() {
    let snare = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/snare.wav`)
    snare.play()
    keyJ.style.backgroundColor = "red" 
}
keyJ.addEventListener("mousedown", Snare)
keyJ.addEventListener("mouseup", function(){
    keyJ.style.backgroundColor = "white"
})
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="j") {
        Snare()        
    }
})
document.addEventListener("keyup", function(event){
    if (event.key.toLowerCase() ==="j") {
        keyJ.style.backgroundColor = "white"
    }
    
})


function Tink() {
    let tink = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/tink.wav`)
    tink.play()
    keyK.style.backgroundColor = "red" 
}

keyK.addEventListener("mousedown", Tink)
keyK.addEventListener("mouseup", function(){
    keyK.style.backgroundColor = "white"
})
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="k") {
        Tink()        
    }
})
document.addEventListener("keyup", function(event){
    if (event.key.toLowerCase() ==="k") {
        keyK.style.backgroundColor = "white"
    }
    
})

function Tom() {
    let tom = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/tom.wav`)
    tom.play()
    keyL.style.backgroundColor = "red" 
}

keyL.addEventListener("mousedown", Tom)
keyL.addEventListener("mouseup", function(){
    keyL.style.backgroundColor = "white"
})
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="l") {
        Tom()        
    }
})

document.addEventListener("keyup", function(event){
    if (event.key.toLowerCase() ==="l") {
        keyL.style.backgroundColor = "white"
    }
    
})