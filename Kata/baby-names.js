// Celebrities love to call their children quirky names. The latest trend for baby names is the 'last
//letter trend'. The rules of the trend are as follows: the first letter of a child's name should be
//the same as the last letter of their older sibling. For example:

// Suri (1st child), Ireland (2nd child), Diva (3rd child), Aleph (4th child)

// And so on...

// Create a function validName which accepts an array of names. It should return "Congratulations,
//your baby names are compatible!" if all of the names follow the rule. It should return
//"Back to the drawing board, your baby names are not compatible." if all of the names do not
//follow the rule.

// If a couple only has one child return "Congratulations, you can choose any name you like!"

// If the array is empty return "You must test at least one name."

// Notes:
// Names may be hyphenated or two words e.g. Blue Ivy or Jean-Paul
// Names will not include any other characters apart from letters, hyphens or spaces.

const array = [];

function validName(array) {
  console.log(array);
  if (array.length === 0) {
    return `You must test at least one name.`;
  }

  if (array.length === 1) {
    return `Congratulations, you can choose any name you like!`;
  }

  let ultimaLetra = array[0].charAt(array[0].length - 1).toUpperCase();

  array.shift();

  const pass = array.every(function (item) {
    if (item.charAt(0).toUpperCase() !== ultimaLetra) {
      return false;
    }
    ultimaLetra = item.charAt(item.length - 1).toUpperCase();
    return true;
  });

  if (pass === true) {
    return `Congratulations, your baby names are compatible!`;
  } else {
    return `Back to the drawing board, your baby names are not compatible.`;
  }
}

console.log(validName(array));
