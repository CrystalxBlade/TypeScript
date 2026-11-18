export {};

// ==========================================
// Event-Handling.ts
// ==========================================

// HTML elements expected in the HTML page:
//
// <button id="clickButton">Click Me</button>
// <button id="doubleButton">Double Click</button>
// <p id="message">Waiting...</p>
// <input id="playerName" type="text">
// <form id="playerForm">
//     <input id="email" type="email">
//     <button type="submit">Submit</button>
// </form>
// <div id="parent">
//     <button id="child">Child Button</button>
// </div>
// <ul id="playerList">
//     <li>Blade</li>
//     <li>Crystal</li>
// </ul>


// ==========================================
// 1. Click Event
// ==========================================

const clickButton = document.querySelector<HTMLButtonElement>("#clickButton");

if (clickButton) {
    clickButton.addEventListener("click", () => {
        console.log("Button clicked!");
    });
}


// ==========================================
// 2. Double Click Event
// ==========================================

const doubleButton = document.querySelector<HTMLButtonElement>("#doubleButton");

if (doubleButton) {
    doubleButton.addEventListener("dblclick", () => {
        console.log("Button double-clicked!");
    });
}


// ==========================================
// 3. Changing Text After Clicking
// ==========================================

const message = document.querySelector<HTMLParagraphElement>("#message");

if (clickButton && message) {
    clickButton.addEventListener("click", () => {
        message.textContent = "Hello, Blade!";
    });
}


// ==========================================
// 4. Mouseover Event
// ==========================================

if (message) {
    message.addEventListener("mouseover", () => {
        message.style.color = "blue";
    });
}


// ==========================================
// 5. Mouseout Event
// ==========================================

if (message) {
    message.addEventListener("mouseout", () => {
        message.style.color = "black";
    });
}


// ==========================================
// 6. Input Event
// ==========================================

const playerNameInput = document.querySelector<HTMLInputElement>("#playerName");

if (playerNameInput) {
    playerNameInput.addEventListener("input", () => {
        console.log("Player name:", playerNameInput.value);
    });
}


// ==========================================
// 7. Keyboard Event
// ==========================================

if (playerNameInput) {
    playerNameInput.addEventListener("keydown", (event: KeyboardEvent) => {
        console.log("Key pressed:", event.key);
    });
}


// ==========================================
// 8. Detecting the Enter Key
// ==========================================

if (playerNameInput) {
    playerNameInput.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Enter") {
            console.log("Player name submitted:", playerNameInput.value);
        }
    });
}


// ==========================================
// 9. Change Event
// ==========================================

if (playerNameInput) {
    playerNameInput.addEventListener("change", () => {
        console.log("Final input value:", playerNameInput.value);
    });
}


// ==========================================
// 10. Focus Event
// ==========================================

if (playerNameInput) {
    playerNameInput.addEventListener("focus", () => {
        console.log("Input field focused!");
    });
}


// ==========================================
// 11. Blur Event
// ==========================================

if (playerNameInput) {
    playerNameInput.addEventListener("blur", () => {
        console.log("Input field lost focus!");
    });
}


// ==========================================
// 12. Form Submission
// ==========================================

const playerForm = document.querySelector<HTMLFormElement>("#playerForm");

if (playerForm) {
    playerForm.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();

        console.log("Form submitted!");
    });
}


// ==========================================
// 13. Reading Form Input
// ==========================================

const emailInput = document.querySelector<HTMLInputElement>("#email");

if (playerForm && emailInput) {
    playerForm.addEventListener("submit", (event: SubmitEvent) => {
        event.preventDefault();

        console.log("Email:", emailInput.value);
    });
}


// ==========================================
// 14. Mouse Coordinates
// ==========================================

if (clickButton) {
    clickButton.addEventListener("click", (event: MouseEvent) => {
        console.log("X:", event.clientX);
        console.log("Y:", event.clientY);
    });
}


// ==========================================
// 15. Event Target
// ==========================================

if (clickButton) {
    clickButton.addEventListener("click", (event: MouseEvent) => {
        console.log("Event target:", event.target);
        console.log("Current target:", event.currentTarget);
    });
}


// ==========================================
// 16. Preventing Event Bubbling
// ==========================================

const parent = document.querySelector<HTMLDivElement>("#parent");
const child = document.querySelector<HTMLButtonElement>("#child");

if (parent && child) {
    parent.addEventListener("click", () => {
        console.log("Parent clicked!");
    });

    child.addEventListener("click", (event: MouseEvent) => {
        event.stopPropagation();

        console.log("Child clicked!");
    });
}


// ==========================================
// 17. Event Delegation
// ==========================================

const playerList = document.querySelector<HTMLUListElement>("#playerList");

if (playerList) {
    playerList.addEventListener("click", (event: MouseEvent) => {
        const target = event.target;

        if (target instanceof HTMLLIElement) {
            console.log("Selected player:", target.textContent);
        }
    });
}


// ==========================================
// 18. Removing Event Listeners
// ==========================================

function handleClick(): void {
    console.log("This event listener can be removed.");
}

if (clickButton) {
    clickButton.addEventListener("click", handleClick);

    clickButton.removeEventListener("click", handleClick);
}