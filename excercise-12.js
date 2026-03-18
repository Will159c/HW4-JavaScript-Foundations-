// #### Exercise 12: Array Manipulation (Coding)

// Define an array named `fruitList` initialized with `['Apple', 'Banana']`. Then, write the code necessary to:

// 1. Add the string `'Grape'` to the **end** of the array.
// 2. Remove the **first** item (`'Apple'`) from the array.
// 3. Log the **index number** of `'Banana'`.

let fruitList = ['Apple', 'Banana'];

fruitList.push('Grape');
fruitList.shift();

console.log(fruitList.indexOf('Banana'));