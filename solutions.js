// #### Exercise 1: Formatting and Naming
var thisIsANewVariable = 10;

if (thisIsANewVariable === 10) {
    // code block
}

// #### Exercise 2: Defining Core Data Types
let currentScore = 95;
let messageTo = "Hello World";
let numberFloat = 1.6;
let isAnimal = true;

// #### Exercise 3: Single-Line Comments
let totalScore = 95; // Current score the player has accumulated throughout the game. I changed the variable name so it doesnt clash with excercise 2

// #### Exercise 4: Equality Comparison
console.log("100" == 100);
console.log("100" === 100);

// #### Exercise 5: Ternary Operator
let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";
console.log(schedule);

// #### Exercise 6: If/Else Structure
let userAge = 16;
if (userAge >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// #### Exercise 7: Logical AND Operator
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
    console.log("Ready to process");
}

// #### Exercise 8: For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// #### Exercise 9: Loop Control
for (let i = 0; i <= 9; i++) {
    console.log(i);
    if (i === 7) {
        break;
    }
}

// #### Exercise 10: Ensuring Execution
let loopCounter = 10;
do {
    console.log("Running once");
} while (loopCounter < 0);

// #### Exercise 11: Function Definition
function calculateArea(width, height) {
    return width * height;
}
let resultArea = calculateArea(5, 10);
console.log(resultArea);

// #### Exercise 12: Array Manipulation
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log(fruitList.indexOf('Banana'));

// #### Exercise 13: Array Copying
let originalData = [1, 2, 3, 4, 5];
let clonedData = originalData.slice();
console.log(clonedData);

// #### Exercise 14 & 15: Object Constructor and Instantiation
function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
    this.makeSound = function () {
        console.log(`The ${this.species} goes ${this.sound}`);
    };
}

let dog = new Animal('Canine', 'Woof');
let cat = new Animal('Feline', 'Meow');

dog.makeSound();
cat.makeSound();

let animalArray = [dog, cat];
console.log(animalArray);