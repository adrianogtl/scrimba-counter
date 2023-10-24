const counterEl = document.getElementById("counter-el")
const savedEl = document.getElementById("saved-el")
const historyEl = document.getElementById("history-el")
let counter = 0

function increment() {
  counter += 1
  counterEl.textContent = counter
}

function save() {
  historyEl.style.visibility = "visible"
  savedEl.textContent += counter + " - "
  counter = 0
  counterEl.textContent = counter
}