console.log("----- ARRAYS -----");

// Creating arrays
let playerScores: number[] = [100, 250, 300, 450];
let playerNames: string[] = ["Blade", "Crystal", "Knight"];

console.log(playerScores);
console.log(playerNames);

// Accessing elements using indexes
console.log(playerScores[0]); // 100
console.log(playerNames[1]);  // Crystal

// Getting array length
console.log("Number of scores:", playerScores.length);

// Adding an element
playerScores.push(500);
console.log("After push:", playerScores);

// Removing the last element
playerScores.pop();
console.log("After pop:", playerScores);

// Checking whether an element exists
console.log(playerScores.includes(250)); // true
console.log(playerScores.includes(999)); // false

// Finding an element's index
console.log(playerScores.indexOf(300)); // 2
console.log(playerScores.indexOf(999)); // -1

// Looping through an array
for (let score of playerScores) {
    console.log(score);
}

// Alternative array syntax
let extraScores: Array<number> = [50, 75, 100];
console.log(extraScores);

// TypeScript error examples:
// playerScores.push("500");
// playerNames[0] = 100;