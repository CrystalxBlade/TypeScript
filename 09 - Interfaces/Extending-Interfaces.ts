export {};

console.log("----- EXTENDING INTERFACES -----");

// 1. Base interface
interface Player {
    name: string;
    health: number;
}

// Extending the base interface
interface Warrior extends Player {
    weapon: string;
}

let knight: Warrior = {
    name: "Knight",
    health: 150,
    weapon: "Steel Sword"
};

console.log("Warrior:", knight);


// 2. Extending multiple interfaces
interface Identity {
    id: number;
}

interface Stats {
    level: number;
    attack: number;
}

interface GameCharacter extends Identity, Stats {
    name: string;
}

let blade: GameCharacter = {
    id: 101,
    name: "Blade",
    level: 10,
    attack: 75
};

console.log("Game character:", blade);


// 3. Extending an interface with optional properties
interface BasicEnemy {
    name: string;
}

interface BossEnemy extends BasicEnemy {
    health: number;
    specialAttack?: string;
}

let boss: BossEnemy = {
    name: "Hornet",
    health: 500,
    specialAttack: "Silk Strike"
};

console.log("Boss enemy:", boss);


// 4. Interfaces can extend interfaces that already extend others
interface Equipment {
    weapon: string;
}

interface ArmedWarrior extends Warrior, Equipment {
    armor: string;
}

let armoredKnight: ArmedWarrior = {
    name: "Knight",
    health: 200,
    weapon: "Great Sword",
    armor: "Steel Armor"
};

console.log("Armored warrior:", armoredKnight);


// TypeScript error examples:
// Missing the inherited 'name' property:
// let invalidWarrior: Warrior = {
//     health: 100,
//     weapon: "Sword"
// };

// Incompatible inherited property type:
// let invalidBoss: BossEnemy = {
//     name: "Boss",
//     health: "High"
// };