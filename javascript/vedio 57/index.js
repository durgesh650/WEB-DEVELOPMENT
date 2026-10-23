// 1. Basic For Loop (Prints numbers from 1 to 100)
let a = 1;
console.log("--- Basic For Loop ---");
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

// 2. For-In Loop (Iterates through object keys)
let obj = {
    name: "harry",
    role: "programer",
    company: "CodeWithHarry",
    ai: "AI"
};

console.log("--- For-In Loop ---");
for (const key in obj) {
    console.log(key);
}

// 3. For-Of Loop (Iterates through iterables like strings)
let iterator = "harry";
console.log("--- For-Of Loop ---");
for (const c of iterator) {
    console.log(c);
}

// 4. While Loop (Checks condition before running)
console.log("--- While Loop ---");
let i = 0;
while (i < 6) {
    console.log(i);
    i++;
}

// 5. Do-While Loop (Runs at least once before checking condition)
console.log("--- Do-While Loop ---");
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 6);