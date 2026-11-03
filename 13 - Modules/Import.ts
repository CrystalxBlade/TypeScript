export {};

// 1. Import Named Variables and Functions

import {
    playerName,
    playerHealth,
    playerLevel,
    showPlayerDetails,
    attack
} from "./Exports.js";

console.log(playerName);
console.log(playerHealth);
console.log(playerLevel);

showPlayerDetails();
attack("the enemy");


// 2. Import and Use a Class

import { Weapon } from "./Exports.js";

const sword = new Weapon("Dragon Sword", 50);

sword.showDetails();


// 3. Import an Interface and a Type

import type { PlayerStats, Difficulty } from "./Exports.js";

const stats: PlayerStats = {
    health: 100,
    level: 5
};

const difficulty: Difficulty = "hard";

console.log(stats);
console.log(difficulty);


// 4. Import Named Exports from the End of the File

import { gameName, startGame } from "./Exports.js";

console.log(gameName);
startGame();


// 5. Import the Default Export

import Game from "./Exports.js";

const game = new Game();

game.start();


// 6. Rename a Named Import

import { playerName as characterName } from "./Exports.js";

console.log(`Current character: ${characterName}`);