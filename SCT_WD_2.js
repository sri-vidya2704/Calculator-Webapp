const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.btn');
let currentInput = "";
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;
    handleInput(value);
  });
});
document.addEventListener("keydown", (event) => {
  const key = event.key;
  const allowedKeys = "0123456789+-*/.";
  if(allowedKeys.includes(key)){
    handleInput(key);
  }
  else if(key === "Enter"){
    handleInput("=");
  }
  else if(key === "Backspace"){
    handleInput("DEL");
  }
  else if(key === "Escape"){
    handleInput("AC");
  }
});
function handleInput(value){
  if(value === "AC"){
    currentInput = "";
    display.value = "";
  }
  else if(value === "DEL"){
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }
  else if(value === "="){
    try{
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    }
    catch(error){
      display.value = "Error";
      currentInput = "";
    }
  }
  else{
    currentInput += value;
    display.value = currentInput;
  }

}