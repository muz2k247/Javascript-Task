let exp = ""
let display = document.querySelector(".display")
let result = ""

function press(val) {
    exp += val
    display.textContent = exp
}

function clr() {
    exp = ""
    display.textContent = "0"
}

function cal() {
    result = eval(exp)
    exp = result.toString()
    display.innerText = exp
}