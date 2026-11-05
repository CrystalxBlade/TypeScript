export {};

// 1. Basic Conditional Type

type Check<T> = T extends string ? "Yes" : "No";

type Result1 = Check<string>;
type Result2 = Check<number>;

const result1: Result1 = "Yes";
const result2: Result2 = "No";

console.log(result1);
console.log(result2);


// 2. Checking Number Types

type CheckNumber<T> =
    T extends number ? "Number" : "Not a Number";

type A = CheckNumber<100>;
type B = CheckNumber<string>;

const answerA: A = "Number";
const answerB: B = "Not a Number";

console.log(answerA);
console.log(answerB);


// 3. Conditional Type with a Union

type ToArray<T> = T extends unknown ? T[] : never;

type ArrayResult = ToArray<string | number>;

// Result: string[] | number[]

const names: ArrayResult = ["Blade", "Crystal"];
const scores: ArrayResult = [100, 200];

console.log(names);
console.log(scores);


// 4. Preventing Distribution

type NonDistributedArray<T> =
    [T] extends [unknown] ? T[] : never;

type CombinedArray = NonDistributedArray<string | number>;

// Result: (string | number)[]

const mixedValues: CombinedArray = ["Blade", 100, "Knight"];

console.log(mixedValues);


// 5. Using infer to Extract a Return Type

type GetReturnType<T> =
    T extends (...args: any[]) => infer R ? R : never;

type AttackFunction = () => number;

type AttackResult = GetReturnType<AttackFunction>;

const damage: AttackResult = 50;

console.log(damage);


// 6. Using infer to Extract an Array Element Type

type GetElementType<T> =
    T extends (infer U)[] ? U : never;

type PlayerArray = string[];

type Player = GetElementType<PlayerArray>;

const playerName: Player = "Blade";

console.log(playerName);


// 7. Conditional Types with Objects

type HasName<T> =
    T extends { name: string } ? true : false;

type PlayerCheck = HasName<{
    name: string;
    health: number;
}>;

type ScoreCheck = HasName<{
    score: number;
}>;

const playerResult: PlayerCheck = true;
const scoreResult: ScoreCheck = false;

console.log(playerResult);
console.log(scoreResult);