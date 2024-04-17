const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  console.log(event.target.elements.namedItem("first-name").value);
  const ageBadnessSum = parseInt(data.age) + parseInt(data.badness);
  console.log(`The age-badness-sum of ${data.firstName} is ${ageBadnessSum}"`);
  event.target.elements.firstName.focus();
  event.target.reset();
});

let numero = "";

function clickNumber(event) {
  //   console.log(event.target.textContent);
  numero += event.target.textContent;
  console.log(numero);
}

for (i = 0; i < 10; i++) {
  const button = document.querySelector('[data-js="bt' + i + '"]');
  button.addEventListener("click", clickNumber);
}
