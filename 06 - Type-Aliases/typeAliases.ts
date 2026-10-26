export {};

console.log("----- TYPE ALIASES -----");

// 1. Alias for a primitive type
type PlayerName = string;

let player: PlayerName = "Blade";

console.log("Player:", player);


// 2. Aliases for other primitive types
type PlayerLevel = number;
type IsAlive = boolean;

let level: PlayerLevel = 10;
let alive: IsAlive = true;

console.log("Level:", level);
console.log("Alive:", alive);


// 3. Alias for an object type
type PlayerStats = {
    name: string;
    health: number;
    level: number;
};

let blade: PlayerStats = {
    name: "Blade",
    health: 100,
    level: 5
};

console.log("Player stats:", blade);


// 4. Alias for an array type
type Scores = number[];

let playerScores: Scores = [100, 250, 500];

console.log("Scores:", playerScores);


// 5. Union type alias
type PlayerId = number | string;

let firstId: PlayerId = 101;
let secondId: PlayerId = "PLAYER-102";

console.log("First ID:", firstId);
console.log("Second ID:", secondId);


// 6. Literal union type
type Difficulty = "Easy" | "Normal" | "Hard";

let gameDifficulty: Difficulty = "Normal";

console.log("Difficulty:", gameDifficulty);

// TypeScript error:
// gameDifficulty = "Extreme";


// 7. Function type alias
type Operation = (a: number, b: number) => number;

let add: Operation = (a, b) => a + b;
let multiply: Operation = (a, b) => a * b;

console.log("Addition:", add(10, 5));
console.log("Multiplication:", multiply(10, 5));


// 8. Intersection type alias
type PlayerIdentity = {
    name: string;
};

type PlayerAttributes = {
    health: number;
    level: number;
};

type GameCharacter = PlayerIdentity & PlayerAttributes;

let character: GameCharacter = {
    name: "Knight",
    health: 100,
    level: 5
};

console.log("Game character:", character);


// TypeScript error examples:
// let invalidPlayer: PlayerName = 100;
// let invalidScores: Scores = ["100", "200"];