function getPin() {
    const pin = generatPin()
    const pinString = pin + ''
    if (pinString.length === 4) {
        return pin
    }
    else {

        return getPin()
    }
}

function generatPin() {
    const random = Math.round(Math.random() * 10000)
    return random
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin()

    const displayPinField = document.getElementById('display-pin')
    displayPinField.value = pin

})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText
    const typedNumberFiled = document.getElementById('typed-numbers')
    const previousTypeNumbers = typedNumberFiled.value
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberFiled.value = ''
        }
        else if (number === '<') {
            const digits = previousTypeNumbers.split('')
            digits.pop()
            const remainingDigits = digits.join('')
            typedNumberFiled.value = remainingDigits
        }
    }
    else {


        const newTypeNumber = previousTypeNumbers + number
        typedNumberFiled.value = newTypeNumber
    }

})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin')
    const currentPin = displayPinField.value

    const typedNumberFiled = document.getElementById('typed-numbers')
    const typedNumber = typedNumberFiled.value

    const pinSuccessMessage = document.getElementById('pin-success')
    const pinFailureMassage = document.getElementById('pin-failure')
    if (typedNumber === currentPin) {
        pinSuccessMessage.style.display = 'block'
        pinFailureMassage.style.display = 'none'
    }
    else {
        pinFailureMassage.style.display = 'block'
        pinSuccessMessage.style.display = 'none'
    }
})