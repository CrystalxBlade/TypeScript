console.log("----- INTERFACES -----");

// 1. Defining an interface
interface Player {
    name: string;
    health: number;
    level: number;
}

// Creating an object that follows the interface
let blade: Player = {
    name: "Blade",
    health: 100,
    level: 5
};

console.log("Player:", blade);
console.log("Name:", blade.name);
console.log("Health:", blade.health);
console.log("Level:", blade.level);


// 2. Optional properties
interface GameCharacter {
    name: string;
    weapon?: string;
}

let knight: GameCharacter = {
    name: "Knight"
};

console.log("Character:", knight);

knight.weapon = "Steel Sword";

console.log("Updated character:", knight);


// 3. Readonly properties
interface PlayerAccount {
    readonly id: number;
    username: string;
}

let account: PlayerAccount = {
    id: 101,
    username: "Blade"
};

account.username = "Crystal";

console.log("Account:", account);

// TypeScript error:
// account.id = 202;


// 4. Methods in interfaces
interface Enemy {
    name: string;
    attack(): void;
}

let hornet: Enemy = {
    name: "Hornet",
    attack() {
        console.log(`${this.name} attacks!`);
    }
};

hornet.attack();


// 5. Interface with a method that returns a value
interface ScoreCalculator {
    calculateBonus(score: number): number;
}

let calculator: ScoreCalculator = {
    calculateBonus(score: number): number {
        return score + 100;
    }
};

console.log("Bonus score:", calculator.calculateBonus(500));


// TypeScript error examples:
// Missing required property:
// let invalidPlayer: Player = { name: "Ghost", health: 100 };

// Incorrect property type:
// let invalidEnemy: Enemy = {
//     name: "Enemy",
//     attack: 100
// };