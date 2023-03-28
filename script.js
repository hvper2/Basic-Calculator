let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.button');

//AddValue
function addValue(value) {
    display.value += value;
}

//Clear
function clearDisplay() {
    display.value = "";
}

//Calculate
function calculate() {
    // alert(display.value);
    let result = eval(display.value);
    display.value = result;
}

