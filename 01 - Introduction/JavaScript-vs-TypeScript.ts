
/*
    Topic: JavaScript vs TypeScript

    JavaScript example:

    let playerLevel = 10;

    function increaseLevel(level) {
        return level + 1;
    }

    TypeScript example:
*/

let playerLevelInfo: number = 10;

function increaseLevel(level: number): number {
    return level + 1;
}

console.log(increaseLevel(playerLevelInfo));

// Uncomment this line to see a TypeScript type error:
// console.log(increaseLevel("ten"));
