console.log("----- FUNCTION TYPES -----");

// Defining a function type
let calculate: (a: number, b: number) => number;

// Assigning a function that matches the type
calculate = (a, b) => {
    return a + b;
};

console.log("Addition:", calculate(10, 20));

// Reassigning another compatible function
calculate = (a, b) => a * b;

console.log("Multiplication:", calculate(10, 20));

// Function type returning a string
let getMessage: (name: string) => string;

getMessage = (name) => `Welcome, ${name}!`;

console.log(getMessage("Blade"));

// Using a function type as a parameter
function performCalculation(
    a: number,
    b: number,
    operation: (x: number, y: number) => number
): number {
    return operation(a, b);
}

let result = performCalculation(10, 5, (x, y) => x - y);

console.log("Result:", result);

// TypeScript error examples:
// calculate = (a: string, b: string) => a + b;
// getMessage = (name: number) => `Welcome, ${name}!`;