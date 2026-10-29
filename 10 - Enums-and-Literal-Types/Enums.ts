export {};

enum PlayerClass {
    Warrior = "WARRIOR",
    Mage = "MAGE",
    Archer = "ARCHER"
}

enum GameState {
    Menu = 1,
    Playing,
    Paused,
    GameOver
}

enum Difficulty {
    Easy = "EASY",
    Medium = "MEDIUM",
    Hard = "HARD"
}

const playerName: string = "Blade";
const playerClass: PlayerClass = PlayerClass.Warrior;
const currentState: GameState = GameState.Playing;
const gameDifficulty: Difficulty = Difficulty.Hard;

console.log("Player:", playerName);
console.log("Class:", playerClass);
console.log("Game State:", currentState);
console.log("Difficulty:", gameDifficulty);

if (currentState === GameState.Playing) {
    console.log(`${playerName} is playing the game!`);
}

if (gameDifficulty === Difficulty.Hard) {
    console.log("Enemies will be more challenging!");
}