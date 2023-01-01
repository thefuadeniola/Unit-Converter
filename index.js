/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')

buttonEl.addEventListener('click', function() {
    lengthConvert();
    volumeConvert();
    massConvert();
})
function lengthConvert() {
    let value = parseInt(inputEl.value)
    lengthEl.innerText = `${value} meters = ${(value * 3.281).toFixed(2)} feet | ${value} feet = ${(value / 3.281).toFixed(2)} meters`
}
function volumeConvert() {
    let value = parseInt(inputEl.value)
    volumeEl.innerText = `${value} liters = ${(value * 0.264).toFixed(2)} gallons | ${value} gallons = ${(value / 0.264).toFixed(2)} liters`
}
function massConvert() {
    let value = parseInt(inputEl.value)
    massEl.innerText = `${value} kilos = ${(value * 2.204).toFixed(2)} pounds | ${value} pounds = ${(value / 3.281).toFixed(2)} kilos`
}

