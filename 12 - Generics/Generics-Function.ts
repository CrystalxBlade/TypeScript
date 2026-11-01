// 1. A Basic Generic Function

function identity<T>(value: T): T {
    return value;
}

const playerName = identity<string>("Blade");
const playerHealth = identity<number>(100);
const isAlive = identity<boolean>(true);

console.log(playerName);
console.log(playerHealth);
console.log(isAlive);


// 2. Let TypeScript Infer the Type

function getValue<T>(value: T): T {
    return value;
}

const character = getValue("Knight");
const score = getValue(250);

console.log(character);
console.log(score);


// 3. A Generic Function with Arrays

function getFirstItem<T>(items: T[]): T | undefined {
    return items[0];
}

const players = ["Blade", "Crystal", "Hornet"];
const scores = [100, 250, 500];

console.log(getFirstItem(players));
console.log(getFirstItem(scores));


// 4. A Generic Function with Two Type Parameters

function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const playerPair = createPair("Blade", 100);
const gamePair = createPair("Silksong", true);

console.log(playerPair);
console.log(gamePair);


// 5. A Generic Function that Returns an Array

function createArray<T>(item: T, count: number): T[] {
    return Array.from({ length: count }, () => item);
}

const lives = createArray<number>(3, 4);
const names = createArray<string>("Blade", 3);

console.log(lives);
console.log(names);


// 6. A Generic Function with a Return Type

function wrapValue<T>(value: T): { data: T } {
    return {
        data: value
    };
}

const wrappedName = wrapValue("Blade");
const wrappedScore = wrapValue(1000);

console.log(wrappedName.data);
console.log(wrappedScore.data);