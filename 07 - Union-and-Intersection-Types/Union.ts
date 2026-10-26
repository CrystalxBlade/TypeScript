console.log("----- UNION TYPES -----");

// 1. Union of primitive types
let playerId: number | string;

playerId = 101;
console.log("Numeric ID:", playerId);

playerId = "PLAYER-101";
console.log("String ID:", playerId);

// TypeScript error:
// playerId = true;


// 2. Union using a type alias
type PlayerId = number | string;

let bladeId: PlayerId = 500;
console.log("Blade ID:", bladeId);

bladeId = "BLADE-500";
console.log("Updated Blade ID:", bladeId);


// 3. Union of literal values
type Difficulty = "Easy" | "Normal" | "Hard";

let gameDifficulty: Difficulty = "Normal";
console.log("Difficulty:", gameDifficulty);

gameDifficulty = "Hard";
console.log("Updated difficulty:", gameDifficulty);

// TypeScript error:
// gameDifficulty = "Extreme";


// 4. Union type as a function parameter
function displayId(id: number | string): void {
    console.log("ID:", id);
}

displayId(101);
displayId("PLAYER-101");


// 5. Narrowing a union with typeof
function displayValue(value: string | number): void {
    if (typeof value === "string") {
        console.log("Uppercase:", value.toUpperCase());
    } else {
        console.log("Formatted number:", value.toFixed(2));
    }
}

displayValue("Blade");
displayValue(125.5);


// 6. Union with different object types
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