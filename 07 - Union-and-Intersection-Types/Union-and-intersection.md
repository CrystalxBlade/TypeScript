# Union and Intersection Types in TypeScript

Union and intersection types allow us to combine types and define more flexible rules for values.

## 1. Union Types (`|`)

A union type allows a variable to hold a value that matches any one of the specified types.

### Syntax

```ts
type TypeName = TypeA | TypeB;
```

### Example

```ts
let playerId: number | string;

playerId = 101;
playerId = "PLAYER-101";
```

Both assignments are valid because `playerId` can be a number or a string.

This assignment is invalid:

```ts
// playerId = true;
```

### Union with Type Aliases

```ts
type PlayerId = number | string;

let id: PlayerId = 101;
id = "BLADE-101";
```

A type alias lets you reuse the union throughout your project.

## 2. Union Types with Literal Values

Unions can restrict a variable to a specific set of allowed values.

```ts
type Difficulty = "Easy" | "Normal" | "Hard";

let gameDifficulty: Difficulty = "Normal";
```

Only `"Easy"`, `"Normal"`, and `"Hard"` are valid values.

This is useful for game modes, status values, categories, and other predefined choices.

## 3. Using Union Types with Functions

A function can accept a parameter that matches one of several types.

```ts
function displayId(id: number | string): void {
    console.log(id);
}

displayId(101);
displayId("PLAYER-101");
```

However, TypeScript only allows operations that are valid for every possible member of a union until the type is narrowed.

## 4. Type Narrowing

Type narrowing means checking a value's type before performing an operation that only works for a particular type.

```ts
function displayValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```

Here, `typeof` helps TypeScript determine which type is being used inside each branch.

## 5. Intersection Types (`&`)

An intersection type combines multiple types. A value assigned to the resulting type must satisfy all the combined requirements.

### Syntax

```ts
type Combined = TypeA & TypeB;
```

### Example

```ts
type Player = {
    name: string;
};

type Stats = {
    health: number;
    level: number;
};

type GameCharacter = Player & Stats;
```

A `GameCharacter` must contain `name`, `health`, and `level`.

```ts
let character: GameCharacter = {
    name: "Blade",
    health: 100,
    level: 5
};
```

Leaving out a required property or giving it an incompatible type causes a TypeScript error.

## 6. Combining Multiple Types

You can intersect more than two types.

```ts
type Identity = {
    name: string;
};

type CombatStats = {
    health: number;
    attack: number;
};

type Equipment = {
    weapon: string;
};

type Warrior = Identity & CombatStats & Equipment;
```

A `Warrior` must satisfy all three types.

## 7. Union vs Intersection

| Feature | Union (`|`) | Intersection (`&`) |
|---|---|---|
| Meaning | One of the specified types | All combined type requirements |
| Example | `string \| number` | `Player & Stats` |
| Value requirements | Must match at least one union member | Must satisfy every intersected type |
| Common use | Flexible inputs and allowed values | Combining object requirements |

## 8. Important Distinction

A union does not mean a value can freely use every member's properties. You must narrow the type before accessing members that are not shared by all possible types.

An intersection does not simply mean an object may contain extra properties. It combines type requirements, so the resulting value must satisfy them all.

## Important Points

- `|` creates a union type.
- `&` creates an intersection type.
- Use literal unions to restrict values to a known set.
- Use `typeof` and other checks to narrow union types.
- Use intersections to combine object shapes.
- An impossible combination can produce a type that no value can satisfy. For example, `string & number` is effectively impossible.

## Summary

```ts
type ID = string | number;

type Player = {
    name: string;
};

type Stats = {
    health: number;
};

type Character = Player & Stats;
```

`ID` accepts a string or number. `Character` requires both a name and health.