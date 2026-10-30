// Creating a Class

class Player {
    name: string = "Blade";
    health: number = 100;

    attack(): void {
        console.log(`${this.name} is attacking!`);
    }
}

const player1 = new Player();

console.log(player1.name);
console.log(player1.health);

player1.attack();


// Creating Objects Using a Constructor

class Character {
    name: string;
    health: number;
    level: number;

    constructor(name: string, health: number, level: number) {
        this.name = name;
        this.health = health;
        this.level = level;
    }

    showDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Level: ${this.level}`);
    }

    takeDamage(damage: number): void {
        this.health -= damage;
        console.log(`${this.name} took ${damage} damage!`);
        console.log(`Remaining Health: ${this.health}`);
    }

    levelUp(): void {
        this.level++;
        console.log(`${this.name} reached level ${this.level}!`);
    }
}

const blade = new Character("Blade", 100, 1);
const knight = new Character("Knight", 150, 5);

blade.showDetails();
blade.takeDamage(20);
blade.levelUp();

knight.showDetails();


// Constructor Parameter Properties

class Weapon {
    constructor(
        public weaponName: string,
        public damage: number
    ) {}

    showWeapon(): void {
        console.log(`${this.weaponName} deals ${this.damage} damage.`);
    }
}

const sword = new Weapon("Dragon Sword", 50);

sword.showWeapon();


// Static Properties and Methods

class Game {
    static gameName: string = "Shadow Knight";

    static startGame(): void {
        console.log(`${Game.gameName} has started!`);
    }
}

console.log(Game.gameName);
Game.startGame();