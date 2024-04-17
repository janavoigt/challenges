console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
  // write your code here
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  let areaPizza1 = Math.PI * (diameter1 / 2) ** 2;
  let areaPizza2 = Math.PI * (diameter2 / 2) ** 2;
  let areaGain = ((areaPizza2 - areaPizza1) / areaPizza1) * 100;

  output.textContent = Math.round(areaGain);
}

// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  let newSizePizza = (newSize / 24) * 100;
  pizzaElement.style.width = newSizePizza + "px";
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(size1, size2) {
  outputSection.style.backgroundColor =
    size1 <= size2 ? "var(--green)" : "var(--red)";
}
