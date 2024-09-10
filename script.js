// Select the display
const display = document.getElementById('display');

// Track user input
let currentInput = '';
let previousInput = '';
let operator = null;

// Add event listeners to the buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');

        // Handle clear button
        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = null;
            display.value = '';
        }
        // Handle the equals button
        else if (value === '=') {
            if (operator && previousInput !== '' && currentInput !== '') {
                const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                display.value = result;
                currentInput = result;
                previousInput = '';
                operator = null;
            }
        }
        // Handle operator buttons
        else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        }
        // Handle number and decimal point input
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Perform calculation based on operator
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 0;
    }
}
