# Error Handling in TypeScript

## 1. What Is Error Handling?

Error Handling is the process of detecting, catching, and managing errors that occur while a program is running.

Errors can happen for many reasons:

- Invalid user input.
- Missing files.
- Failed API requests.
- Incorrect calculations.
- Unexpected application behavior.

Instead of allowing an application to stop unexpectedly, we can handle errors and provide meaningful feedback.

## 2. Types of Errors

### A. Syntax Errors

These occur when code does not follow the language's syntax rules.

```ts
// Missing closing parenthesis

// console.log("Hello World";
```

### B. Type Errors

These occur when a value does not match the expected TypeScript type.

```ts
let playerLevel: number = 20;

// playerLevel = "Twenty"; // TypeScript error
```

Type errors are generally detected during development or compilation.

### C. Runtime Errors

These occur while the program is running.

```ts
const player = undefined;

// console.log(player.name); // Runtime error
```

Error handling is particularly important for runtime errors.

## 3. The try...catch Statement

The `try...catch` statement allows us to handle errors without allowing an exception to interrupt the normal flow of the program.

### Syntax

```ts
try {
    // Code that might throw an error
}
catch (error) {
    // Handle the error
}
```

- `try`: Contains code that might cause an error.
- `catch`: Runs when an exception is thrown inside the try block.

### Example

```ts
try {
    const result = 10 / 0;

    console.log(result);
}
catch (error) {
    console.log("Something went wrong!");
}
```

Note: Dividing a JavaScript number by zero produces `Infinity`, not an exception. A better example of an actual exception is accessing a property on `null`.

## 4. The finally Block

The `finally` block executes after the `try` and `catch` blocks, whether an error occurs or not.

### Syntax

```ts
try {
    // Risky code
}
catch (error) {
    // Handle error
}
finally {
    // Cleanup code
}
```

### Example

```ts
try {
    console.log("Loading player data...");
}
catch (error) {
    console.log("Failed to load player data.");
}
finally {
    console.log("Loading process finished.");
}
```

**Use case:** Closing resources, hiding loading indicators, or performing cleanup.

## 5. Throwing Custom Errors

We can use the `throw` keyword to create and throw our own errors.

### Example

```ts
function enterGame(age: number): void {

    if (age < 18) {
        throw new Error("You are not allowed to enter this game.");
    }

    console.log("Welcome to the game!");
}

enterGame(20);
```

If the condition is true, TypeScript throws an error and stops the normal execution of that function.

The error can be handled using `try...catch`.

## 6. Handling Errors with try...catch

```ts
function enterGame(age: number): void {

    if (age < 18) {
        throw new Error("You are not allowed to enter this game.");
    }

    console.log("Welcome to the game!");
}

try {
    enterGame(15);
}
catch (error) {
    console.log("Error:", error);
}
```

Now the error is caught instead of becoming an unhandled exception.

## 7. Understanding the unknown Type

In TypeScript, the value received by a `catch` block is `unknown` under strict settings.

Why?

Because TypeScript cannot guarantee what kind of value was thrown.

JavaScript allows throwing different values:

```ts
throw new Error("Something went wrong");

throw "Something went wrong";

throw 404;
```

Therefore, we should check the error type before using its properties.

### Example

```ts
try {
    throw new Error("Player not found.");
}
catch (error: unknown) {

    if (error instanceof Error) {
        console.log(error.message);
    }
    else {
        console.log("An unknown error occurred.");
    }
}
```

Here:

- `unknown` means we don't know the value's type.
- `instanceof Error` checks whether the value is an Error object.
- `.message` is accessed only after the type check.

**Important:** Avoid using `any` for error handling when `unknown` is more appropriate.

## 8. Creating Custom Error Messages

We can create our own error messages using the built-in `Error` class.

```ts
throw new Error("Invalid player level.");
```

We can also create custom error classes.

```ts
class PlayerNotFoundError extends Error {

    constructor(message: string) {
        super(message);

        this.name = "PlayerNotFoundError";
    }
}
```

Usage:

```ts
throw new PlayerNotFoundError("Player does not exist.");
```

Custom error classes are useful when an application has different types of errors.

## 9. Important Things to Remember

1. `try` contains code that might throw an exception.
2. `catch` handles exceptions thrown inside the associated `try` block.
3. `finally` executes whether an exception occurs or not.
4. `throw` allows us to create and throw errors.
5. Use `unknown` instead of `any` when handling caught errors.
6. Use `instanceof Error` to check whether a caught value is an Error object.
7. TypeScript types do not prevent runtime errors automatically.

## 10. Quick Revision

| Keyword | Purpose |
|---|---|
| `try` | Runs code that might throw an error. |
| `catch` | Handles a thrown error. |
| `finally` | Runs cleanup code after try/catch. |
| `throw` | Throws an error manually. |
| `Error` | Built-in JavaScript error class. |
| `unknown` | Represents a value whose type is not yet known. |
| `instanceof` | Checks whether an object belongs to a particular class. |

**Final takeaway:** Good error handling makes applications more reliable, easier to debug, and safer to use.