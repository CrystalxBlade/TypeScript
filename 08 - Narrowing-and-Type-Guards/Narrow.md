# Narrowing and Type Guards in TypeScript

Type narrowing is the process of making a variable's type more specific using checks in your code.

Type guards are expressions or checks that help TypeScript determine which type a value has.

## 1. What Is Type Narrowing?

Suppose a variable can contain either a string or a number.

```ts
function displayValue(value: string | number): void {
    console.log(value);
}
```

Inside the function, `value` could be either type. If you want to use a string-specific method, you must first check its type.

```ts
function displayValue(value: string | number): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```

TypeScript understands the type of `value` inside each branch.

## 2. The `typeof` Operator

The JavaScript `typeof` operator returns a string describing a value's runtime type. TypeScript uses `typeof` checks to narrow types.

| Value | Result |
|---|---|
| `"Blade"` | `"string"` |
| `100` | `"number"` |
| `true` | `"boolean"` |
| `undefined` | `"undefined"` |
| `100n` | `"bigint"` |
| `Symbol()` | `"symbol"` |
| `function () {}` | `"function"` |

Important: `typeof null` returns `"object"`, and arrays also return `"object"`. Use other checks when you need to distinguish those values.

## 3. Using `typeof` with Union Types

```ts
function processInput(input: string | number): void {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    } else {
        console.log(input * 2);
    }
}
```

- If `input` is a string, TypeScript allows string operations.
- Otherwise, in this particular union, it must be a number.

## 4. Truthiness Narrowing

Conditions can narrow values based on whether they are truthy or falsy.

```ts
function printName(name: string | null): void {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("No name provided.");
    }
}
```

The `if (name)` check excludes `null` and the empty string from the first branch. Be careful: truthiness checks also exclude values such as `0`, `false`, and `""`, which may be valid data in other situations.

## 5. Equality Narrowing

Checking equality can narrow a variable's type.

```ts
function showId(id: string | number): void {
    if (typeof id === "string") {
        console.log("Text ID:", id);
    } else {
        console.log("Numeric ID:", id);
    }
}
```

You can also compare a value against a specific literal, such as `null` or `"Playing"`, to narrow its possible values.

## 6. The `in` Operator

The `in` operator checks whether a property exists on an object. TypeScript can use this check to narrow a union of object types.

```ts
type Sword = {
    damage: number;
};

type Potion = {
    healing: number;
};

function useItem(item: Sword | Potion): void {
    if ("damage" in item) {
        console.log(item.damage);
    } else {
        console.log(item.healing);
    }
}
```

## 7. `instanceof`

Use `instanceof` to check whether an object was created from a particular class or constructor.

```ts
class Knight {
    defend(): void {
        console.log("Blocking an attack!");
    }
}

class Archer {
    shoot(): void {
        console.log("Firing an arrow!");
    }
}

function useCharacter(character: Knight | Archer): void {
    if (character instanceof Knight) {
        character.defend();
    } else {
        character.shoot();
    }
}
```

## 8. Custom Type Guards

A custom type guard is a function whose return type uses a type predicate, such as `value is string`.

```ts
function isString(value: unknown): value is string {
    return typeof value === "string";
}
```

You can use it to narrow a value:

```ts
function display(value: unknown): void {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
}
```

The predicate tells TypeScript that the function claims to identify strings. The implementation must genuinely verify that claim. TypeScript does not automatically prove that a custom predicate is correct.

## 9. Discriminated Unions

A discriminated union uses a shared property with distinct literal values to identify each member of a union.

```ts
type Loading = {
    status: "loading";
};

type Success = {
    status: "success";
    data: string;
};

type Failure = {
    status: "failure";
    message: string;
};

type GameState = Loading | Success | Failure;
```

You can narrow the union by checking `status`.

```ts
function showState(state: GameState): void {
    switch (state.status) {
        case "loading":
            console.log("Loading game...");
            break;
        case "success":
            console.log(state.data);
            break;
        case "failure":
            console.log(state.message);
            break;
    }
}
```

## Important Points

- Narrowing makes a broad type more specific.
- `typeof` is useful for primitive types.
- Truthiness checks can exclude more values than just `null` or `undefined`.
- The `in` operator checks for properties on objects.
- `instanceof` checks an object's relationship to a constructor or class.
- Custom type guards use a type predicate such as `value is string`.
- Discriminated unions use a shared literal property to identify each union member.

## Summary

| Technique | Common use |
|---|---|
| `typeof` | Primitive values |
| Truthiness check | Excluding falsy values |
| Equality check | Comparing with a specific value |
| `in` | Distinguishing object shapes |
| `instanceof` | Distinguishing class instances |
| Custom type guard | Reusable type checks |
| Discriminated union | Identifying variants by a shared property |