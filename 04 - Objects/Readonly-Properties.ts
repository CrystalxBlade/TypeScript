export {};

console.log("----- READONLY PROPERTIES -----");

let player: {
    readonly id: number;
    name: string;
    health: number;
} = {
    id: 101,
    name: "Blade",
    health: 100
};

console.log("Original player:", player);

// Normal properties can be updated.
player.name = "Crystal";
player.health = 80;

console.log("Updated player:", player);

// Readonly property can be accessed normally.
console.log("Player ID:", player.id);

// This would cause a TypeScript error:
// player.id = 202;

// Readonly is shallow, not deep.
let game: {
    readonly settings: {
        difficulty: string;
    };
} = {
    settings: {
        difficulty: "Normal"
    }
};

// The nested property can still be changed.
game.settings.difficulty = "Hard";

console.log("Game settings:", game.settings);

// Replacing the readonly settings reference is not allowed:
// game.settings = { difficulty: "Easy" };