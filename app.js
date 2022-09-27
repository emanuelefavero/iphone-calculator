// ----- Buttons On Click Fade Animation -----
const modifierStyle = document.querySelectorAll('.modifier')
const numberStyle = document.querySelectorAll('.number')
const operatorStyle = document.querySelectorAll('.operator')

modifierStyle.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 200)
  })
})

numberStyle.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 200)
  })
})

operatorStyle.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('clicked')
    setTimeout(() => {
      button.classList.remove('clicked')
    }, 200)
  })
})

// ----- Calculator Functionality -----
// TODO: Add this behavior to the calculator: If you click a new operation before clicking the = button, the first operation should be evaluated and used as the first operand for the second operation.

// Variables
const display = document.querySelector('.display')
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const modifierButtons = document.querySelectorAll('.modifier')
const equalsButton = document.querySelector('#equals')
const clearButton = document.querySelector('#clear')

let currentNumber = ''
let previousNumber = ''
let operator = ''
let result = ''
let decimal = false

// Events
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentNumber.length < 12) {
      currentNumber += button.textContent
      display.textContent = currentNumber
    }
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.value === 'equals') {
      if (currentNumber !== '' && previousNumber !== '') {
        result = Number(operate(operator, previousNumber, currentNumber))
        display.textContent = result
        currentNumber = result
        previousNumber = ''
        decimal = false
      }
    }

    if (currentNumber !== '') {
      operator = e.target.value
      previousNumber = currentNumber
      currentNumber = ''
      decimal = false
    }
  })
})

modifierButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent === '%') {
      currentNumber = currentNumber / 100
    } else if (button.textContent === '+/-') {
      currentNumber = currentNumber * -1
    }
    display.textContent = currentNumber
  })
})

clearButton.addEventListener('click', () => {
  currentNumber = ''
  previousNumber = ''
  display.textContent = '0'
  decimal = false
})

// Functions
function divide(a, b) {
  return a / b
}

function multiply(a, b) {
  return a * b
}

function subtract(a, b) {
  return a - b
}

function add(a, b) {
  return a + b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)

  if (operator === 'divide') {
    return divide(a, b)
  } else if (operator === 'multiply') {
    return multiply(a, b)
  } else if (operator === 'subtract') {
    return subtract(a, b)
  } else if (operator === 'add') {
    return add(a, b)
  }
}
