const result1_1 = document.getElementById('get-result-here')
const length1_1 = document.getElementById('length-of-password')
const uppercase1_1 = document.getElementById('uppercase-include')
const lowercase1_1 = document.getElementById('lowercase-include')
const number1_1 = document.getElementById('include-number')
const symbol1_1 = document.getElementById('include-symbol')
const generate1_1 = document.getElementById('last-btn')
const button1_1 = document.getElementById('btn-id')


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

button1_1.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = result1_1.innerText

    if (!password) { return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password is copied!')
})

generate1_1.addEventListener('click', () => {
    const length = +length1_1.value
    const upper1 = uppercase1_1.checked
    const lower1 = lowercase1_1.checked
    const number1 = number1_1.checked
    const symbol1 = symbol1_1.checked

    result1_1.innerText = generatePassword(lower1, symbol1, upper1, number1, length)

})

function generatePassword(lower, symbol, upper, number, length) {
    let generatedPassword = ''
    const counts = lower + symbol + upper + number
    const countArr = [{ symbol }, { lower }, { upper }, { number }].filter(item => Object.values(item)[0])

    if (counts === 0) {
        return ''
    }

    for (let i = 0; i < length; i += counts) {
        countArr.forEach(type => {
            const name = Object.keys(type)[0]
            generatedPassword += randomFunc[name]()
        })
    }

    const finalPass = generatedPassword.slice(0, length)
    return finalPass
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
