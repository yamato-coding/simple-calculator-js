let display = document.getElementById('result');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendToResult(value) {
    const displayValue = display.value;
    
    if (['+', '-', '*', '/'].includes(value)) {
        if (displayValue !== '' && !isNaN(displayValue.slice(-1))) {
            if (previousInput !== '' && currentInput !== '') {
                calculateResult();
            }
            previousInput = displayValue;
            operator = value;
            currentInput = '';
            display.value += ' ' + value + ' ';
        }
    } else {
        if (value === '.' && displayValue.includes('.')) {
            const parts = displayValue.split(/[\+\-\*\/]/);
            const lastPart = parts[parts.length - 1].trim();
            if (lastPart.includes('.')) {
                return;
            }
        }
        
        display.value += value;
        currentInput += value;
    }
}

function clearResult() {
    display.value = '';
    currentInput = '';
    previousInput = '';
    operator = '';
}

function deleteLast() {
    let currentValue = display.value;
    if (currentValue.length > 0) {
        if (currentValue.slice(-1) === ' ') {
            display.value = currentValue.slice(0, -3);
            operator = '';
            currentInput = '';
        } else {
            display.value = currentValue.slice(0, -1);
            currentInput = currentInput.slice(0, -1);
        }
    }
}

function calculateResult() {
    try {
        let expression = display.value;
        
        if (expression === '' || expression.slice(-1) === ' ') {
            return;
        }
        
        expression = expression.replace(/×/g, '*');
        
        const result = Function('"use strict"; return (' + expression + ')')();
        
        if (isFinite(result)) {
            display.value = result.toString();
            currentInput = result.toString();
            previousInput = '';
            operator = '';
        } else {
            display.value = 'エラー';
            setTimeout(clearResult, 2000);
        }
    } catch (error) {
        display.value = 'エラー';
        setTimeout(clearResult, 2000);
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9' || key === '.') {
        appendToResult(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToResult(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculateResult();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearResult();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    }
});