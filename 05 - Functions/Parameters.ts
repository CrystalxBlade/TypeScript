export {};

console.log("----- PARAMETERS -----");

// Function with one parameter
function greetPlayer(name: string): void {
    console.log(`Hello, ${name}!`);
}

greetPlayer("Blade");
greetPlayer("Crystal");

// Function with multiple parameters
function introducePlayer(name: string, level: number): void {
    console.log(`${name} is at level ${level}.`);
}

introducePlayer("Knight", 5);
introducePlayer("Hornet", 10);

// Function with a boolean parameter
function checkPlayerStatus(name: string, isAlive: boolean): void {
    console.log(`${name} alive: ${isAlive}`);
}

checkPlayerStatus("Blade", true);

// TypeScript error examples:
// greetPlayer(100);
// introducePlayer("Blade", "Five");
// checkPlayerStatus("Crystal", "yes");