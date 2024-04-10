console.clear();

const operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  const totalOp = operand1 + operand2;
  console.log(totalOp);
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
});

subtractButton.addEventListener("click", () => {
  const totalOp = operand1 - operand2;
  console.log(totalOp);
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
});

multiplyButton.addEventListener("click", () => {
  const totalOp = operand1 * operand2;
  console.log(totalOp);

  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
});

divideButton.addEventListener("click", () => {
  const totalOp = operand1 / operand2;
  console.log(totalOp);
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
});

exponentButton.addEventListener("click", () => {
  const totalOp = operand1 ** operand2;
  console.log(totalOp);
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
});

moduloButton.addEventListener("click", () => {
  const totalOp = operand1 % operand2;
  console.log(totalOp);
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

//const operand1 = 12;
let newOper = operand1;

increaseByOneButton.addEventListener("click", () => {
  newOper += 1;
  console.log(newOper);
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

let increaseFive = operand1;

increaseByFiveButton.addEventListener("click", () => {
  increaseFive += 5;
  console.log(increaseFive);
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

let decreaseOne = operand1;
decreaseByOneButton.addEventListener("click", () => {
  decreaseOne -= 1;
  console.log(decreaseOne);
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});
let decreaseFive = operand1;
decreaseByFiveButton.addEventListener("click", () => {
  decreaseFive -= 5;
  console.log(decreaseFive);
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

let multiplyTwo = operand1;
multiplyByTwoButton.addEventListener("click", () => {
  multiplyTwo *= 2;
  console.log(multiplyTwo);
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

let divideTwo = operand1;
divideByTwoButton.addEventListener("click", () => {
  divideTwo /= 2;
  console.log(divideTwo);
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
