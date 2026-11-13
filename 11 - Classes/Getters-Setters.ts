
// ==========================================
//  GETTERS AND SETTERS
// ==========================================

// Getters and Setters allow us to access and
// modify private properties in a controlled way.

// GETTER:
// Uses the "get" keyword.
// Allows us to read a property's value.

// SETTER:
// Uses the "set" keyword.
// Allows us to change a property's value
// while applying validation if necessary.


class Player {

    private _health: number;

    constructor(health: number) {

        this._health = health;

    }


    // GETTER

    get health(): number {

        return this._health;

    }


    // SETTER

    set health(newHealth: number) {

        if (newHealth < 0 || newHealth > 100) {

            throw new Error("Health must be between 0 and 100.");

        }

        this._health = newHealth;

    }

}


const blade = new Player(100);


// Accessing the getter

console.log(blade.health);


// Using the setter

blade.health = 75;

console.log(blade.health);


// Invalid value throws an error

// blade.health = 150;


// ==========================================
// 11. GETTERS AND SETTERS WITH PRACTICAL
//     VALIDATION
// ==========================================

class GameSettings {

    private _difficulty: string;

    constructor(difficulty: string) {

        this._difficulty = difficulty;

    }


    get difficulty(): string {

        return this._difficulty;

    }


    set difficulty(newDifficulty: string) {

        const allowedDifficulties = [
            "Easy",
            "Medium",
            "Hard"
        ];

        if (!allowedDifficulties.includes(newDifficulty)) {

            throw new Error("Invalid difficulty level.");

        }

        this._difficulty = newDifficulty;

    }

}


const settings = new GameSettings("Medium");

console.log(settings.difficulty);

settings.difficulty = "Hard";

console.log(settings.difficulty);


// ==========================================
// END OF GETTERS AND SETTERS
// ==========================================
