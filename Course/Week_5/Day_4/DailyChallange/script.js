let root = document.getElementById("root")
let brightSquare = document.createElement("div")
brightSquare.setAttribute("id", "brightSquare")
root.appendChild(brightSquare)
let plusIcon = document.createElement("i")
plusIcon.classList.add("fa-solid", "fa-plus")
plusIcon.style.display = "flex"
plusIcon.style.justifyContent = "center"
plusIcon.style.alignItems = "center"
plusIcon.style.width = "100%";
plusIcon.style.height = "100%";
brightSquare.appendChild(plusIcon)


brightSquare.addEventListener("click", addSquare)

function addSquare() {
    let seconderySquare = document.createElement("div")
    seconderySquare.setAttribute("id", "secondarySquare")
    root.appendChild(seconderySquare)
}