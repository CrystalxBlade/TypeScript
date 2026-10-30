# Classes in TypeScript

## 1. What Are Classes?

A **class** is a blueprint for creating objects.

It defines the properties (data) and methods (behaviour) that objects created from it can have.

For example, imagine a game where every player has:
- A name
- Health
- A level
- An attack ability

Instead of creating every player object from scratch, we can create a `Player` class and use it to create multiple players.

## 2. Creating a Class

Use the `class` keyword to create a class.

```ts
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
```

### Understanding the Code

- `class Player`: Creates a class named Player.
- `name` and `health`: Properties of the class.
- `attack()`: A method belonging to the class.
- `new Player()`: Creates an object from the class.
- `this`: Refers to the current object.

The object created from a class is called an **instance** of that class.

## 3. Constructors

A constructor is a special method that runs automatically whenever a new object is created.

It is mainly used to initialize object properties.

```ts
class Player {
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }
}

const player1 = new Player("Blade", 100);
const player2 = new Player("Crystal", 150);

console.log(player1.name);
console.log(player2.name);
```

### Understanding the Code

- `constructor()` runs when an object is created.
- `name` and `health` are constructor parameters.
- `this.name = name` assigns the received value to the object's property.
- Each object can have different property values.

## 4. Methods Inside Classes

Methods are functions defined inside a class.

```ts
class Player {
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }

    attack(): void {
        console.log(`${this.name} attacks the enemy!`);
    }

    takeDamage(damage: number): void {
        this.health -= damage;
        console.log(`${this.name} has ${this.health} health remaining.`);
    }
}

const player = new Player("Blade", 100);

player.attack();
player.takeDamage(25);
```

Methods allow objects to perform actions using their own properties.

## 5. Constructor Parameter Properties

TypeScript provides a shorter way to declare and initialize class properties.

Instead of writing the properties separately and assigning them inside the constructor, you can use access modifiers directly in constructor parameters.

```ts
class Player {
    constructor(
        public name: string,
        public health: number
    ) {}
}

const player = new Player("Blade", 100);

console.log(player.name);
console.log(player.health);
```

Here, `public` automatically creates and initializes the properties.

This is called a **parameter property**.

## 6. The `this` Keyword

The `this` keyword refers to the current instance of a class.

```ts
class Player {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    showName(): void {
        console.log(this.name);
    }
}
```

`this.name` refers to the property belonging to the current object.

If two objects are created, each object has its own `name`.

## 7. Access Modifiers

Access modifiers control where class properties and methods can be accessed.

TypeScript provides three main access modifiers:

| Modifier | Accessibility |
|---|---|
| `public` | Accessible from anywhere |
| `private` | Accessible only inside the declaring class |
| `protected` | Accessible inside the declaring class and its subclasses |

### Public

```ts
class Player {
    public name: string = "Blade";
}

const player = new Player();

console.log(player.name); // Allowed
```

Properties and methods are public by default.

### Private

```ts
class Player {
    private health: number = 100;

    showHealth(): void {
        console.log(this.health);
    }
}

const player = new Player();

player.showHealth();

// player.health; // Error
```

A private property cannot be accessed directly outside its class.

### Protected

```ts
class Player {
    protected health: number = 100;
}

class Warrior extends Player {
    showHealth(): void {
        console.log(this.health);
    }
}
```

The `Warrior` class can access the protected property because it inherits from `Player`.

However, code outside these classes cannot directly access it.

## 8. Readonly Properties

The `readonly` modifier prevents a property from being reassigned after initialization.

```ts
class Player {
    readonly playerID: number;

    constructor(playerID: number) {
        this.playerID = playerID;
    }
}

const player = new Player(101);

console.log(player.playerID);

// player.playerID = 202; // Error
```

A readonly property can be initialized at its declaration or inside the constructor.

## 9. Static Properties and Methods

The `static` keyword creates properties and methods that belong to the class itself rather than individual objects.

```ts
class Game {
    static gameName: string = "Shadow Knight";

    static startGame(): void {
        console.log("Game Started!");
    }
}

console.log(Game.gameName);

Game.startGame();
```

Notice that we access static members using the class name instead of creating an object.

```ts
Game.startGame();
```

You cannot access a static member through a normal instance.

## 10. Inheritance

Inheritance allows one class to reuse the properties and methods of another class.

The `extends` keyword is used to inherit a class.

```ts
class Player {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

class Warrior extends Player {
    attack(): void {
        console.log(`${this.name} is attacking!`);
    }
}

const warrior = new Warrior("Blade");

warrior.move();
warrior.attack();
```

Here:
- `Player` is the parent class.
- `Warrior` is the child class.
- `Warrior` inherits the `name` property and `move()` method.
- `Warrior` also has its own `attack()` method.

## 11. The `super` Keyword

The `super` keyword is used to access the parent class constructor or methods.

```ts
class Player {
    constructor(public name: string) {}

    showName(): void {
        console.log(this.name);
    }
}

class Warrior extends Player {
    constructor(name: string, public weapon: string) {
        super(name);
    }

    attack(): void {
        super.showName();
        console.log(`Attacking with ${this.weapon}!`);
    }
}

const warrior = new Warrior("Blade", "Sword");

warrior.attack();
```

### Important

When a child class defines its own constructor, it must call `super()` before accessing `this`.

## 12. Method Overriding

A child class can provide its own implementation of a method inherited from the parent class.

This is called **method overriding**.

```ts
class Player {
    attack(): void {
        console.log("Player attacks!");
    }
}

class Warrior extends Player {
    override attack(): void {
        console.log("Warrior performs a powerful attack!");
    }
}

const warrior = new Warrior();

warrior.attack();
```

The `override` keyword tells TypeScript that the method is intended to replace an inherited method.

## 13. Abstract Classes

An abstract class is a base class that cannot be instantiated directly.

It is designed to be inherited by other classes.

```ts
abstract class Character {
    constructor(public name: string) {}

    abstract attack(): void;

    move(): void {
        console.log(`${this.name} is moving.`);
    }
}

class Warrior extends Character {
    attack(): void {
        console.log(`${this.name} attacks with a sword!`);
    }
}

const warrior = new Warrior("Blade");

warrior.move();
warrior.attack();

// const character = new Character("Knight"); // Error
```

An abstract class can contain:
- Normal properties and methods.
- Abstract methods that child classes must implement.

## 14. Important Concepts to Remember

| Concept | Purpose |
|---|---|
| Class | Blueprint for creating objects |
| Object | Instance created from a class |
| Constructor | Initializes an object |
| `this` | Refers to the current instance |
| `public` | Accessible everywhere |
| `private` | Accessible only inside the declaring class |
| `protected` | Accessible inside the class and subclasses |
| `readonly` | Prevents reassignment |
| `static` | Belongs to the class itself |
| `extends` | Inherits another class |
| `super` | Accesses the parent constructor or methods |
| `override` | Replaces an inherited method |
| `abstract` | Defines a base class or required method |

**Final Tip:** Classes are particularly useful when creating objects that have both data and behaviour, such as players, enemies, weapons, vehicles, and game managers.