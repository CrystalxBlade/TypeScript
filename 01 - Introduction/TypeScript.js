"use strict";
/*
    Topic: What is TypeScript?
    Purpose: Demonstrate basic TypeScript features.
*/
// Explicit type annotations
let playerName = "Blade";
let playerLevel = 10;
let isPlayerActive = true;
// Type inference
let playerScore = 500;
// Function with parameter and return types
function calculateScore(score, bonus) {
    return score + bonus;
}
const finalScore = calculateScore(playerScore, 100);
console.log("Player:", playerName);
console.log("Level:", playerLevel);
console.log("Active:", isPlayerActive);
console.log("Final Score:", finalScore);
