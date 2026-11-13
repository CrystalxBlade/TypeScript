console.log("----- TYPE GUARDS -----");

// 1. Using the 'in' operator
type Sword = {
    damage: number;
};

type Potion = {
    healing: number;
};

function useItem(item: Sword | Potion): void {
    if ("damage" in item) {
        console.log("Sword damage:", item.damage);
    } else {
        console.log("Potion healing:", item.healing);
    }
}

useItem({ damage: 50 });
useItem({ healing: 30 });


// 2. Using instanceof
class Knight {
    defend(): void {
        console.log("Knight blocks the attack!");
    }
}

class Archer {
    shoot(): void {
        console.log("Archer fires an arrow!");
    }
}

function useCharacter(character: Knight | Archer): void {
    if (character instanceof Knight) {
        character.defend();
    } else {
        character.shoot();
    }
}

useCharacter(new Knight());
useCharacter(new Archer());


// 3. Creating a custom type guard
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function displayValue(value: unknown): void {
    if (isString(value)) {
        console.log(value.toUpperCase());
    } else {
        console.log("Value is not a string.");
    }
}

displayValue("Blade");
displayValue(100);


// 4. Discriminated unions
type LoadingState = {
    status: "loading";
};

type SuccessState = {
    status: "success";
    data: string;
};

type ErrorState = {
    status: "error";
    message: string;
};

type GameState = LoadingState | SuccessState | ErrorState;

function displayState(state: GameState): void {
    switch (state.status) {
        case "loading":
            console.log("Loading game...");
            break;

        case "success":
            console.log("Game data:", state.data);
            break;

        case "error":
            console.log("Error:", state.message);
            break;
    }
}

displayState({ status: "loading" });
displayState({ status: "success", data: "Level 1 loaded" });
displayState({ status: "error", message: "Failed to load level" });





// ==========================================
//  EXHAUSTIVENESS CHECKING WITH NEVER
// ==========================================

// Exhaustiveness checking ensures that every
// possible case in a union type is handled.

// The "never" type represents a value that
// should never occur.


// ==========================================
// 1. BASIC DISCRIMINATED UNION
// ==========================================

type GameStatus =
    | "loading"
    | "playing"
    | "paused"
    | "gameover";


function displayGameStatus(status: GameStatus): void {

    switch (status) {

        case "loading":

            console.log("Loading game...");

            break;


        case "playing":

            console.log("Game is running!");

            break;


        case "paused":

            console.log("Game paused.");

            break;


        case "gameover":

            console.log("Game over!");

            break;

    }

}


displayGameStatus("playing");


// ==========================================
// 2. USING NEVER FOR EXHAUSTIVENESS
// ==========================================

// This function handles a value that should
// never reach this point if every case is handled.

function handleUnexpectedStatus(status: never): never {

    throw new Error(`Unexpected game status: ${status}`);

}


function displayGameStatusSafely(status: GameStatus): void {

    switch (status) {

        case "loading":

            console.log("Loading game...");

            break;


        case "playing":

            console.log("Game is running!");

            break;


        case "paused":

            console.log("Game paused.");

            break;


        case "gameover":

            console.log("Game over!");

            break;


        default:

            handleUnexpectedStatus(status);

    }

}


displayGameStatusSafely("paused");


// ==========================================
// 3. WHY IS EXHAUSTIVENESS CHECKING USEFUL?
// ==========================================

// Imagine we add a new status to our union.

type UpdatedGameStatus =
    | "loading"
    | "playing"
    | "paused"
    | "gameover"
    | "victory";


function displayUpdatedStatus(status: UpdatedGameStatus): void {

    switch (status) {

        case "loading":

            console.log("Loading game...");

            break;


        case "playing":

            console.log("Game is running!");

            break;


        case "paused":

            console.log("Game paused.");

            break;


        case "gameover":

            console.log("Game over!");

            break;


        // We forgot to handle "victory"!

        default:

            // TypeScript reports an error here because
            // status is "victory", not "never".

            handleUnexpectedStatus(status);

    }

}


// ==========================================
// 4. EXHAUSTIVENESS WITH OBJECT UNIONS
// ==========================================

// Discriminated unions can also use object types.

type PlayerAction =
    | { type: "move"; distance: number }
    | { type: "attack"; damage: number }
    | { type: "heal"; amount: number };


function performAction(action: PlayerAction): void {

    switch (action.type) {

        case "move":

            console.log(`Player moved ${action.distance} meters.`);

            break;


        case "attack":

            console.log(`Player dealt ${action.damage} damage.`);

            break;


        case "heal":

            console.log(`Player recovered ${action.amount} health.`);

            break;


        default:

            handleUnexpectedAction(action);

    }

}


function handleUnexpectedAction(action: never): never {

    throw new Error(`Unexpected action: ${JSON.stringify(action)}`);

}


performAction({
    type: "attack",
    damage: 50
});


// ==========================================
// 5. PRACTICAL EXAMPLE
// ==========================================

// Imagine a game with different player states.

type PlayerState =
    | { state: "alive"; health: number }
    | { state: "dead"; cause: string }
    | { state: "respawning"; seconds: number };


function showPlayerState(player: PlayerState): void {

    switch (player.state) {

        case "alive":

            console.log(`Player health: ${player.health}`);

            break;


        case "dead":

            console.log(`Player died because of: ${player.cause}`);

            break;


        case "respawning":

            console.log(`Respawning in ${player.seconds} seconds.`);

            break;


        default:

            handleUnexpectedPlayerState(player);

    }

}


function handleUnexpectedPlayerState(player: never): never {

    throw new Error(`Unexpected player state: ${JSON.stringify(player)}`);

}


showPlayerState({
    state: "alive",
    health: 100
});


// ==========================================
// END OF EXHAUSTIVENESS CHECKING
// ==========================================
