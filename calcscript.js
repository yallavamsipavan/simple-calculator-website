const pie = (Math.PI);
const π = (pie);
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function squareRoot() {
    display.value = Math.sqrt(eval(display.value));
}