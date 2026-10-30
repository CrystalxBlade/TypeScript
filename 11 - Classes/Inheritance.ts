export {};

// BASIC INHERITANCE

class Player {
    constructor(public name: string) {}

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

class Warrior extends Player {
    attack(): void {
        console.log(`${this.name} attacks with a sword!`);
    }
}

const warrior = new Warrior("Blade");

warrior.move();
warrior.attack();


// USING THE SUPER KEYWORD

class Character {
    constructor(public name: string, public health: number) {}

    showDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
    }
}

class Mage extends Character {
    constructor(name: string, health: number, public magicPower: number) {
        super(name, health);
    }

    castSpell(): void {
        console.log(`${this.name} casts a spell with ${this.magicPower} magic power!`);
    }
}

const mage = new Mage("Crystal", 80, 150);

mage.showDetails();
mage.castSpell();


// METHOD OVERRIDING

class Enemy {
    attack(): void {
        console.log("Enemy performs a basic attack!");
    }
}

class Boss extends Enemy {
    override attack(): void {
        console.log("Boss performs a powerful attack!");
    }
}

const enemy = new Enemy();
const boss = new Boss();

enemy.attack();
boss.attack();


// ABSTRACT CLASSES

abstract class GameCharacter {
    constructor(public name: string) {}

    abstract attack(): void;

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

class Archer extends GameCharacter {
    attack(): void {
        console.log(`${this.name} shoots an arrow!`);
    }
}

class Knight extends GameCharacter {
    attack(): void {
        console.log(`${this.name} attacks with a sword!`);
    }
}

const archer = new Archer("Hornet");
const knight = new Knight("Knight");

archer.move();
archer.attack();

knight.move();
knight.attack();