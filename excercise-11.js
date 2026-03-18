// #### Exercise 11: Function Definition (Coding)

// Define a function named `calculateArea`. This function must accept two **parameters** (`width` and `height`), 
// multiply them, and use a **return value** to send the result back to the caller. Then, call the function with the **arguments** 5 and 10, and store the result in a variable named `resultArea`.

let widthOne = 5;
let heightOne = 10;
let resultArea = calculateArea(widthOne, heightOne);
console.log(resultArea);

function calculateArea (width, height) {
    return width * height;
}