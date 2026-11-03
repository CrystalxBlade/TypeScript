// 1. Named Variable Exports
export const playerName = "Blade";
export const playerHealth = 100;
export const playerLevel = 5;
// 2. Function Exports
export function showPlayerDetails() {
    console.log(`Name: ${playerName}`);
    console.log(`Health: ${playerHealth}`);
    console.log(`Level: ${playerLevel}`);
}
export function attack(target) {
    console.log(`${playerName} attacks ${target}!`);
}
// 3. Class Export
export class Weapon {
    name;
    damage;
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    showDetails() {
        console.log(`${this.name} deals ${this.damage} damage.`);
    }
}
// 6. Named Exports Grouped at the End
const gameName = "Shadow Knight";
function startGame() {
    console.log(`${gameName} has started!`);
}
export { gameName, startGame };
// 7. Default Export
export default class Game {
    start() {
        console.log("Welcome to the game!");
    }
}
