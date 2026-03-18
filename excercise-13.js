// #### Exercise 13: Array Copying (Coding)

// Define an array named `originalData`. Use the **`slice` method** to create a **separate copy** of `originalData` and store it in a new variable named `clonedData`. 
// What type of copy does slice do. What should you be aware of when you do this type of copy?

// ```javascript

let originalData = [1, 2, 3, 4, 5];
let clonedData = originalData.slice(); //splice makes a shallow coopy. Which means if the original data contains objects or nested data the copy only copies the address. But if its just simple values like numbers, they will be seperate.

console.log(clonedData); 