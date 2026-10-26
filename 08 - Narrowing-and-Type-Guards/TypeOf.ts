export {};

console.log("----- TYPEOF AND NARROWING -----");

// 1. typeof with primitive values
console.log(typeof "Blade");  // string
console.log(typeof 100);      // number
console.log(typeof true);     // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);     // object

// 2. Narrowing a string | number union
function displayValue(value: string | number): void {
    if (typeof value === "string") {
        console.log("Uppercase:", value.toUpperCase());
    } else {
        console.log("Doubled:", value * 2);
    }
}

displayValue("Blade");
displayValue(25);

// 3. Narrowing with truthiness
function printPlayerName(name: string | null): void {
    if (name) {
        console.log("Player:", name.toUpperCase());
    } else {
        console.log("No player name provided.");
    }
}

printPlayerName("Crystal");
printPlayerName(null);
printPlayerName("");

// 4. Narrowing with equality
function showGameStatus(
    status: "Loading" | "Playing" | "GameOver"
): void {
    if (status === "Playing") {
        console.log("The game is running.");
    } else if (status === "Loading") {
        console.log("Please wait...");
    } else {
        console.log("Game finished.");
    }
}

showGameStatus("Playing");
showGameStatus("Loading");
showGameStatus("GameOver");

// 5. Narrowing with typeof and an unknown value
function processInput(input: unknown): void {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    } else if (typeof input === "number") {
        console.log(input.toFixed(2));
    } else {
        console.log("Input is not a string or number.");
    }
}

processInput("Knight");
processInput(42.5);
processInput(true);