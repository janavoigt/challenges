// state_capitals = [{ state: "Maine", capital: "Augusta" }];
// capital(state_capitals)[0]; // returns "The capital of Maine is Augusta"

// country_capitals = [{ country: "Spain", capital: "Madrid" }];
// capital(country_capitals)[0]; // returns "The capital of Spain is Madrid"

mixed_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
];
// capital(mixed_capitals)[1]; // returns "The capital of Spain is Madrid"

function capitals() {
  let arr = [];
  for (const word of mixed_capitals) {
    arr.push(
      `The capital of ${word.state || word.country} is ${word.capital} `
    );
  }
  return arr;
}

console.log(capitals());
capitals();
