export {};

// ==========================================
// PICK AND OMIT UTILITY TYPES
// ==========================================

type Player = {
    id: number;
    name: string;
    level: number;
    health: number;
    score: number;
    email: string;
};


// ==========================================
// 1. PICK<T, K>
// ==========================================

// Pick only the properties we need.

type PlayerBasicInfo = Pick<Player, "name" | "level">;

const basicInfo: PlayerBasicInfo = {
    name: "Blade",
    level: 20
};

console.log(basicInfo);


// ==========================================
// 2. PICK WITH MORE PROPERTIES
// ==========================================

type PlayerStats = Pick<Player, "health" | "score" | "level">;

const stats: PlayerStats = {
    health: 100,
    score: 1500,
    level: 25
};

console.log(stats);


// ==========================================
// 3. OMIT<T, K>
// ==========================================

// Omit removes selected properties.

type PublicPlayer = Omit<Player, "email">;

const publicPlayer: PublicPlayer = {
    id: 101,
    name: "Crystal",
    level: 15,
    health: 90,
    score: 1200
};

console.log(publicPlayer);

// The email property is not allowed in PublicPlayer.


// ==========================================
// 4. OMIT MULTIPLE PROPERTIES
// ==========================================

type PlayerWithoutPrivateInfo = Omit<Player, "email" | "id">;

const safePlayer: PlayerWithoutPrivateInfo = {
    name: "Knight",
    level: 30,
    health: 100,
    score: 3000
};

console.log(safePlayer);


// ==========================================
// 5. PRACTICAL EXAMPLE
// ==========================================

// Imagine we have complete player data.

const player: Player = {
    id: 101,
    name: "Hornet",
    level: 40,
    health: 100,
    score: 5000,
    email: "hornet@example.com"
};


// Pick only the information needed for a profile.

const profile: PlayerBasicInfo = {
    name: player.name,
    level: player.level
};

console.log(profile);


// Omit private information before creating public data.

const publicProfile: PublicPlayer = {
    id: player.id,
    name: player.name,
    level: player.level,
    health: player.health,
    score: player.score
};

console.log(publicProfile);


// ==========================================
// END
// ==========================================
