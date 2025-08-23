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
function appendToDisplay(value) {
  const display = document.getElementById("display");
  const currentValue = display.value;

  // Prevent multiple decimal points in a single number
  if (value === ".") {
    // Split by operators to check each number individually
    const parts = currentValue.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];

    if (lastPart.includes(".")) {
      return; // Already has a decimal point, don't add another
    }
  }

  // Prevent multiple operators in sequence
  if (["+", "-", "*", "/"].includes(value)) {
    const lastChar = currentValue.slice(-1);

    if (["+", "-", "*", "/"].includes(lastChar)) {
      // Replace the last operator with the new one
      display.value = currentValue.slice(0, -1) + value;
      return;
    }
  }
  // Handle initial zero
  if (currentValue === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }
}
