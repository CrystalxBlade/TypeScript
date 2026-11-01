# Generics in TypeScript

## 1. What Are Generics?

**Generics allow you to write reusable code that works with different data types while preserving type safety.**

Imagine you want a function that returns the value you give it.

Without generics, you might write separate functions:

```ts
function getString(value: string): string {
    return value;
}

function getNumber(value: number): number {
    return value;
}
```

Both functions do the same thing. Only their types differ.

Generics let you combine this behaviour into one reusable function.

```ts
function getValue<T>(value: T): T {
    return value;
}

console.log(getValue<string>("Blade"));
console.log(getValue<number>(100));
console.log(getValue<boolean>(true));
```

Here, `T` is a **type parameter**. It acts as a placeholder for a type that TypeScript determines when the function is used.

You can think of `T` as saying, "Whatever type comes in, return that same type."

## 2. Understanding `<T>`

Consider this function:

```ts
function identity<T>(value: T): T {
    return value;
}
```

Let's break it down:

- `identity`: The function name.
- `<T>`: Declares a generic type parameter.
- `value: T`: The parameter has the type represented by `T`.
- `: T`: The function returns that same type.
- `return value`: Returns the supplied value.

When you call the function:

```ts
const name = identity<string>("Blade");
const score = identity<number>(500);
```

TypeScript substitutes the type parameter for each call:

- In the first call, `T` is `string`.
- In the second call, `T` is `number`.

`T` is only a convention. You could use another descriptive name, such as `TValue` or `TItem`.

## 3. Generic Functions

A generic function can work with different types without duplicating its implementation.

```ts
function displayValue<T>(value: T): void {
    console.log(value);
}

displayValue<string>("Hello");
displayValue<number>(100);
displayValue<boolean>(true);
```

### Type Inference

You usually don't need to specify the type argument manually.

```ts
function getValue<T>(value: T): T {
    return value;
}

const playerName = getValue("Blade");
const playerHealth = getValue(100);
```

TypeScript infers:
- `playerName` is a `string`.
- `playerHealth` is a `number`.

Both calls preserve the original types.

## 4. Generics with Arrays

Generics are especially useful when working with arrays.

```ts
function getFirstItem<T>(items: T[]): T | undefined {
    return items[0];
}

const names = ["Blade", "Crystal", "Knight"];
const scores = [100, 250, 500];

const firstName = getFirstItem(names);
const firstScore = getFirstItem(scores);
```

The function works with both arrays.

- `T[]` means an array of values of type `T`.
- `T | undefined` means the result can be a `T` or `undefined`.

The result can be `undefined` because an empty array has no first item.

## 5. Multiple Type Parameters

A generic function can have more than one type parameter.

```ts
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const player = pair<string, number>("Blade", 100);
```

Here:
- `T` represents the first value's type.
- `U` represents the second value's type.
- `[T, U]` is a tuple containing those two types.

The result has the type `[string, number]`.

## 6. Generic Interfaces

An interface can also use a type parameter.

```ts
interface Box<T> {
    value: T;
}

const nameBox: Box<string> = {
    value: "Blade"
};

const scoreBox: Box<number> = {
    value: 500
};
```

`Box<T>` describes a container whose `value` can have different types.

The interface itself stays the same, but the type supplied to `T` changes.

## 7. Generic Interfaces with Objects

Generics become especially useful when an object needs to store data of different types.

```ts
interface Player<T> {
    name: string;
    stats: T;
}

interface PlayerStats {
    health: number;
    level: number;
}

const player: Player<PlayerStats> = {
    name: "Blade",
    stats: {
        health: 100,
        level: 5
    }
};
```

In this example:
- `Player<T>` is a generic interface.
- `PlayerStats` describes the statistics.
- `Player<PlayerStats>` says the `stats` property must match `PlayerStats`.

## 8. Generic Constraints

Sometimes a generic function needs to work only with types that have a particular property.

For example, suppose a function needs to read an object's `length`.

This unrestricted function would fail:

```ts
// function showLength<T>(value: T): void {
//     console.log(value.length); // Error
// }
```

TypeScript cannot guarantee that every possible `T` has a `length` property.

We can solve this with a **generic constraint**.

```ts
interface HasLength {
    length: number;
}

function showLength<T extends HasLength>(value: T): void {
    console.log(value.length);
}

showLength("Blade");
showLength([10, 20, 30]);
```

The expression `T extends HasLength` means that `T` must have a numeric `length` property.

Strings and arrays satisfy this requirement.

A plain number does not:

```ts
// showLength(100); // Error
```

## 9. The `keyof` Operator with Generics

The `keyof` operator creates a union of an object's property keys.

```ts
function getProperty<T, K extends keyof T>(
    object: T,
    key: K
): T[K] {
    return object[key];
}

const player = {
    name: "Blade",
    health: 100
};

const name = getProperty(player, "name");
const health = getProperty(player, "health");
```

Here:
- `T` represents the object type.
- `K extends keyof T` restricts the key to a property that exists on the object.
- `T[K]` represents the type of that property.

Passing `"name"` returns a string. Passing `"health"` returns a number.

```ts
// getProperty(player, "weapon"); // Error
```

TypeScript rejects `"weapon"` because that property does not exist on the object.

## 10. Generic Classes

Classes can also use generics.

```ts
class Storage<T> {
    constructor(public value: T) {}

    getValue(): T {
        return this.value;
    }
}

const nameStorage = new Storage<string>("Blade");
const scoreStorage = new Storage<number>(500);

console.log(nameStorage.getValue());
console.log(scoreStorage.getValue());
```

The same class can store different types while preserving their type information.

## 11. Common Generic Naming Conventions

| Type Parameter | Common Meaning |
|---|---|
| `T` | Type |
| `U` | Second type parameter |
| `K` | Key |
| `V` | Value |
| `TItem` | Item type |
| `TResponse` | Response type |

These are conventions, not special TypeScript keywords.

## 12. When Should You Use Generics?

Generics are useful when building:
- Reusable functions and utility methods.
- Typed arrays, containers, and storage classes.
- API response wrappers.
- Reusable interfaces and data models.
- Functions that work with different object types.
- Shared components in larger applications.

**Remember:** Use generics when the relationship between types matters. They help you reuse code without falling back to `any`, which would discard much of TypeScript's type checking.