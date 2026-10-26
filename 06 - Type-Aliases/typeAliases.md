# Type Aliases in TypeScript

A type alias allows us to create a custom name for a type using the `type` keyword.

Type aliases make code easier to read, reuse, and maintain.

## 1. Creating a Type Alias

### Syntax

```ts
type AliasName = Type;
```

### Example

```ts
type PlayerName = string;

let player: PlayerName = "Blade";

console.log(player);
```

Here, `PlayerName` is an alias for the `string` type.

## 2. Type Aliases for Primitive Types

You can create aliases for primitive types such as `string`, `number`, and `boolean`.

```ts
type Username = string;
type PlayerLevel = number;
type IsAlive = boolean;

let name: Username = "Crystal";
let level: PlayerLevel = 10;
let alive: IsAlive = true;
```

These aliases do not create brand-new distinct types. They give existing types new names.

## 3. Type Aliases for Objects

You can define an object's structure with a type alias.

```ts
type Player = {
    name: string;
    health: number;
    level: number;
};

let blade: Player = {
    name: "Blade",
    health: 100,
    level: 5
};
```

Any value assigned to `Player` must have the required properties with compatible types.

## 4. Type Aliases for Arrays

You can create aliases for array types.

```ts
type Scores = number[];

let playerScores: Scores = [100, 250, 500];
```

This makes it easier to reuse the same array type in multiple places.

## 5. Union Types with Aliases

A union type allows a value to be one of several specified types.

```ts
type PlayerId = number | string;

let firstId: PlayerId = 101;
let secondId: PlayerId = "PLAYER-102";
```

The `|` symbol means OR. A `PlayerId` can be a number or a string.

## 6. Literal Union Types

You can restrict a variable to a specific set of values.

```ts
type Difficulty = "Easy" | "Normal" | "Hard";

let gameDifficulty: Difficulty = "Normal";
```

Only the specified string values are allowed.

```ts
// Error: "Extreme" is not an allowed value.
// gameDifficulty = "Extreme";
```

## 7. Type Aliases for Function Types

You can create an alias for a function type.

```ts
type Operation = (a: number, b: number) => number;

let add: Operation = (a, b) => a + b;
let multiply: Operation = (a, b) => a * b;
```

Both functions must accept two numbers and return a number.

## 8. Combining Object Types with Intersections

The `&` symbol combines multiple types into one.

```ts
type Player = {
    name: string;
};

type Stats = {
    health: number;
    level: number;
};

type GameCharacter = Player & Stats;

let character: GameCharacter = {
    name: "Knight",
    health: 100,
    level: 5
};
```

`GameCharacter` requires all properties from both `Player` and `Stats`.

## 9. Type Aliases vs Interfaces

Both type aliases and interfaces can describe object structures.

```ts
type Player = {
    name: string;
};

interface Enemy {
    name: string;
}
```

A useful beginner guideline:

- Use `type` for unions, intersections, literal types, tuples, and other complex type expressions.
- Use `interface` when describing object shapes that may benefit from extension or declaration merging.
- Both can describe many of the same object structures, so there is some overlap.

## Important Points

- Use the `type` keyword to create a type alias.
- Type aliases can represent primitives, objects, arrays, unions, intersections, tuples, and function types.
- Aliases improve readability and reuse.
- A type alias does not create a distinct type by itself.
- Use `|` for unions and `&` for intersections.
- Type aliases and interfaces overlap, but they are not interchangeable in every situation.

## Summary

| Concept | Example |
|---|---|
| Primitive alias | `type Username = string;` |
| Object alias | `type Player = { name: string };` |
| Array alias | `type Scores = number[];` |
| Union alias | `type ID = number \| string;` |
| Literal union | `type Mode = "Easy" \| "Hard";` |
| Function alias | `type Add = (a: number, b: number) => number;` |
| Intersection | `type Character = Player & Stats;` |