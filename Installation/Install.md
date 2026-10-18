# TypeScript Project Setup Guide

## 1. Open the Project Folder

Open your project folder in Visual Studio Code, then open a new terminal.

## 2. Initialize npm

```bash
npm init -y
```

Creates `package.json`, which stores project information, dependencies, and scripts.

## 3. Install TypeScript

```bash
npm install --save-dev typescript
```

Installs TypeScript as a development dependency and generates `package-lock.json` to record the dependency versions.

## 4. Create TypeScript Configuration

```bash
npx tsc --init
```

Creates `tsconfig.json`, which configures TypeScript's compiler options.

## 5. Verify the Installation

```bash
npx tsc --version
```

Displays the installed TypeScript compiler version.

## 6. Create Your First TypeScript File

Create a file named `hello.ts`:

```typescript
let playerName: string = "Blade";

console.log(`Welcome, ${playerName}!`);
```

## 7. Compile a Specific TypeScript File

```bash
npx tsc hello.ts --ignoreConfig
```

Use `--ignoreConfig` when you want to compile this individual file without loading the project's `tsconfig.json`.

## 8. Run the Generated JavaScript

```bash
node hello.js
```

Expected output:

```text
Welcome, Blade!
```

## Important Notes

- `package.json` stores project metadata, dependencies, and scripts.
- `package-lock.json` records the resolved dependency versions for reproducible installations.
- `node_modules/` contains installed packages and should normally be excluded from Git.
- `tsconfig.json` contains TypeScript compiler settings.
- `npx tsc` uses the project configuration when run without explicit source-file arguments.
- `npx tsc hello.ts --ignoreConfig` compiles the specified file while ignoring `tsconfig.json`.
- When sharing a project, commit `package.json` and `package-lock.json`, but normally exclude `node_modules/`.
