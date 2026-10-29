type Direction = "left" | "right" | "up" | "down";

type Difficulty = "easy" | "medium" | "hard";

type PlayerStatus = "alive" | "injured" | "defeated";

let playerDirection: Direction = "left";
let gameDifficulty: Difficulty = "medium";
let playerStatus: PlayerStatus = "alive";

console.log("Direction:", playerDirection);
console.log("Difficulty:", gameDifficulty);
console.log("Status:", playerStatus);

playerDirection = "right";
gameDifficulty = "hard";
playerStatus = "injured";

console.log("Updated Direction:", playerDirection);
console.log("Updated Difficulty:", gameDifficulty);
console.log("Updated Status:", playerStatus);

// Uncomment these to see TypeScript errors:
// playerDirection = "forward";
// gameDifficulty = "impossible";
// playerStatus = "sleeping";

function setDifficulty(level: Difficulty): void {
    console.log(`Difficulty set to ${level}`);
}

setDifficulty("easy");
setDifficulty("hard");

// setDifficulty("extreme"); // Error
