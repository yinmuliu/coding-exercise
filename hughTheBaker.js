const cakes = (recipe, available) => {
  let numOfCake = 0;
  // using while loop to determine the increment of cakes can bake - don't know how many times to loop, so using while loop
  while (true) {
    // loop through ingredients in recipe, compare the ammount to available ingredients
    for (let ingredient in recipe) {
      // if there is an ingredient missing available ingredient, then no cake can be made
      if (!available[ingredient]) {
        return numOfCake;
      }
      // when ingredient is not available anymore: < 0; bail out of the for-in loop
      else if (available[ingredient] - recipe[ingredient] < 0) {
        return numOfCake;
      } else {
        // substract the amount of ingredient from the available ingredient
        available[ingredient] -= recipe[ingredient];
      }
    }
    numOfCake++;
  }
};

// must return 2

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);

// must return 0
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
