# Utility Types in TypeScript

## 1. What Are Utility Types?

Utility Types are built-in types provided by TypeScript that help us transform existing types into new types.

Instead of manually creating a new type every time we want to modify an object, we can use Utility Types.

For example, imagine we have a `Player` type:

```ts
type Player = {
    name: string;
    level: number;
    health: number;
};
```

Now imagine we want to create:
- A version where every property is optional.
- A version containing only the player's name and level.
- A version where every property is read-only.

We don't need to write all these types manually. TypeScript provides Utility Types for these situations.

## 2. Why Do We Need Utility Types?

Utility Types help us:

- Reuse existing types.
- Avoid repetitive code.
- Make object types more flexible.
- Create new types from existing types.
- Write cleaner and more maintainable code.

They are especially useful when working with APIs, databases, forms, and large applications.

## 3. Important Built-in Utility Types

### A. Partial<T>

Makes all properties of an existing type optional.

```ts
type Player = {
    name: string;
    level: number;
    health: number;
};

type UpdatedPlayer = Partial<Player>;
```

Now every property is optional.

```ts
const player: UpdatedPlayer = {
    level: 20
};
```

You don't have to provide every property.

**Use case:** Updating only selected fields of a player profile.

### B. Required<T>

Makes all optional properties of an existing type required.

```ts
type Player = {
    name: string;
    level?: number;
};

type CompletePlayer = Required<Player>;
```

Now both `name` and `level` are required.

**Use case:** Making sure an object contains all required information.

### C. Readonly<T>

Makes all properties of an existing type read-only.

```ts
type Player = {
    name: string;
    level: number;
};

type ReadonlyPlayer = Readonly<Player>;
```

You can read the properties, but you cannot reassign them.

```ts
const player: ReadonlyPlayer = {
    name: "Blade",
    level: 20
};

// player.level = 30; // Error
```

**Use case:** Protecting configuration or data from accidental reassignment.

### D. Pick<T, K>

Creates a new type containing only the selected properties from an existing type.

```ts
type Player = {
    name: string;
    level: number;
    health: number;
    score: number;
};

type PlayerBasicInfo = Pick<Player, "name" | "level">;
```

The resulting type contains only:

```ts
type PlayerBasicInfo = {
    name: string;
    level: number;
};
```

**Use case:** Displaying only selected information on a player profile.

### E. Omit<T, K>

Creates a new type by removing selected properties from an existing type.

```ts
type Player = {
    name: string;
    level: number;
    health: number;
    password: string;
};

type PublicPlayer = Omit<Player, "password">;
```

The resulting type contains everything except `password`.

**Use case:** Removing private information before sending player data to the frontend.

### F. Record<K, T>

Creates an object type with specific keys and a common value type.

```ts
type PlayerRanks = Record<string, number>;
```

This means:
- Keys must be strings.
- Values must be numbers.

```ts
const ranks: PlayerRanks = {
    Blade: 1,
    Crystal: 2,
    Knight: 3
};
```

You can also use a union of literal keys:

```ts
type Difficulty = "easy" | "medium" | "hard";

type DifficultySettings = Record<Difficulty, number>;
```

Now all three keys are required.

**Use case:** Creating dictionaries, lookup tables, and game configuration objects.

## 4. More Useful Utility Types

TypeScript provides several additional Utility Types.

| Utility Type | Purpose |
|---|---|
| `Exclude<T, U>` | Removes types from a union. |
| `Extract<T, U>` | Keeps matching types from a union. |
| `NonNullable<T>` | Removes `null` and `undefined`. |
| `ReturnType<T>` | Gets the return type of a function. |
| `Parameters<T>` | Gets a function's parameter types as a tuple. |
| `Awaited<T>` | Gets the resolved type of a Promise. |

### Examples

```ts
type Status = "active" | "inactive" | "banned";

type AvailableStatus = Exclude<Status, "banned">;
// "active" | "inactive"
```

```ts
type Status = "active" | "inactive" | "banned";

type ActiveStatus = Extract<Status, "active">;
// "active"
```

```ts
type PlayerName = string | null | undefined;

type ValidPlayerName = NonNullable<PlayerName>;
// string
```

```ts
function calculateScore(): number {
    return 100;
}

type Score = ReturnType<typeof calculateScore>;
// number
```

## 5. Important Things to Remember

1. Utility Types are built into TypeScript.
2. They transform types at compile time.
3. They do not create JavaScript functions or modify objects at runtime.
4. They help reduce repetitive type definitions.
5. Most Utility Types work with existing object types, unions, and function types.

## 6. Quick Revision

| Utility Type | Remember It As |
|---|---|
| `Partial<T>` | Make everything optional. |
| `Required<T>` | Make everything required. |
| `Readonly<T>` | Prevent property reassignment. |
| `Pick<T, K>` | Keep selected properties. |
| `Omit<T, K>` | Remove selected properties. |
| `Record<K, T>` | Create an object with defined keys and value types. |
| `Exclude<T, U>` | Remove matching union members. |
| `Extract<T, U>` | Keep matching union members. |

**Final takeaway:** Utility Types let us create new types from existing types without repeatedly writing the same object structures.