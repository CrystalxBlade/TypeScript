export{};

let playerName = "Blade";
let playerScore = 950;
let isPlayerAlive = true;

console.log(playerName);
console.log(playerScore);
console.log(isPlayerAlive);

// TypeScript infers:
// playerName      -> string
// playerScore     -> number
// isPlayerAlive   -> boolean

// These assignments work:
playerName = "Crystal";
playerScore = 1000;
isPlayerAlive = false;

// These would produce TypeScript errors:
// playerName = 100;
// playerScore = "950";
// isPlayerAlive = "yes";

// Explicit type annotation:
let gameName: string = "Sky Ball";

// Type inference means you usually don't need to write
// ': string' when the initial value already makes the type clear.