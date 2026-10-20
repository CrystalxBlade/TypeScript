# Arrays and Tuples in TypeScript

Arrays and tuples allow us to store multiple values in a single variable.

## 1. Arrays

An array stores multiple values. In TypeScript, we can specify the type of values an array can contain.

### Syntax

```ts
let variableName: type[] = [value1, value2, value3];
```

### Example

```ts
let playerScores: number[] = [100, 250, 300];
let playerNames: string[] = ["Blade", "Crystal", "Knight"];
```

### Array Methods

- `push()` adds an element to the end.
- `pop()` removes the last element.
- `length` returns the number of elements.
- `includes()` checks whether an element exists.
- `indexOf()` returns the index of an element, or `-1` if it is not found.

### Alternative Array Syntax

You can also write an array type using `Array<type>`.

```ts
let scores: Array<number> = [100, 200, 300];
```

Both `number[]` and `Array<number>` represent arrays of numbers.

### Important Points

- An array's elements must match its declared type.
- Arrays can grow or shrink in size.
- Array indexes start at `0`.
- Use `string[]` for strings, `number[]` for numbers, and so on.

## 2. Tuples

A tuple is an array-like structure with a fixed sequence of element types.

### Syntax

```ts
let variableName: [type1, type2] = [value1, value2];
```

### Example

```ts
let player: [string, number] = ["Blade", 24];
```

Here:
- The first element must be a `string`.
- The second element must be a `number`.

### Accessing Tuple Elements

```ts
console.log(player[0]); // Blade
console.log(player[1]); // 24
```

### Optional Tuple Elements

A tuple can contain optional elements.

```ts
let playerInfo: [string, number?] = ["Blade"];
```

The second element is optional, so both `["Blade"]` and `["Blade", 24]` are valid.

### Readonly Tuples

A readonly tuple cannot be modified through its tuple reference.

```ts
let position: readonly [number, number] = [10, 20];
```

You cannot assign new values to its elements or use methods such as `push()` through that reference.

### Important Points

- Tuples define the expected type and order of elements.
- Tuple indexes also start at `0`.
- Optional tuple elements use `?`.
- Readonly tuples prevent modification through that reference.
- Tuples are useful for fixed-format data, such as coordinates or a name-and-score pair.

## 3. Arrays vs Tuples

| Feature | Array | Tuple |
|---|---|---|
| Element types | Usually one declared element type | Each position has a declared type |
| Length | Can grow or shrink | Has a defined sequence of positions, though optional/rest elements are possible |
| Example | `number[]` | `[string, number]` |
| Use case | A list of scores | A player name and score |

**Remember:** Use an array for a collection of similar values. Use a tuple when each position has a specific meaning and type.