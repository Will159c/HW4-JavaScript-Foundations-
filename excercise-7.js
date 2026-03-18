// #### Exercise 7: Logical AND Operator (Coding)

// Write an `if` statement using the **AND operator (`&&`)**. The code block should only execute if **both** `hasPermission` is `true` AND `itemCount` is less than 5. If both are true, log `"Ready to process"`.

// ```javascript

let hasPermission = true;
let itemCount = 3;

if (hasPermission && itemCount < 5) {
    console.log(`Ready to process`);
}