let count = 0
let first_number = true
let countEl = document.getElementById("count-el")
let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerText = "Welcome to the counter demo!"
console.log(welcomeEl)
console.log(countEl)

let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText= count}
function save() {
    if (first_number) {
        saveEl.textContent += count
        first_number = false
    } else {
        saveEl.textContent += " - " + count
    }
    console.log(saveEl.textContent)
    console.log(count)
    count = 0
    countEl.textContent = 0
}

function reset() {
    count = 0
    countEl.innerText = count
    first_number = true
    saveEl.textContent = "Previous entries:"
}


// DOM = Document object model aka how to use javascript to manipulate HTML elements on a webpage or in simple words modify a website using javascript.