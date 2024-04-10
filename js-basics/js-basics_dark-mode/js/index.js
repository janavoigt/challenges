console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkMode = document.querySelector('[data-js="dark-mode-button"]');
const lightMode = document.querySelector('[data-js="light-mode-button"]');
const toggleMoode = document.querySelector('[data-js="toggle-button"]');

darkMode.addEventListener("click", function () {
  bodyElement.classList.add("dark");
});

lightMode.addEventListener("click", function () {
  bodyElement.classList.remove("dark");
});

toggleMoode.addEventListener("click", function () {
  bodyElement.classList.toggle("dark");
});
