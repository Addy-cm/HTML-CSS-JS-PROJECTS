const result1_1=document.getElementById('get-result-here');
const length1_1=document.getElementById('length-of-password');
const uppercase1_1=document.getElementById('uppercase_include');
const lowercase1_1=document.getElementById('lowercase_include');
const number1_1=document.getElementById('include_number');
const symbol1_1=document.getElementById('include_symbol');
const generate1_1=document.getElementById('last-btn');
const button1_1=document.getElementById('btn-id');


const randomFunc ={
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

button1_1.addEventListener('click', () =>{
    const textarea=document.createElement('textarea')
    const password=result1_1.innerText

    if(!password){
        return
    }

    textarea.value=password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied')
})

generate1_1.addEventListener('click', () =>{
    const length=+length1_1.value
    const lower1=lowercase1_1.checked
    const upper1=uppercase1_1.checked
    const number1=number1_1.checked
    const symbol1=symbol1_1.checked

    result1_1.innerText=generatePassword(lower1,upper1,length,number1,symbol1)

})

function generatePassword(lower,upper,number,symbol,length){
    let generatePassword=''
    
}