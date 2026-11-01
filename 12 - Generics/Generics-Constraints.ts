export {};

// 1. A Generic Constraint Using an Interface

interface HasLength {
    length: number;
}

function showLength<T extends HasLength>(value: T): void {
    console.log(`Length: ${value.length}`);
}

showLength("Blade");
showLength([10, 20, 30]);
showLength({ length: 5 });

// showLength(100); // Error: number has no length property


// 2. A Generic Constraint with Object Properties

interface HasName {
    name: string;
}

function displayName<T extends HasName>(item: T): void {
    console.log(item.name);
}

displayName({ name: "Blade" });
displayName({ name: "Crystal", level: 10 });

// displayName({ level: 10 }); // Error: name is required


// 3. Using keyof to Restrict Object Keys

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

const name = getProperty(player, "name");
const health = getProperty(player, "health");
const level = getProperty(player, "level");

console.log(name);
console.log(health);
console.log(level);

// getProperty(player, "weapon"); // Error: invalid key


// 4. A Generic Constraint with an Array

function getLastItem<T>(items: T[]): T | undefined {
    return items[items.length - 1];
}

console.log(getLastItem(["Blade", "Knight", "Hornet"]));
console.log(getLastItem([10, 20, 30]));
console.log(getLastItem([]));


// 5. A Generic Constraint Using a Class

class GameCharacter {
    constructor(public name: string) {}
}

function introduceCharacter<T extends GameCharacter>(character: T): void {
    console.log(`Meet ${character.name}!`);
}

class Warrior extends GameCharacter {
    constructor(name: string, public weapon: string) {
        super(name);
    }
}

const warrior = new Warrior("Blade", "Sword");

introduceCharacter(warrior);

// introduceCharacter("Blade"); // Error: string is not a GameCharacter


// 6. A Generic Constraint with Multiple Properties

interface GameItem {
    name: string;
    price: number;
}

function displayItem<T extends GameItem>(item: T): void {
    console.log(`Item: ${item.name}`);
    console.log(`Price: ${item.price}`);
}

displayItem({
    name: "Dragon Sword",
    price: 500,
    damage: 75
});

// Missing required properties would cause an error:
// displayItem({ name: "Potion" });