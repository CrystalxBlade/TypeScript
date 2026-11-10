export {};

// ==========================================
// RECORD AND READONLY UTILITY TYPES
// ==========================================


// ==========================================
// 1. RECORD<K, T>
// ==========================================

// Record creates an object type with defined keys and values.

type PlayerRanks = Record<string, number>;

const ranks: PlayerRanks = {
    Blade: 1,
    Crystal: 2,
    Knight: 3,
    Hornet: 4
};

console.log(ranks);


// ==========================================
// 2. RECORD WITH SPECIFIC KEYS
// ==========================================

// Define the allowed difficulty levels.

type Difficulty = "Easy" | "Medium" | "Hard";

// Every difficulty must have a number value.

type DifficultySettings = Record<Difficulty, number>;

const settings: DifficultySettings = {
    Easy: 1,
    Medium: 2,
    Hard: 3
};

console.log(settings);


// ==========================================
// 3. RECORD WITH OBJECT VALUES
// ==========================================

type Player = {
    level: number;
    health: number;
};

type PlayerCollection = Record<string, Player>;

const players: PlayerCollection = {
    Blade: {
        level: 20,
        health: 100
    },

    Crystal: {
        level: 25,
        health: 90
    },

    Knight: {
        level: 30,
        health: 120
    }
};

console.log(players);


// ==========================================
// 4. READONLY<T>
// ==========================================

// Readonly prevents property reassignment.

type PlayerStats = {
    name: string;
    level: number;
    health: number;
};

type ProtectedPlayer = Readonly<PlayerStats>;

const protectedPlayer: ProtectedPlayer = {
    name: "Blade",
    level: 20,
    health: 100
};

console.log(protectedPlayer);

// Reading properties is allowed.

console.log(protectedPlayer.name);
console.log(protectedPlayer.level);

// Reassigning properties is not allowed.

// protectedPlayer.level = 30; // Error
// protectedPlayer.health = 50; // Error


// ==========================================
// 5. READONLY WITH ARRAYS
// ==========================================

// ReadonlyArray prevents modifying array elements.

const weapons: ReadonlyArray<string> = [
    "Sword",
    "Bow",
    "Spear"
];

console.log(weapons);

// Reading array elements is allowed.

console.log(weapons[0]);

// Modifying the array is not allowed.

// weapons.push("Shield"); // Error
// weapons[0] = "Axe"; // Error


// ==========================================
// 6. PRACTICAL EXAMPLE
// ==========================================

// Store game configuration for different players.

type GameConfig = {
    maxHealth: number;
    maxLevel: number;
    difficulty: string;
};

const gameConfigurations: Record<string, Readonly<GameConfig>> = {

    Easy: {
        maxHealth: 150,
        maxLevel: 50,
        difficulty: "Easy"
    },

    Hard: {
        maxHealth: 100,
        maxLevel: 100,
        difficulty: "Hard"
    }

};

console.log(gameConfigurations);


// ==========================================
// END
// ==========================================
