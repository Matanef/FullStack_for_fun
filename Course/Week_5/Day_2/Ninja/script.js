let form = document.getElementsByTagName("form")[0]
let inputField = document.getElementById("billamt")

// form.addEventListener("submit", calculateTip)

function calculateTip(event){
    event.preventDefault(); 
    let billAmount = parseFloat(inputField.value)
    console.log(billAmount)
    let serviceQuality = document.getElementById("serviceQual").value
    console.log(serviceQuality);
    let numberOfPeople  = parseInt(document.getElementById("peopleamt").value)
    console.log(numberOfPeople);
    let each = document.getElementById("each")
    
    if (serviceQuality==="0" || billAmount==="") {
        alert(`You must choose the service quality and the Bill amount can't be empty`)
    }
    if (isNaN(numberOfPeople) || numberOfPeople<1) {
        numberOfPeople=1
        
        each.classList.add("hide")
    }else {
        each.classList.remove("hide")
    }

    let total = (billAmount*serviceQuality)/numberOfPeople
    let totalFixed = total.toFixed(2)
    let totalTip = document.getElementById("totalTip")
    totalTip.classList.add("blocked")
    let tip = document.getElementById("tip")
    tip.innerHTML = totalFixed
    

}

let button = document.getElementById("calculate")
    button.addEventListener("click", calculateTip)


let formTwo = document.getElementById("secondform")

function checkValidity(e){
    e.preventDefault()
    let inputEmail = document.getElementById("email").value
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(inputEmail)) {
        alert("Invalid Email format")
    } else {
        alert("Valid email")
    }
    
}

let buttontwo = document.getElementById("submitbutton")
buttontwo.addEventListener("click", checkValidity)


function goFindMe() {
    let status = document.querySelector("#status")
    let mapLink = document.querySelector("#map-link")

    mapLink.href = ""
    mapLink.textContent = ""

    function success(position) {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude

        status.textContent = ""
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;

        mapLink.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`
    }

    function error() {
        status.textContent = "Unable to retrieve your location"
        
    }
    if (!navigator.geolocation){
        status.textContent = "Geolocation is not supported by your browser"
    } else {
        status.textContent = "Locating..."
        navigator.geolocation.getCurrentPosition(success, error)
    }
}

document.querySelector("#find-me").addEventListener("click", goFindMe)