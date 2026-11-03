// 1. Named Variable Exports

export const playerName: string = "Blade";

export const playerHealth: number = 100;

export const playerLevel: number = 5;


// 2. Function Exports

export function showPlayerDetails(): void {
    console.log(`Name: ${playerName}`);
    console.log(`Health: ${playerHealth}`);
    console.log(`Level: ${playerLevel}`);
}

export function attack(target: string): void {
    console.log(`${playerName} attacks ${target}!`);
}


// 3. Class Export

export class Weapon {
    constructor(
        public name: string,
        public damage: number
    ) {}

    showDetails(): void {
        console.log(`${this.name} deals ${this.damage} damage.`);
    }
}


// 4. Interface Export

export interface PlayerStats {
    health: number;
    level: number;
}


// 5. Type Alias Export

export type Difficulty = "easy" | "medium" | "hard";


// 6. Named Exports Grouped at the End

const gameName: string = "Shadow Knight";

function startGame(): void {
    console.log(`${gameName} has started!`);
}

export { gameName, startGame };


// 7. Default Export

export default class Game {
    start(): void {
        console.log("Welcome to the game!");
    }
}