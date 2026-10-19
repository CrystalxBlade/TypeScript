let isPlayerAlive: boolean = true;
let isGameOver: boolean = false;

console.log(isPlayerAlive);
console.log(isGameOver);

// Boolean values in conditions
if (isPlayerAlive) {
    console.log("The player is still alive.");
}

if (!isGameOver) {
    console.log("The game is still running.");
}

// Updating boolean values
isPlayerAlive = false;
isGameOver = true;

console.log(isPlayerAlive);
console.log(isGameOver);

// TypeScript error example:
// isPlayerAlive = "yes";