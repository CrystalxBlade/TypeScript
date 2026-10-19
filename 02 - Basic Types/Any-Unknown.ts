console.log("----- ANY -----");

let playerData: any = "Blade";

console.log(playerData);

playerData = 100;
console.log(playerData);

playerData = true;
console.log(playerData);

// 'any' allows operations without type checking.
// Be careful: an invalid operation may fail at runtime.

// console.log(playerData.toUpperCase());
// This line would fail at runtime because playerData is a boolean.


console.log("----- UNKNOWN -----");

let playerInput: unknown = "Crystal";

console.log(playerInput);

// Type checking is required before using string methods.
if (typeof playerInput === "string") {
    console.log(playerInput.toUpperCase());
}

playerInput = 100;

if (typeof playerInput === "number") {
    console.log(playerInput.toFixed(2));
}

// Unlike 'any', unknown does not allow arbitrary operations
// without checking the type first.