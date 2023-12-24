// Password generator
// Written by Gábor Parlag - g.parlag@gmail.com
// as a solo project at Scimba.com
// ─────────────────────────────────────────────────────────────────────────────


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtnEl = document.querySelector("#generate-btn")
const passwordOneEl = document.querySelector("#pwd-one")
const passwordTwoEl = document.querySelector("#pwd-two")
const passwordLengthEl = document.querySelector("#pwd-length")
const symbolsEl = document.querySelector("#symbols")
const numbersEl = document.querySelector("#numbers")
const clipboardEl = document.querySelector("#clipboard")
let rnd
let charSet = [...characters]

function randomNumberGenerator() {
    rnd = Math.floor(Math.random() * charSet.length)
    return rnd
}

function addCharactersToPassword(element) {
    let pwdLength = passwordLengthEl.value
    let pwd = ""
    element.textContent = ""
    for (let i=0; i<pwdLength; i++) {
        randomNumberGenerator()
        pwd += charSet[rnd]
    }
    element.textContent = pwd
}

function displayTwoPwds() {
    charSet = [...characters]
    if (symbolsEl.checked && numbersEl.checked) {
        
    } else if (numbersEl.checked) {
        charSet.splice(62, 29)
    } else if (symbolsEl.checked) {
        charSet.splice(52, 10)
    } else {
        charSet.splice(52, 39)
    }
    addCharactersToPassword(passwordOneEl)
    addCharactersToPassword(passwordTwoEl)
    clipboardEl.innerHTML = "Click on a password to copy to clipboard."
}

passwordOneEl.addEventListener("click", function() {
    let pwd1 = passwordOneEl.textContent
    navigator.clipboard.writeText(pwd1)
    clipboardEl.innerHTML = `Password 1: "<span>${pwd1}</span>" copied to clipboard.`
})

passwordTwoEl.addEventListener("click", function() {
    let pwd2 = passwordTwoEl.textContent
    navigator.clipboard.writeText(pwd2)
    clipboardEl.innerHTML = `Password 2: "<span>${pwd2}</span>" copied to clipboard.`
})