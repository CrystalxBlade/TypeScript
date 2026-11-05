// 1. Basic Mapped Type

type Player = {
    name: string;
    health: number;
    level: number;
};

type OptionalPlayer = {
    [K in keyof Player]?: Player[K];
};

const playerUpdate: OptionalPlayer = {
    health: 80
};

console.log(playerUpdate);


// 2. Making All Properties Readonly

type ReadonlyPlayer<T> = {
    readonly [K in keyof T]: T[K];
};

type LockedPlayer = ReadonlyPlayer<Player>;

const lockedPlayer: LockedPlayer = {
    name: "Blade",
    health: 100,
    level: 5
};

console.log(lockedPlayer);

// lockedPlayer.health = 50; // Error


// 3. Making All Properties Required

type RequiredPlayer<T> = {
    [K in keyof T]-?: T[K];
};

type PlayerProfile = {
    name?: string;
    health?: number;
};

type CompletePlayer = RequiredPlayer<PlayerProfile>;

const completePlayer: CompletePlayer = {
    name: "Crystal",
    health: 100
};

console.log(completePlayer);


// 4. Removing Readonly

type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};

type OriginalPlayer = {
    readonly name: string;
    readonly health: number;
};

type EditablePlayer = Mutable<OriginalPlayer>;

const editablePlayer: EditablePlayer = {
    name: "Blade",
    health: 100
};

editablePlayer.health = 80;

console.log(editablePlayer);


// 5. Key Remapping

type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type Character = {
    name: string;
    health: number;
};

type CharacterGetters = Getters<Character>;

const character: CharacterGetters = {
    getName: () => "Hornet",
    getHealth: () => 100
};

console.log(character.getName());
console.log(character.getHealth());


// 6. Creating a Partial Update Type

type Update<T> = {
    [K in keyof T]?: T[K];
};

type Enemy = {
    name: string;
    health: number;
    damage: number;
};

const enemyUpdate: Update<Enemy> = {
    health: 250,
    damage: 40
};

console.log(enemyUpdate);