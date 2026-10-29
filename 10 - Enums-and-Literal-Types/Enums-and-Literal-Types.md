# Enums and Literal Types in TypeScript

## 1. What Are Enums?

An **enum** (short for enumeration) defines a named set of related constants.

Enums are useful when you have a fixed set of options, such as game difficulty levels or player classes.

```ts
enum Difficulty {
    Easy,
    Medium,
    Hard
}

let currentDifficulty: Difficulty = Difficulty.Medium;

console.log(currentDifficulty); // 1
```

By default, numeric enums start at `0` and increase by `1`.

### Numeric Enums

```ts
enum GameState {
    Menu = 1,
    Playing,
    Paused,
    GameOver
}

console.log(GameState.Menu);     // 1
console.log(GameState.Playing);  // 2
console.log(GameState.Paused);   // 3
```

You can assign explicit numeric values when needed.

### String Enums

String enums use meaningful string values.

```ts
enum Weapon {
    Sword = "SWORD",
    Bow = "BOW",
    Staff = "STAFF"
}

let playerWeapon: Weapon = Weapon.Sword;

console.log(playerWeapon); // SWORD
```

String enums are often easier to understand when debugging because their values are descriptive.

## 2. What Are Literal Types?

A **literal type** restricts a variable to a specific value or a specific set of values.

```ts
let direction: "left" | "right" | "up" | "down";

direction = "left";  // Valid
direction = "up";    // Valid

// direction = "forward"; // Error
```

Here, `direction` can only contain one of the four specified strings.

### Number Literal Types

```ts
let playerLives: 1 | 2 | 3;

playerLives = 3; // Valid
playerLives = 1; // Valid

// playerLives = 5; // Error
```

### Boolean Literal Types

```ts
let isGameOver: true;

isGameOver = true;

// isGameOver = false; // Error
```

This variable can only be `true`, not `false`.

## 3. Literal Types with Type Aliases

Type aliases make literal unions reusable.

```ts
type Difficulty = "easy" | "medium" | "hard";

let level: Difficulty = "medium";
```

You can reuse `Difficulty` throughout your program.

## 4. Enums vs Literal Types

| Feature | Enums | Literal Types |
|---|---|---|
| Example | `Weapon.Sword` | `"sword"` |
| Named collection | Yes | Usually a union of values |
| Runtime JavaScript output | Usually yes | No, types are erased |
| Best for | Named constants | Restricting allowed values |

For many simple choices, literal unions are lightweight and convenient. Enums remain useful when you want named enum members or need an enum at runtime.

## 5. When Should You Use Them?

Use enums for clearly named sets of constants, such as game states or input actions. Use literal types for restricted options such as difficulty, directions, status labels, or API response states.

**Remember:** TypeScript checks these restrictions while you develop, but type information alone does not validate untrusted data at runtime.