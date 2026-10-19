let playerName: string = "Blade";
let gameName: string = "Sky Ball";

console.log(playerName);
console.log(gameName);

// String methods
console.log(playerName.toUpperCase());
console.log(playerName.toLowerCase());

// String concatenation
let message: string = playerName + " is playing " + gameName;

console.log(message);

// Template literals
let greeting: string = `Welcome, ${playerName}!`;

console.log(greeting);

// TypeScript error example:
// playerName = 100;