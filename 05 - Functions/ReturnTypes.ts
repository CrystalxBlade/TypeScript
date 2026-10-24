console.log("----- RETURN TYPES -----");

// Function returning a number
function add(a: number, b: number): number {
    return a + b;
}

let sum: number = add(10, 20);
console.log("Sum:", sum);

// Function returning a string
function getPlayerName(): string {
    return "Blade";
}

let playerName: string = getPlayerName();
console.log("Player:", playerName);

// Function returning a boolean
function isHighScore(score: number): boolean {
    return score >= 1000;
}

console.log(isHighScore(1200)); // true
console.log(isHighScore(500));  // false

// Function with no meaningful return value
function displayMessage(message: string): void {
    console.log(message);
}

displayMessage("Welcome to Sky Ball!");

// TypeScript error example:
// function getScore(): number {
//     return "100";
// }