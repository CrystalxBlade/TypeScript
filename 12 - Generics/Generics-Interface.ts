// 1. A Basic Generic Interface

interface Box<T> {
    value: T;
}

const nameBox: Box<string> = {
    value: "Blade"
};

const scoreBox: Box<number> = {
    value: 500
};

console.log(nameBox.value);
console.log(scoreBox.value);


// 2. A Generic Interface for Player Data

interface Player<T> {
    name: string;
    stats: T;
}

interface PlayerStats {
    health: number;
    level: number;
}

const player: Player<PlayerStats> = {
    name: "Blade",
    stats: {
        health: 100,
        level: 5
    }
};

console.log(player.name);
console.log(player.stats.health);
console.log(player.stats.level);


// 3. A Generic Interface with Multiple Type Parameters

interface Pair<T, U> {
    first: T;
    second: U;
}

const playerScore: Pair<string, number> = {
    first: "Blade",
    second: 1000
};

const gameStatus: Pair<string, boolean> = {
    first: "Game Started",
    second: true
};

console.log(playerScore);
console.log(gameStatus);


// 4. A Generic Interface for API Responses

interface ApiResponse<T> {
    success: boolean;
    data: T;
    message: string;
}

interface Character {
    id: number;
    name: string;
}

const response: ApiResponse<Character> = {
    success: true,
    data: {
        id: 1,
        name: "Hornet"
    },
    message: "Character loaded successfully"
};

console.log(response.success);
console.log(response.data.name);
console.log(response.message);


// 5. A Generic Interface with a Function

interface Repository<T> {
    getAll(): T[];
    getById(id: number): T | undefined;
}

interface Enemy {
    id: number;
    name: string;
}

const enemyRepository: Repository<Enemy> = {
    getAll(): Enemy[] {
        return [
            { id: 1, name: "Guard" },
            { id: 2, name: "Boss" }
        ];
    },

    getById(id: number): Enemy | undefined {
        return this.getAll().find(enemy => enemy.id === id);
    }
};

console.log(enemyRepository.getAll());
console.log(enemyRepository.getById(2));