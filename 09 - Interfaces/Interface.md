# Interfaces in TypeScript

An interface defines the expected structure of an object, including its properties and methods.

Interfaces help organize code, improve readability, and ensure objects follow consistent rules.

## 1. Creating an Interface

Use the `interface` keyword to define an interface.

```ts
interface Player {
    name: string;
    health: number;
    level: number;
}
```

Here, `Player` describes an object with three required properties.

## 2. Creating Objects Using an Interface

An object can follow an interface by providing its required properties with compatible types.

```ts
interface Player {
    name: string;
    health: number;
    level: number;
}

let blade: Player = {
    name: "Blade",
    health: 100,
    level: 5
};
```

TypeScript reports an error if required properties are missing or have incompatible types.

## 3. Optional Properties

Use `?` to make a property optional.

```ts
interface Player {
    name: string;
    weapon?: string;
}

let player: Player = {
    name: "Blade"
};
```

The `weapon` property can be omitted. If supplied, it must have the specified type.

## 4. Readonly Properties

Use `readonly` to prevent a property from being reassigned after initialization.

```ts
interface Player {
    readonly id: number;
    name: string;
}

let player: Player = {
    id: 101,
    name: "Blade"
};

player.name = "Crystal"; // Allowed
// player.id = 202;      // Error
```

Readonly is a compile-time restriction. It does not automatically make nested objects deeply immutable.

## 5. Methods in Interfaces

An interface can describe methods an object must provide.

```ts
interface Player {
    name: string;
    attack(): void;
}

let knight: Player = {
    name: "Knight",
    attack() {
        console.log(`${this.name} attacks!`);
    }
};

knight.attack();
```

The `attack()` method must exist and follow the specified signature.

## 6. Extending Interfaces

An interface can extend another interface using `extends`.

```ts
interface Player {
    name: string;
    health: number;
}

interface Warrior extends Player {
    weapon: string;
}

let knight: Warrior = {
    name: "Knight",
    health: 150,
    weapon: "Steel Sword"
};
```

`Warrior` inherits the required properties from `Player` and adds `weapon`.

## 7. Extending Multiple Interfaces

An interface can extend multiple interfaces.

```ts
interface Identity {
    name: string;
}

interface Stats {
    health: number;
}

interface Character extends Identity, Stats {
    level: number;
}
```

A `Character` must satisfy all three sets of requirements.

## 8. Interfaces with Function Types

An interface can describe a callable function using a call signature.

```ts
interface Calculator {
    (a: number, b: number): number;
}

const add: Calculator = (a, b) => a + b;

console.log(add(10, 20));
```

This describes a function that accepts two numbers and returns a number.

## 9. Interface vs Type Alias

Both interfaces and type aliases can describe object structures.

```ts
interface Player {
    name: string;
}

type Enemy = {
    name: string;
};
```

A useful guideline:

- Use interfaces for object contracts that may be extended or merged.
- Use type aliases for unions, intersections, tuples, literal types, and other type expressions.
- Both can describe many of the same object shapes.

One important difference: interfaces support declaration merging, meaning compatible declarations with the same name can be combined. Type aliases cannot be redeclared in the same scope.

## Important Points

- Use `interface` to describe an object's expected structure.
- Required properties must be provided.
- `?` defines optional properties.
- `readonly` prevents property reassignment through that reference.
- Interfaces can describe methods and callable functions.
- Use `extends` to inherit requirements from other interfaces.
- Interfaces are primarily a compile-time feature and are erased from generated JavaScript.

## Summary

| Concept | Example |
|---|---|
| Interface | `interface Player { name: string; }` |
| Optional property | `weapon?: string` |
| Readonly property | `readonly id: number` |
| Method | `attack(): void` |
| Extend an interface | `interface Warrior extends Player` |
| Extend multiple interfaces | `interface Character extends Identity, Stats` |
| Call signature | `(a: number, b: number): number` |