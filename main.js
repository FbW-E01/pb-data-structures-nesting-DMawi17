// # Nests

// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false],
];

for (let i of board) {
    for (let j of i) {
        console.log(j);
    }
}

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.

const Doggo = {
    name: "Buni",
    breed: "Basenji",
};

// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.

Doggo["favorite foods"] = ["Nutmeg", "Ramen", "Bao"];

// * 2.3 Access the second element of the doggo's favorite foods.

const secondElement = Doggo["favorite foods"][1];

// * 2.4 Add a method that loops through and print all the doggo's favorite food.

Doggo.getFood = function (dogFood) {
    for (let food of dogFood) console.log(food);
};

Doggo.getFood(Doggo["favorite foods"]);

// #### 3.
// * 3.1 Create an object called recipes.

const recipes = {
    ingredients: { butter: "2.5 gm", sugar: "2 spoon", flour: "200 gm" },
};

// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`.

recipes.ingredients.ginger = "0.5 gm";

// * 3.4 Change the ingredient `sugar` to `brown sugar`.

recipes.ingredients["brown sugar"] = recipes.ingredients.sugar;
delete recipes.ingredients.sugar;

// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

recipes.ingredientValues = function (weight) {
    for (let value of Object.values(weight)) console.log(value);
};
recipes.ingredientValues(recipes.ingredients);
