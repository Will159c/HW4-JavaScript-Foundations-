// #### Exercise 1: Formatting and Naming
// Demonstrates camelCase variable naming and a basic if statement
var thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
    // code block
}

// #### Exercise 2: Defining Core Data Types
// Examples of the main JS primitive types: number, string, float, boolean
let currentScore = 95;
let messageTo = "Hello World";
let numberFloat = 1.6;
let isAnimal = true;

// #### Exercise 3: Single-Line Comments
let totalScore = 95; // Current score the player has accumulated throughout the game. I changed the variable name so it doesnt clash with excercise 2

// #### Exercise 4: Equality Comparison
// == checks value only (type coercion), === checks value AND type
console.log("100" == 100);   // true
console.log("100" === 100);  // false

// #### Exercise 5: Ternary Operator
// Shorthand for if/else: condition ? valueIfTrue : valueIfFalse
let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";
console.log(schedule);

// #### Exercise 6: If/Else Structure
// Branch based on whether the user meets the age requirement
let userAge = 16;
if (userAge >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// #### Exercise 7: Logical AND Operator
// Write an `if` statement using the **AND operator (`&&`)**. The code block should only execute if **both** `hasPermission` is `true` AND `itemCount` is less than 5. If both are true, log `"Ready to process"`.
// Both conditions must be true for the block to run
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
    console.log("Ready to process");
}

// #### Exercise 8: For Loop
//Write a standard **`for` loop** that runs exactly 5 times. Inside the loop, log the current iteration number (starting from 1).
// Loops from 1 through 5, logging each number
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// #### Exercise 9: Loop Control
// Uses break to exit the loop early once i reaches 7
for (let i = 0; i <= 9; i++) {
    console.log(i);
    if (i === 7) {
        break;
    }
}

// #### Exercise 10: Ensuring Execution
// do...while runs the block at least once, even if the condition is false
let loopCounter = 10;
do {
    console.log("Running once");
} while (loopCounter < 0);

// #### Exercise 11: Function Definition
// Function that takes two parameters and returns their product
function calculateArea(width, height) {
    return width * height;
}
let resultArea = calculateArea(5, 10);
console.log(resultArea);

// #### Exercise 12: Array Manipulation
// push() adds to the end, shift() removes from the front, indexOf() finds a value's position
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log(fruitList.indexOf('Banana'));

// #### Exercise 13: Array Copying
// slice() with no arguments creates a shallow copy of the array
let originalData = [1, 2, 3, 4, 5];
let clonedData = originalData.slice();
console.log(clonedData);

// #### Exercise 14 & 15: Object Constructor and Instantiation
// Constructor function — used with `new` to create object instances
function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
    // Method attached to each instance
    this.makeSound = function () {
        console.log(`The ${this.species} goes ${this.sound}`);
    };
}
// Create two Animal instances using the constructor
let dog = new Animal('Canine', 'Woof');
let cat = new Animal('Feline', 'Meow');
dog.makeSound();
cat.makeSound();
// Store both instances in an array
let animalArray = [dog, cat];
console.log(animalArray);
