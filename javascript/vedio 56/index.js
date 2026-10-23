// ==========================================
// 1. Basic Console Log & Variables
// ==========================================
console.log("Hello, I am Conditionals Tutorial");

let age = 45;

// Basic If-Else Statement
if (age > 18) {
    console.log("You Can Drive");
} else {
    console.log("You Cannot Drive");
}

// ==========================================
// 2. Arithmetic, Modulus & Exponential Operators
// ==========================================
let ageForGrace = 3;
let grace = 2;

// Exponential Operator (3^2 = 9)
console.log(ageForGrace ** grace); // Output: 9

// Modulus Operator (Reminder of 3 / 2)
console.log(ageForGrace % grace);  // Output: 1

// Assignment Operator (+=)
ageForGrace += grace; 
console.log("Updated Age:", ageForGrace); // Output: 5

// ==========================================
// 3. Comparison Operators (== vs ===)
// ==========================================
console.log(3 == "3");  // Output: true (केवल वैल्यू चेक करता है)
console.log(3 === "3"); // Output: false (वैल्यू और डेटा टाइप दोनों चेक करता है)

let x = 6;
let y = 7;
console.log(x !== y);   // Output: true

// ==========================================
// 4. Logical Operators (&&, ||, !)
// ==========================================
// Logical AND (&&) - दोनों कंडीशन्स सच होनी चाहिए
console.log((x !== y) && (y !== x)); // Output: true

// Logical OR (||) - कोई एक कंडीशन सच होनी चाहिए
console.log((x === y) || (x !== y)); // Output: true

// Logical NOT (!) - वैल्यू को उल्टा करता है
console.log(!(x === y));             // Output: true

// ==========================================
// 5. If-Else-If Ladder
// ==========================================
let personAge = 1;

if (personAge == 18) {
    console.log("You Can Drive");
} else if (personAge === 0) {
    console.log("Are you kidding?");
} else if (personAge === 1) {
    console.log("Are you again kidding?");
} else {
    console.log("Invalid Age");
}

// ==========================================
// 6. Ternary Operator (One-line If-Else)
// ==========================================
let a = 6;
let b = 8;

// Condition ? True_Value : False_Value
let c = (a > b) ? (a - b) : (b - a);
console.log("Ternary Result (c):", c); // Output: 2

// ==========================================
// 7. Comments Example
// ==========================================
// यह एक सिंगल लाइन कमेंट है

/* 
   यह एक मल्टी-लाइन कमेंट है 
   जिसे जावास्क्रिप्ट इग्नोर कर देता है
*/