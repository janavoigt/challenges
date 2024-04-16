console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let time = new Date().getHours();
  if (time >= 6 && time <= 12) {
    return "Good Morning";
  } else if (time >= 13 && time <= 18) {
    return "Good Afternoon";
  } else if (time >= 19 && time >= 22) {
    return "Good Evening";
  }
  return "Good Night";

  // Code here
}

function getDayColor() {
  let week = new Date().getDay();
  if (week === 1) {
    return "darkgray";
  } else if (week > 1 && week < 6) {
    return "lightblue";
  }
  return "hotpink";

  // Code here
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
