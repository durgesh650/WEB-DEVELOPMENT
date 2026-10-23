// ==========================================
// 1. Basic Greeting Function
// ==========================================
// This function packages a block of code to do repetitive greeting work.
function nice(name) {
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " your t-shirt is nice");
    console.log("Hey " + name + " your course is good too");
}

// Function invocation (calling the function) for different names
nice("durgesh");


// ==========================================
// 2. Sum Function with Return Value
// ==========================================
// This function takes two numbers and does the work of adding them.
function sum(a, b) {
    // return keyword sends the calculated value back to the caller
    return a + b;
}

let result1 = sum(3, 5);      // Returns 8
let result2 = sum(7, 5);      // Returns 12
let result3 = sum(3, 13);     // Returns 16

console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);


// ==========================================
// 3. Default Parameters
// ==========================================
// Here, 'c' has a default value of 3 in case it's not provided.
function sumWithDefault(a, b, c = 3) {
    return a + b + c;
}

console.log("Sum with default:", sumWithDefault(5, 3)); // 5 + 3 + 3 (default) = 11


// ==========================================
// 4. Arrow Functions
// ==========================================
// An arrow function is a concise syntax to store a function inside a variable.
const func1 = (x) => {
    console.log("I am an arrow function doing work with input: ", x);
}

func1(34);
func1(66);
func1(84);