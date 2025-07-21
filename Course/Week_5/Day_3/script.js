let root = document.getElementById("root")
let banner = document.createElement("banner")
banner.setAttribute("id", "timeoutBanner")
root.appendChild(banner)
banner.classList.add("banner")
let secondBanner = document.createElement("banner")
secondBanner.setAttribute("id", "secondbanner")
root.appendChild(secondBanner)
secondBanner.classList.add("secondbanner")


// function timeout() {

//     banner.innerHTML = `The sales end in 10min !`
// }

// setTimeout(timeout, 5000)

function interval(){
    let num = 10
    let id = setInterval(function(){
        secondBanner.innerHTML = `the sell ends in ${num} seconds`
        num--;
        if (num<0) {
            clearInterval(id)
            secondBanner.innerHTML = `the sell has ended`
        }
    }, 1000);
}

interval()