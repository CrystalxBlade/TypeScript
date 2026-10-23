export {};

console.log("----- OPTIONAL PROPERTIES -----");

let player: {
    name: string;
    weapon?: string;
    level: number;
} = {
    name: "Blade",
    level: 5
};

console.log(player);

// The optional property is not provided yet.
console.log("Weapon:", player.weapon); // undefined

// Adding a value to the optional property
player.weapon = "Sword";

console.log("Updated player:", player);
console.log("Weapon:", player.weapon);

// Removing the optional property
delete player.weapon;

console.log("After removing weapon:", player);

// Another valid object without the optional property
let secondPlayer: {
    name: string;
    weapon?: string;
    level: number;
} = {
    name: "Crystal",
    level: 10
};

console.log(secondPlayer);

// TypeScript error examples:
// Missing required property 'level':
// let thirdPlayer: { name: string; level: number } = {
//     name: "Knight"
// };

// Incorrect property type:
// player.weapon = 100;