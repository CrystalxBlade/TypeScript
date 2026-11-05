# Advanced Types in TypeScript

## 1. What Are Advanced Types?

Advanced types allow TypeScript to create new types based on existing types.

Instead of manually defining every type, you can use operators and type expressions to generate them.

In this topic, we'll learn:

- `keyof`
- `typeof`
- Conditional Types
- Mapped Types

These features are useful when building larger applications and reusable libraries.

---

# 2. The `keyof` Operator

The `keyof` operator creates a union of the property names of an object type.

### Example

```ts
type Player = {
    name: string;
    health: number;
    level: number;
};

type PlayerKeys = keyof Player;
```

The resulting `PlayerKeys` type is:

```ts
"name" | "health" | "level"
```

This means a variable of type `PlayerKeys` can only contain one of those property names.

```ts
let key: PlayerKeys;

key = "name";   // Valid
key = "health"; // Valid

// key = "weapon"; // Error
```

### Why Is `keyof` Useful?

It helps you restrict values to valid property names.

For example:

```ts
type Player = {
    name: string;
    health: number;
    level: number;
};

function getProperty<T, K extends keyof T>(
    object: T,
    key: K
): T[K] {
    return object[key];
}

const player: Player = {
    name: "Blade",
    health: 100,
    level: 5
};

const name = getProperty(player, "name");
const health = getProperty(player, "health");
```

Here:

- `T` represents the object type.
- `K extends keyof T` ensures the key exists.
- `T[K]` represents the type of the selected property.

This is called an **indexed access type**.

---

# 3. The `typeof` Operator

In TypeScript, `typeof` can be used in two different ways.

### A. JavaScript typeof

The normal JavaScript `typeof` operator checks the type of a value at runtime.

```ts
const playerName = "Blade";

console.log(typeof playerName); // string
```

It returns a string describing the value's runtime type.

### B. TypeScript typeof

In a type position, `typeof` obtains the type of an existing variable or value.

```ts
const player = {
    name: "Blade",
    health: 100,
    level: 5
};

type Player = typeof player;
```

TypeScript infers the following structure for `Player`:

```ts
{
    name: string;
    health: number;
    level: number;
}
```

Now you can use that type elsewhere:

```ts
const anotherPlayer: Player = {
    name: "Crystal",
    health: 150,
    level: 10
};
```

### Combining `typeof` and `keyof`

You can combine both operators.

```ts
const weapons = {
    sword: 50,
    bow: 40,
    staff: 60
};

type Weapon = keyof typeof weapons;
```

The resulting `Weapon` type is:

```ts
"sword" | "bow" | "staff"
```

Explanation:

1. `typeof weapons` obtains the object's type.
2. `keyof` extracts the property names from that type.

This is a very common TypeScript pattern.

---

# 4. Conditional Types

Conditional types allow you to select a type based on a condition.

They use the `extends` keyword with a ternary-style structure.

### Syntax

```ts
type Result<T> = T extends SomeType
    ? TrueType
    : FalseType;
```

Think of it as:

- If `T` extends `SomeType`, use `TrueType`.
- Otherwise, use `FalseType`.

### Example

```ts
type Check<T> = T extends string ? "Yes" : "No";

type Result1 = Check<string>;
type Result2 = Check<number>;
```

The resulting types are:

- `Result1` is `"Yes"`.
- `Result2` is `"No"`.

### Another Example

```ts
type CheckNumber<T> = T extends number ? "Number" : "Not a Number";

type A = CheckNumber<100>;
type B = CheckNumber<string>;
```

- `A` becomes `"Number"`.
- `B` becomes `"Not a Number"`.

### Conditional Types with Unions

When a conditional type checks a naked type parameter, it distributes over union members.

```ts
type ToArray<T> = T extends unknown ? T[] : never;

type Result = ToArray<string | number>;
```

The result is:

```ts
string[] | number[]
```

It does not become `(string | number)[]`.

If you want to prevent distribution, wrap the checked type in a tuple:

```ts
type ToArray<T> = [T] extends [unknown] ? T[] : never;

type Result = ToArray<string | number>;
```

Now the result is:

```ts
(string | number)[]
```

### The `infer` Keyword

`infer` allows TypeScript to infer a type inside a conditional type.

For example, you can extract the return type of a function.

```ts
type GetReturnType<T> =
    T extends (...args: any[]) => infer R
        ? R
        : never;

type Result = GetReturnType<() => string>;
```

The resulting type is `string`.

Here, `infer R` tells TypeScript to infer the function's return type and store it in `R`.

---

# 5. Mapped Types

Mapped types allow you to create a new type by transforming the properties of an existing type.

They are useful when you want to modify multiple properties without rewriting the entire object structure.

### Basic Syntax

```ts
type NewType<T> = {
    [K in keyof T]: T[K];
};
```

Let's understand this:

- `keyof T` gets all property names.
- `K in keyof T` loops through those property names at the type level.
- `T[K]` retrieves the type of each property.

### Example

```ts
type Player = {
    name: string;
    health: number;
    level: number;
};

type OptionalPlayer = {
    [K in keyof Player]?: Player[K];
};
```

The resulting type is equivalent to:

```ts
type OptionalPlayer = {
    name?: string;
    health?: number;
    level?: number;
};
```

Every property becomes optional.

### Making Properties Readonly

You can use the `readonly` modifier in a mapped type.

```ts
type ReadonlyPlayer<T> = {
    readonly [K in keyof T]: T[K];
};
```

Now all properties become readonly.

### Removing Modifiers

Mapped types can also remove modifiers.

```ts
type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};

type RequiredProperties<T> = {
    [K in keyof T]-?: T[K];
};
```

- `-readonly` removes the readonly modifier.
- `-?` removes the optional modifier.

### Key Remapping

You can use `as` inside a mapped type to change property names.

```ts
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type Player = {
    name: string;
    health: number;
};
```

The resulting type is equivalent to:

```ts
type PlayerGetters = {
    getName: () => string;
    getHealth: () => number;
};
```

This is called **key remapping**.

---

# 6. Advanced Type Operators Summary

| Operator | Purpose |
|---|---|
| `keyof` | Gets the keys of an object type |
| `typeof` | Gets the type of an existing value |
| `extends` | Checks type compatibility or defines a constraint |
| `infer` | Infers a type inside a conditional type |
| `in` | Iterates through keys in mapped types |
| `as` | Renames keys in mapped types |
| `?` | Makes a mapped property optional |
| `readonly` | Makes mapped properties readonly |

---

# 7. When Should You Use These Concepts?

| Concept | Practical Use |
|---|---|
| `keyof` | Restricting property names |
| `typeof` | Reusing inferred object types |
| Conditional Types | Selecting types based on conditions |
| `infer` | Extracting function return or array element types |
| Mapped Types | Transforming existing object types |
| Key Remapping | Generating new property names |

## Final Takeaway

Advanced types help you build types from other types.

- `keyof` extracts property names.
- `typeof` obtains an existing value's type.
- Conditional types select types based on conditions.
- Mapped types transform existing properties.

You don't need to memorize every advanced pattern immediately. Focus on understanding what each operator does and when it is useful.