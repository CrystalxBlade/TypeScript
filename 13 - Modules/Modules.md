# Modules in TypeScript

## 1. What Are Modules?

Modules allow you to organize code into separate files and reuse that code in other files.

Imagine you're building a game. Instead of putting everything into one enormous file, you might organize it like this:

```text
Game/
├── Player.ts
├── Weapon.ts
├── Enemy.ts
└── Main.ts
```

Each file can contain code for a specific purpose.

For example:
- `Player.ts` contains player-related code.
- `Weapon.ts` contains weapon-related code.
- `Enemy.ts` contains enemy-related code.
- `Main.ts` imports and uses the code from other files.

In TypeScript, a file containing a top-level `import` or `export` is treated as a module.

## 2. The `export` Keyword

The `export` keyword makes declarations available to other modules.

For example, in `Player.ts`:

```ts
export const playerName: string = "Blade";

export function attack(): void {
    console.log(`${playerName} attacks!`);
}
```

Both `playerName` and `attack()` can now be imported into another module.

Without an export, a declaration generally cannot be imported from that file.

## 3. Named Exports

Named exports let you export multiple declarations from a single file.

```ts
export const playerName: string = "Blade";

export const playerHealth: number = 100;

export function showPlayer(): void {
    console.log(playerName);
    console.log(playerHealth);
}
```

You can export declarations individually or export them together.

### Exporting at the End

```ts
const playerName: string = "Blade";

function attack(): void {
    console.log("Attacking!");
}

export { playerName, attack };
```

Both approaches are valid.

## 4. The `import` Keyword

The `import` keyword allows you to use exported declarations from another module.

Suppose `Player.ts` contains:

```ts
export const playerName: string = "Blade";

export function attack(): void {
    console.log("Player is attacking!");
}
```

You can import these declarations in `Main.ts`:

```ts
import { playerName, attack } from "./Player.js";

console.log(playerName);
attack();
```

The braces are used for named imports.

The relative path `./Player.js` identifies the module being imported.

**Why `.js` instead of `.ts`?**

In a TypeScript project using Node.js's modern ESM configuration, imports commonly use the `.js` extension because the emitted JavaScript file is named `Player.js`. TypeScript can resolve this import to the corresponding `.ts` source file during compilation.

The correct import style depends on your project's module configuration and runtime.

## 5. Importing Selected Declarations

You don't have to import every export from a file.

```ts
import { playerName } from "./Player.js";

console.log(playerName);
```

Only `playerName` is imported.

You can also rename a named import:

```ts
import { playerName as name } from "./Player.js";

console.log(name);
```

The `as` keyword gives the imported declaration a local name.

## 6. Exporting and Importing Classes

Classes can be exported and imported too.

In `Player.ts`:

```ts
export class Player {
    constructor(public name: string) {}

    attack(): void {
        console.log(`${this.name} attacks!`);
    }
}
```

In `Main.ts`:

```ts
import { Player } from "./Player.js";

const player = new Player("Blade");

player.attack();
```

This is useful for organizing class-based applications.

## 7. Exporting Interfaces and Types

Interfaces and type aliases can also be exported.

In `Player.ts`:

```ts
export interface PlayerStats {
    health: number;
    level: number;
}

export type Difficulty = "easy" | "medium" | "hard";
```

In `Main.ts`:

```ts
import type { PlayerStats, Difficulty } from "./Player.js";

const stats: PlayerStats = {
    health: 100,
    level: 5
};

const difficulty: Difficulty = "hard";

console.log(stats);
console.log(difficulty);
```

The `import type` syntax indicates that the imported declarations are needed only for type checking.

TypeScript removes type-only imports from the emitted JavaScript when they are not needed at runtime.

## 8. Default Exports

A module can also have one default export.

In `Player.ts`:

```ts
export default class Player {
    constructor(public name: string) {}
}
```

In `Main.ts`:

```ts
import Player from "./Player.js";

const player = new Player("Blade");

console.log(player.name);
```

Notice that a default import doesn't need braces.

You can choose a local name for a default import:

```ts
import GamePlayer from "./Player.js";
```

A file can have one default export alongside any number of named exports.

## 9. Named Exports vs Default Exports

| Feature | Named Export | Default Export |
|---|---|---|
| Syntax | `export { playerName }` | `export default Player` |
| Import syntax | `import { playerName }` | `import Player` |
| Number per module | Multiple | One |
| Import name | Must match unless aliased | Can be chosen by the importer |

Both styles are useful. Choose a consistent approach for your project.

## 10. Module Paths

Common relative module paths include:

```ts
import { attack } from "./Player.js";
import { createEnemy } from "./enemies/Enemy.js";
import { calculateScore } from "../utils/Score.js";
```

- `./` means the current directory.
- `../` means the parent directory.
- Subfolders can be included in the path.

The exact extension and resolution rules depend on the module system you're using.

## 11. Important: Modules and Compilation

TypeScript code normally needs to be compiled or handled by a TypeScript-aware runtime before ordinary Node.js can execute it.

For a simple project configured for modern Node.js ESM, you might use:

```json
{
  "type": "module",
  "scripts": {
    "build": "tsc"
  }
}
```

Your `tsconfig.json` should use compatible settings for Node.js modules, such as `"module": "NodeNext"` and `"moduleResolution": "NodeNext"`.

Compile your project with:

```bash
npx tsc
```

Then run the emitted JavaScript using Node.js. If your `outDir` is `dist`, for example:

```bash
node dist/Main.js
```

The actual output path depends on your `tsconfig.json`.

## 12. Common Mistakes

### Mistake 1: Forgetting to export

```ts
const playerName = "Blade";

// Not exported, so another module cannot import it.
```

### Mistake 2: Incorrect named import

```ts
export const playerName = "Blade";

// import { characterName } from "./Player.js"; // Error
```

The imported name must match an exported name unless you use an alias.

### Mistake 3: Mixing module systems

Modern ES modules use `import` and `export`. CommonJS traditionally uses `require()` and `module.exports`.

Choose a module system compatible with your runtime and configuration.

### Mistake 4: Running the wrong file

If TypeScript compiles into `dist`, run the generated JavaScript from that directory, not the original `.ts` file.

## 13. Key Takeaways

- `export` makes declarations available to other modules.
- `import` brings exported declarations into another module.
- Named imports use braces.
- Default imports do not use braces.
- `import type` is for type-only imports.
- Classes, interfaces, functions, variables, and type aliases can be exported.
- Relative paths identify other modules.
- Module configuration determines how imports are resolved and executed.