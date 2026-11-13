export {};

abstract class Character {
  constructor(public name: string, public health: number) {}

  // abstract method: no body, children must implement it
  abstract attack(): void;

  // normal method: shared code, children inherit it
  takeDamage(amount: number): void {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health left`);
  }
}

class Hero extends Character {
  attack(): void {
    console.log(`${this.name} swings a sword!`);
  }
}

class Enemy extends Character {
  attack(): void {
    console.log(`${this.name} bites!`);
  }
}

const blade = new Hero("Blade", 100);
blade.attack();         // Blade swings a sword!
blade.takeDamage(20);   // Blade has 80 health left

// const c = new Character("X", 10);  // Error: cannot create an instance of an abstract class
