export function getAnimal(argument) {
  if (argument === "cats") {
    return `I totally love ${argument}!`;
  } else if (argument === undefined) {
    return `I do not like animals at all!`;
  }

  return `I like ${argument}!`;
}

// test("getAnimals() returns a string 'I totally love cats!' if called with the argument 'cats'.", () => {
//     const result = getAnimal("cats");
//     expect(result).toBe("I totally love cats!");

// test("getAnimals() returns a string 'I like [animalPluralName]!' if called with a string argument.", () => {
//     const result = getAnimal("dogs");
//     expect(result).toBe("I like dogs!");
//   });
//   test("getAnimals() returns a string 'I do not like animals at all!' if called without arguments.", () => {
//     const result = getAnimal();
//     expect(result).toBe("I do not like animals at all!");
//   });
