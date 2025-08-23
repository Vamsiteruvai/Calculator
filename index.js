const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "AC") {
      currentInput = "";
      display.value = "0";
    } 
    else if (value === "DE") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput || "0";
    } 
    else if (value === "=") {
      try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } 
    else {
      if (display.value === "0" && value !== ".") {
        currentInput = value;
      } else {
        currentInput += value;
      }
      display.value = currentInput;
    }
  });
});
