

// ==========================================
// ERROR HANDLING IN TYPESCRIPT
// ==========================================


// ==========================================
// 1. BASIC TRY...CATCH
// ==========================================

try {

    const player = null;

    console.log(player.name);

}
catch (error) {

    console.log("Something went wrong!");

}


// ==========================================
// 2. TRY...CATCH...FINALLY
// ==========================================

try {

    console.log("Loading player data...");

    throw new Error("Unable to load player data.");

}
catch (error) {

    console.log("Error occurred!");

}
finally {

    console.log("Loading process completed.");

}


// ==========================================
// 3. THROWING AN ERROR
// ==========================================

function checkPlayerLevel(level: number): void {

    if (level < 1) {

        throw new Error("Player level must be at least 1.");

    }

    console.log("Player level is valid.");

}

try {

    checkPlayerLevel(0);

}
catch (error) {

    console.log("Error:", error);

}


// ==========================================
// 4. HANDLING ERRORS WITH UNKNOWN
// ==========================================

try {

    throw new Error("Player not found.");

}
catch (error: unknown) {

    if (error instanceof Error) {

        console.log("Error message:", error.message);

    }
    else {

        console.log("An unknown error occurred.");

    }

}


// ==========================================
// 5. THROWING DIFFERENT VALUES
// ==========================================

try {

    throw "Something went wrong!";

}
catch (error: unknown) {

    if (typeof error === "string") {

        console.log("String error:", error);

    }
    else if (error instanceof Error) {

        console.log("Error message:", error.message);

    }
    else {

        console.log("Unknown error type.");

    }

}


// ==========================================
// 6. CREATING A CUSTOM ERROR CLASS
// ==========================================

class PlayerNotFoundError extends Error {

    constructor(message: string) {

        super(message);

        this.name = "PlayerNotFoundError";

    }

}

try {

    throw new PlayerNotFoundError("Blade was not found.");

}
catch (error: unknown) {

    if (error instanceof PlayerNotFoundError) {

        console.log(error.name);
        console.log(error.message);

    }
    else if (error instanceof Error) {

        console.log(error.message);

    }

}


// ==========================================
// 7. PRACTICAL PLAYER VALIDATION
// ==========================================

type Player = {

    name: string;
    level: number;
    health: number;

};


function createPlayer(
    name: string,
    level: number,
    health: number
): Player {

    if (name.trim() === "") {

        throw new Error("Player name cannot be empty.");

    }

    if (level < 1) {

        throw new Error("Player level must be at least 1.");

    }

    if (health <= 0 || health > 100) {

        throw new Error("Player health must be between 1 and 100.");

    }

    return {

        name,
        level,
        health

    };

}


try {

    const player = createPlayer("Blade", 20, 100);

    console.log("Player created successfully!");
    console.log(player);

}
catch (error: unknown) {

    if (error instanceof Error) {

        console.log("Failed to create player:", error.message);

    }

}


// ==========================================
// 8. REUSABLE ERROR HANDLING FUNCTION
// ==========================================

function displayError(error: unknown): void {

    if (error instanceof Error) {

        console.log("Error:", error.message);

    }
    else {

        console.log("An unexpected error occurred.");

    }

}


try {

    throw new Error("Game connection failed.");

}
catch (error: unknown) {

    displayError(error);

}


// ==========================================
// END OF ERROR HANDLING
// ==========================================
