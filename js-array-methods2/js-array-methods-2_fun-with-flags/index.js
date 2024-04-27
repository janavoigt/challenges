import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

/*queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  let result = countries.find((count) => count.name.startsWith(searchString));
  console.log(searchString);

  let foundCountry = result;

  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
});*/

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  let result = countries.filter((count) => count.name.startsWith(searchString));
  console.log(searchString);

  let foundCountries = result;

  foundCountries.forEach((countName) => {
    const countryElement = Country(countName);
    container.append(countryElement);
  });
});
