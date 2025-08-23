let display = document.getElementById("display");
function appendToDisplay(input) {
  display.value += input;
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "error";
  }
}
function clearAll() {
  display.value = "";
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
