let userFirstcircle = true

document.addEventListener("mousemove", function(event){
    let x = event.clientX
    let y = event.clientY
    let circle = document.createElement("div")

    if (userFirstcircle) {
        circle.classList.add("circle")
    } else {
        circle.classList.add("circletwo")
    }

    userFirstcircle = !userFirstcircle
  

    circle.style.left = `${x}px`
    circle.style.top = `${y}px`

    document.body.appendChild(circle)


    setTimeout(() => {
        circle.remove()

    }, 200);
})