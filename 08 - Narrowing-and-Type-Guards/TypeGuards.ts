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