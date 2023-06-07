let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");

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
  let result = eval(display.value);
  if (result != null) {
    display.value = result;
  } else {
    return 0;
  }
}
