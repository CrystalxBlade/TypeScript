console.log("----- OBJECT TYPES -----");

// TypeScript infers the property types from these values.
let player = {
    name: "Blade",
    health: 100,
    level: 5,
    isAlive: true
};

console.log(player);

// Accessing properties
console.log("Name:", player.name);
console.log("Health:", player["health"]);
console.log("Level:", player.level);

// Updating existing properties
player.health = 80;
player.level = 6;

console.log("Updated player:", player);

// Explicitly defining an object type
let enemy: {
    name: string;
    health: number;
    isBoss: boolean;
} = {
    name: "Hornet",
    health: 250,
    isBoss: true
};

console.log("Enemy:", enemy);

// TypeScript error examples:
// player.health = "low";
// player.weapon = "Sword";
// enemy.isBoss = "yes";