# Basic Types in TypeScript

TypeScript uses types to define what kind of values a variable can store. Types help catch mistakes while writing code.

## 1. String

The `string` type is used for text.

```ts
let playerName: string = "Blade";
```

## 2. Number

The `number` type is used for integers and decimal numbers.

```ts
let playerAge: number = 24;
let playerScore: number = 95.5;
```

## 3. Boolean

The `boolean` type stores either `true` or `false`.

```ts
let isPlayerAlive: boolean = true;
```

## 4. Any

The `any` type disables most type checking for a value. It allows the variable to hold different types.

```ts
let playerData: any = "Blade";

playerData = 100;
playerData = true;
```

Use `any` sparingly because it removes many of TypeScript's safety benefits.

## 5. Unknown

The `unknown` type can hold a value of any type, but TypeScript requires you to check its type before using it in type-specific ways.

```ts
let playerInput: unknown = "Blade";

if (typeof playerInput === "string") {
    console.log(playerInput.toUpperCase());
}
```

### `any` vs `unknown`

- `any`: lets you use the value without type checks.
- `unknown`: requires you to narrow or check the type before using it.

Prefer `unknown` when the type of a value is not yet known.

## 6. Type Inference

Type inference means TypeScript automatically determines a variable's type from its initial value.

```ts
let gameName = "Sky Ball";
let playerLevel = 10;
let gameRunning = true;
```

TypeScript infers these types:

- `gameName` → `string`
- `playerLevel` → `number`
- `gameRunning` → `boolean`

You do not always need to write a type annotation when TypeScript can infer the type correctly.

## Important Points

- TypeScript uses lowercase `string`, `number`, and `boolean` for primitive type annotations.
- Use `any` carefully.
- Use `unknown` when a value's type is uncertain.
- Type inference reduces unnecessary type annotations.
- TypeScript checks types during development and compilation. These type annotations are generally removed from the generated JavaScript.