export {};

// 1. Using keyof

type Player = {
    name: string;
    health: number;
    level: number;
};

type PlayerKeys = keyof Player;

let playerKey: PlayerKeys;

playerKey = "name";
playerKey = "health";
playerKey = "level";

// playerKey = "weapon"; // Error

console.log(playerKey);


// 2. Using keyof with a Function

function getProperty<T, K extends keyof T>(
    object: T,
    key: K
): T[K] {
    return object[key];
}

const player = {
    name: "Blade",
    health: 100,
    level: 5
};

const playerName = getProperty(player, "name");
const playerHealth = getProperty(player, "health");

console.log(playerName);
console.log(playerHealth);

// getProperty(player, "weapon"); // Error


// 3. Using typeof at Runtime

const characterName = "Hornet";

console.log(typeof characterName); // string


// 4. Using typeof as a Type Operator

const enemy = {
    name: "Boss",
    health: 500,
    damage: 75
};

type Enemy = typeof enemy;

const anotherEnemy: Enemy = {
    name: "Guardian",
    health: 300,
    damage: 50
};

console.log(anotherEnemy);


// 5. Combining keyof and typeof

const weapons = {
    sword: 50,
    bow: 40,
    staff: 60
};

type Weapon = keyof typeof weapons;

let selectedWeapon: Weapon;

selectedWeapon = "sword";
selectedWeapon = "bow";

// selectedWeapon = "axe"; // Error

console.log(selectedWeapon);


// 6. Using typeof with an Array

const playerNames = ["Blade", "Crystal", "Knight"];

type PlayerName = typeof playerNames[number];

const name: PlayerName = "Hornet";

console.log(name);