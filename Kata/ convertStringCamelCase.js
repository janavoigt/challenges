// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//The first word within the output should be capitalized only if the original word was capitalized
//(known as Upper Camel Case, also often referred to as Pascal case). The next words should be always
// capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

let string = "The_Stealth-Warrior";

function toCamelCase(str) {
  return str
    .split(/[-_]/g)
    .map((word, index) =>
      index === 0 ? word : `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    )
    .join(" ");

  //   str = str.split("");
  //   return str
  //     .map((el, i) => {
  //       if (el === "-" || el === "_") {
  //         el = str[i + 1].toUpperCase();
  //         str.splice(i + 1, 1);
  //       }
  //       return el;
  //     })
  //     .join("");
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));
