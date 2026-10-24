# Functions in TypeScript

Functions are reusable blocks of code that perform specific tasks. TypeScript allows us to define parameter types, return types, and function types.

## 1. Parameters

Parameters are variables listed in a function definition. They receive values when the function is called.

```ts
function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}

greet("Blade");
```

Here, `name: string` means the function expects a string argument.

## 2. Return Types

A return type specifies what type of value a function returns.

```ts
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));
```

The `: number` after the parameter list means the function returns a number.

### The `void` Type

Use `void` when a function does not provide a meaningful return value.

```ts
function showMessage(): void {
    console.log("Game started!");
}
```

A `void` function can still return without a value, but it should not return a meaningful result.

## 3. Optional Parameters

An optional parameter uses `?` and can be omitted when calling the function.

```ts
function greetPlayer(name: string, title?: string): void {
    if (title) {
        console.log(`Welcome, ${title} ${name}!`);
    } else {
        console.log(`Welcome, ${name}!`);
    }
}

greetPlayer("Blade");
greetPlayer("Blade", "Knight");
```

Important: optional parameters must come after required parameters.

## 4. Default Parameters

A parameter can have a default value. If the caller omits that argument, the default is used.

```ts
function startGame(difficulty: string = "Normal"): void {
    console.log(`Difficulty: ${difficulty}`);
}

startGame();
startGame("Hard");
```

A parameter with a default value is optional when calling the function.

## 5. Function Types

A function type describes the types of parameters and the return type a function must have.

```ts
let calculate: (a: number, b: number) => number;

calculate = (a, b) => a + b;

console.log(calculate(10, 20));
```

Here, `(a: number, b: number) => number` means the function accepts two numbers and returns a number.

## 6. Arrow Functions

Arrow functions provide a shorter way to write function expressions.

```ts
const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log(multiply(5, 4));
```

For a single expression, you can omit the braces and `return`.

```ts
const square = (number: number): number => number * number;
```

## 7. Type Inference in Functions

TypeScript can infer a function's return type from its returned values.

```ts
function subtract(a: number, b: number) {
    return a - b;
}
```

TypeScript infers the return type as `number`. Explicit return types are still useful for clarity and checking that a function follows its intended contract.

## Important Points

- Parameter types specify what arguments a function accepts.
- Return types specify what value a function returns.
- `void` is used when there is no meaningful return value.
- Optional parameters use `?`.
- Default parameters provide fallback values.
- Function types describe a function's parameter and return types.
- Arrow functions provide concise function syntax.
- TypeScript can infer return types, but you can annotate them explicitly.

## Summary

| Concept | Example |
|---|---|
| Parameter | `name: string` |
| Return type | `: number` |
| No meaningful return value | `: void` |
| Optional parameter | `title?: string` |
| Default parameter | `difficulty = "Normal"` |
| Function type | `(a: number, b: number) => number` |