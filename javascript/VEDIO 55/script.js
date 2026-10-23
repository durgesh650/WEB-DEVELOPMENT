

// ==========================================
// 1. VARIABLES (var, let, const)
// ==========================================

console.log("Tutorial 55: Variables, Data Types & Objects");

// 'var' old way hai (global/function scope hota hai)
var a = 5;
var b = "Harry";
// var c = null;

// 'let' modern way hai (block scope hota hai, value change ki ja sakti hai)
let x = 10;
let y = "Sigma Web Development";
let z = true; // Boolean

// 'const' constant values ke liye hota hai (iski value change nahi ho sakti)
const author = "CodeWithHarry";
// author = "Another Name"; // Error dega kyuki ye constant hai

{
    // Block scope example (let aur const sirf ishi block ke andar valid rahenge)
    let b = 66;
    console.log(b); // Output: 66
}
console.log(b); // Output: "Harry" (outer scope wala var)


// ==========================================
// 2. DATA TYPES IN JAVASCRIPT
// ==========================================

// Primitive Data Types (Total 7 types: NN BB SS U)
let p = 45;                  // Number
let q = "Harry bhai";        // String
let r = true;                // Boolean
let s = undefined;           // Undefined
let t = null;                // Null (object ki tarah treat hota hai par primitive hai)
let u = BigInt("567");       // BigInt
let v = Symbol("I am a symbol"); // Symbol

console.log(typeof p, typeof q, typeof r, typeof s, typeof t, typeof u, typeof v);


// ==========================================
// 3. OBJECTS (Non-Primitive Data Type)
// ==========================================

// Object key-value pairs ka collection hota hai
let student = {
    name: "Harry",
    "job role": "Developer",
    rollNumber: 34500,
    isStudent: true
};

console.log(student);

// Object ki properties ko access karne ke 2 tareeqe:
console.log(student.name);        // Dot notation
console.log(student["job role"]); // Bracket notation (jab key me space ho)

// Object me nayi property add karna ya update karna
student.age = 25;
student.name = "CodeWithHarry";
console.log(student);