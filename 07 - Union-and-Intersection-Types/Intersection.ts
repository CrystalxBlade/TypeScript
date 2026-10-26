console.log("----- INTERSECTION TYPES -----");

// 1. Define separate object types
type Player = {
    name: string;
};

type Stats = {
    health: number;
    level: number;
};

// 2. Combine types using an intersection
type GameCharacter = Player & Stats;

// The object must satisfy both Player and Stats.
let blade: GameCharacter = {
    name: "Blade",
    health: 100,
    level: 5
};

console.log("Character:", blade);
console.log("Name:", blade.name);
console.log("Health:", blade.health);
console.log("Level:", blade.level);


// 3. Combining three types
type Equipment = {
    weapon: string;
};

type Warrior = Player & Stats & Equipment;

let knight: Warrior = {
    name: "Knight",
    health: 150,
    level: 10,
    weapon: "Steel Sword"
};

console.log("Warrior:", knight);


// 4. Updating properties
blade.health = 80;
blade.level = 6;

console.log("Updated character:", blade);


// 5. Intersection with a function parameter
function showWarrior(warrior: Warrior): void {
    console.log(
        `${warrior.name} uses ${warrior.weapon} and has ${warrior.health} health.`
    );
}

showWarrior(knight);


// TypeScript error examples:
// Missing required property 'health':
// let invalidCharacter: GameCharacter = {
//     name: "Ghost",
//     level: 5
// };

// Incompatible property type:
// let invalidStats: Stats = {
//     health: "high",
//     level: 5
// };