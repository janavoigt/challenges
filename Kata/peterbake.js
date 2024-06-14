//Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

//Write a function cakes(), which takes the recipe (object) and the available ingredients
//(also an object) and returns the maximum number of cakes Pete can bake (integer).
//For simplicity there are no units for the amounts
//(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
//Ingredients that are not present in the objects, can be considered as 0.

//Examples:
//cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});

function cakes(recipe, available) {
  let numberCakes = [];

  for (const key in recipe) {
    console.log(key);

    if (!available[key]) {
      return 0;
    } else {
      const possibleCakes = Math.floor(available[key] / recipe[key]);

      console.log(possibleCakes);

      numberCakes.push(possibleCakes);
    }
  }
  console.log(numberCakes);
  const cakes = Math.min(...numberCakes);
  console.log(cakes);
  return cakes;
}

cakes(
  { sugar: 200, eggs: 1, flour: 500 },
  { sugar: 1200, eggs: 5, milk: 200, flour: 1200 }
);

// recipe is a objetc {ingredients}
// quantos bolos peter consegue fazer?
