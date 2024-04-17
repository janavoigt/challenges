console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const sucess = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}
function hideSucess() {
  sucess.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showToSucess() {
  sucess.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", (e) => {
  if (e.target.checked === true) {
    hideTosError();
    hideSucess();
  }
});

hideTosError();
hideSucess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked === true) {
    showToSucess();
    alert("Form submitted");
  } else {
    showTosError();
    hideSucess();
  }
  console.log(tosCheckbox.checked);

  event.target.reset();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
