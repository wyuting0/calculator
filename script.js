document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    document.querySelector('.buttons').addEventListener('click', handleButtonClick);

    function handleButtonClick(event) {
        const buttonValue = event.target.dataset.value;

        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(buttonValue);
        }
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculateResult() {
        try {
            display.value = parseAndCalculate(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    function parseAndCalculate(expression) {
        return new Function('return ' + expression)();
    }
});
