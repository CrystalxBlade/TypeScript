# Objects in TypeScript

Objects store related data as key-value pairs. Each key is called a property.

## 1. Creating an Object

Use curly braces `{}` to create an object.

```ts
let player = {
    name: "Blade",
    health: 100,
    level: 5
};
```

Here:
- `name` is a string property.
- `health` is a number property.
- `level` is a number property.

## 2. Defining Object Types

TypeScript can infer an object's property types from its initial values. You can also explicitly define the expected structure.

```ts
let player: {
    name: string;
    health: number;
    level: number;
} = {
    name: "Blade",
    health: 100,
    level: 5
};
```

The type describes which properties are required and what values they can hold.

## 3. Accessing Object Properties

Use dot notation or bracket notation to access a property.

```ts
console.log(player.name);
console.log(player["health"]);
```

## 4. Updating Properties

You can update a property as long as the new value matches its type.

```ts
player.health = 80;
player.level = 6;
```

The following assignment would cause a TypeScript error:

```ts
// player.health = "low";
```

## 5. Adding Properties

When an object has an explicitly defined type, you generally cannot add an undeclared property directly.

```ts
// player.weapon = "Sword"; // Error
```

If the object needs a `weapon` property, include it in the type when defining the object.

## 6. Optional Properties

Use `?` after a property name to make it optional.

```ts
let player: {
    name: string;
    weapon?: string;
} = {
    name: "Blade"
};
```

The `weapon` property can be omitted. If provided, its value must be a string, or `undefined` when `exactOptionalPropertyTypes` is disabled.

## 7. Readonly Properties

Use `readonly` to prevent a property from being reassigned after initialization.

```ts
let player: {
    readonly id: number;
    name: string;
} = {
    id: 101,
    name: "Blade"
};

player.name = "Crystal"; // Allowed
// player.id = 202;      // Error
```

`readonly` prevents reassignment through that typed property. It does not make nested objects deeply immutable.

## Important Points

- Objects group related properties together.
- TypeScript checks property names and their types.
- Required properties must be provided when creating an object.
- Optional properties use `?`.
- Readonly properties cannot be reassigned through their readonly reference.
- TypeScript object types are structural: an object is compatible when it has the required structure and compatible property types.

## Summary

| Concept | Meaning |
|---|---|
| Object type | Defines an object's expected structure |
| Required property | Must be present |
| Optional property (`?`) | May be omitted |
| Readonly property | Cannot be reassigned through that reference |