

// ==========================================
// PARTIAL AND REQUIRED UTILITY TYPES
// ==========================================

// Original Player type

type Player = {
    name: string;
    level: number;
    health: number;
    score: number;
};


// ==========================================
// 1. PARTIAL<T>
// ==========================================

// Partial makes every property optional.

type UpdatedPlayer = Partial<Player>;

const playerUpdate: UpdatedPlayer = {
    level: 25
};

console.log(playerUpdate);

// We can provide only the properties we want to update.

const anotherUpdate: UpdatedPlayer = {
    health: 80,
    score: 500
};

console.log(anotherUpdate);


// ==========================================
// 2. PRACTICAL EXAMPLE OF PARTIAL
// ==========================================

function updatePlayer(
    player: Player,
    updates: Partial<Player>
): Player {

    return {
        ...player,
        ...updates
    };
}

const originalPlayer: Player = {
    name: "Blade",
    level: 10,
    health: 100,
    score: 200
};

const updatedPlayer = updatePlayer(originalPlayer, {
    level: 15,
    score: 500
});

console.log(updatedPlayer);


// ==========================================
// 3. REQUIRED<T>
// ==========================================

// Required makes every property required.

type PlayerSettings = {
    sound: boolean;
    difficulty?: string;
    sensitivity?: number;
};

type CompleteSettings = Required<PlayerSettings>;

const settings: CompleteSettings = {
    sound: true,
    difficulty: "Hard",
    sensitivity: 75
};

console.log(settings);


// ==========================================
// 4. COMBINING UTILITY TYPES
// ==========================================

// We can combine Partial and Readonly.

type EditablePlayer = Readonly<Partial<Player>>;

const playerData: EditablePlayer = {
    name: "Crystal",
    level: 20
};

console.log(playerData);

// Properties are optional because of Partial.
// Properties cannot be reassigned because of Readonly.

// playerData.level = 30; // Error

// ==========================================
// END
// ==========================================
