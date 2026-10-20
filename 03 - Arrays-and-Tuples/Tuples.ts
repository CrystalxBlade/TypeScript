console.log("----- TUPLES -----");

// A tuple with a string followed by a number
let player: [string, number] = ["Blade", 950];

console.log(player);

// Accessing tuple elements
console.log("Player name:", player[0]);
console.log("Player score:", player[1]);

// Updating tuple elements
player[0] = "Crystal";
player[1] = 1200;

console.log("Updated player:", player);

// Tuple with three different element types
let playerDetails: [string, number, boolean] = [
    "Knight",
    5,
    true
];

console.log(playerDetails);

// Optional tuple element
let playerInfo: [string, number?] = ["Blade"];

console.log(playerInfo);

playerInfo = ["Blade", 24];
console.log(playerInfo);

// Readonly tuple
let position: readonly [number, number] = [10, 20];

console.log("X:", position[0]);
console.log("Y:", position[1]);

// These would cause TypeScript errors:
// position[0] = 30;
// position.push(40);

// Incorrect tuple order:
// let wrongPlayer: [string, number] = [950, "Blade"];