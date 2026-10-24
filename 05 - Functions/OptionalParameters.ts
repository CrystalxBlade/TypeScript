console.log("----- OPTIONAL PARAMETERS -----");

// Optional parameter
function greetPlayer(name: string, title?: string): void {
    if (title !== undefined) {
        console.log(`Welcome, ${title} ${name}!`);
    } else {
        console.log(`Welcome, ${name}!`);
    }
}

greetPlayer("Blade");
greetPlayer("Blade", "Knight");

// Default parameter
function startGame(difficulty: string = "Normal"): void {
    console.log(`Starting game on ${difficulty} difficulty.`);
}

startGame();
startGame("Hard");

// Required parameter followed by an optional parameter
function calculateScore(baseScore: number, bonus?: number): number {
    return baseScore + (bonus ?? 0);
}

console.log(calculateScore(100));
console.log(calculateScore(100, 50));

// TypeScript error examples:
// greetPlayer();
// startGame(10);

// Optional parameters must follow required parameters.
// function example(optional?: string, required: number): void {}