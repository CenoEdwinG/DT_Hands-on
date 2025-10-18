// Number and operation storage
let currentInput = '';
let previousInput = '';
let operator = '';
    
// Calculation counter using closure
function createCounter() {
    let count = 0;
    return function() {
    count++;
    return count;
    };
}

let incrementCounter = createCounter(); // Initialize the counter function

// DOM elements
const display = document.getElementById('display');
const countDiv = document.getElementById('count');

// Update display
function updateDisplay() {
    display.value = currentInput;
}

// Append number to current input
function appendNum(num) {
    currentInput += num;
    updateDisplay();
}

// Append decimal point to display, if input is decimal
function appendDec() {
    if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
    }
}

// Set operation and prepare for next input
function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
    calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Perform calculation based on selected operation
function calculate() {
    if (previousInput === '' || currentInput === '') return;

    const num1 = previousInput;
    const num2 = currentInput;
    let result = 0;

    switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '×':
        result = num1 * num2;
        break;
    case '÷':
        if (num2 === 0) {
        display.value = "Cannot divide by 0";
        return;
        }
        result = num1 / num2;
        break;
    default:
        return;
    }

    // Update calculation count
    const calcCount = incrementCounter();
    countDiv.textContent = `Calculation count: ${calcCount}`;
    
    // Display result and reset inputs
    currentInput = result.toString(); // Convert result to string for further operations
    previousInput = '';
    operator = '';
    updateDisplay();
}

// Clear display and reset inputs
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}