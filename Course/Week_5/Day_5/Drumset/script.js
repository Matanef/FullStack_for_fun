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
}

keyA.addEventListener('click', Boom)
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="a") {
        Boom()        
    }
})

function Clap(){
    let clap = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/clap.wav`)
    clap.play()
}

keyS.addEventListener("click", Clap)
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="s") {
        Clap()        
    }
})

function HiHat(){
    let hihat = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/hihat.wav`)
    hihat.play()
}

keyD.addEventListener("click", HiHat)
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="d") {
        HiHat()        
    }
})

function Kick() {
    let kick = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/kick.wav`)
    kick.play()
}

keyF.addEventListener("click", Kick)
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="f") {
        Kick()        
    }
})

function OpenHat() {
    let openhat = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/openhat.wav`)
    openhat.play()
}

keyG.addEventListener("click", OpenHat)
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="g") {
        OpenHat()        
    }
})

function Ride() {
    let ride = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/ride.wav`)
    ride.play()
}

keyH.addEventListener("click", Ride)
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="h") {
        Ride()        
    }
})

function Snare() {
    let snare = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/snare.wav`)
    snare.play()
}
keyJ.addEventListener("click", Snare)
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="j") {
        Snare()        
    }
})


function Tink() {
    let tink = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/tink.wav`)
    tink.play()
}

keyK.addEventListener("click", Tink)
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="k") {
        Tink()        
    }
})

function Tom() {
    let tom = new Audio(`./drumset_setup-master/drumset_setup-master/sounds/tom.wav`)
    tom.play()
}

keyL.addEventListener("click", Tom)
document.addEventListener("keydown", function(event){
    if (event.key.toLowerCase() ==="l") {
        Tom()        
    }
})