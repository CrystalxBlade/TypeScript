// ==========================================
// DOM-Selection.ts
// ==========================================

// HTML elements expected in the HTML page:
//
// <h1 id="heading">Welcome!</h1>
// <p class="description">Learn TypeScript</p>
// <button id="startButton">Start Game</button>
// <input id="playerName" type="text">
// <div id="container"></div>
// <ul id="playerList">
//     <li>Blade</li>
//     <li>Crystal</li>
// </ul>


// ==========================================
// 1. Selecting an Element by ID
// ==========================================

const heading = document.getElementById("heading");

if (heading) {
    console.log(heading.textContent);
}


// ==========================================
// 2. Selecting Elements by Class Name
// ==========================================

const descriptions = document.getElementsByClassName("description");

console.log(descriptions);


// ==========================================
// 3. Selecting Elements by Tag Name
// ==========================================

const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);


// ==========================================
// 4. querySelector()
// ==========================================

const firstParagraph = document.querySelector<HTMLParagraphElement>("p");

if (firstParagraph) {
    console.log(firstParagraph.textContent);
}


// ==========================================
// 5. querySelectorAll()
// ==========================================

const allParagraphs = document.querySelectorAll<HTMLParagraphElement>("p");

allParagraphs.forEach((paragraph) => {
    console.log(paragraph.textContent);
});


// ==========================================
// 6. Selecting a Button
// ==========================================

const startButton = document.querySelector<HTMLButtonElement>("#startButton");

if (startButton) {
    console.log(startButton.textContent);
}


// ==========================================
// 7. Changing Text Content
// ==========================================

if (heading) {
    heading.textContent = "Welcome, Blade!";
}


// ==========================================
// 8. Changing HTML Content
// ==========================================

const container = document.querySelector<HTMLDivElement>("#container");

if (container) {
    container.innerHTML = "<h2>Game Started!</h2>";
}


// ==========================================
// 9. Changing CSS Styles
// ==========================================

if (heading) {
    heading.style.color = "blue";
    heading.style.fontSize = "30px";
    heading.style.backgroundColor = "lightgray";
}


// ==========================================
// 10. Working with CSS Classes
// ==========================================

if (heading) {
    heading.classList.add("active");

    console.log(heading.classList.contains("active"));

    heading.classList.remove("active");

    heading.classList.toggle("highlight");
}


// ==========================================
// 11. Reading Input Values
// ==========================================

const playerNameInput = document.querySelector<HTMLInputElement>("#playerName");

if (playerNameInput) {
    console.log("Player name:", playerNameInput.value);
}


// ==========================================
// 12. Converting Input Values
// ==========================================

const levelInput = document.querySelector<HTMLInputElement>("#playerLevel");

if (levelInput) {
    const level = Number(levelInput.value);

    console.log("Player level:", level);
}


// ==========================================
// 13. Creating an Element
// ==========================================

const newParagraph = document.createElement("p");

newParagraph.textContent = "Hello, Crystal!";


// ==========================================
// 14. Adding an Element
// ==========================================

if (container) {
    container.appendChild(newParagraph);
}


// ==========================================
// 15. Removing an Element
// ==========================================

newParagraph.remove();


// ==========================================
// 16. Creating a List Dynamically
// ==========================================

const playerList = document.querySelector<HTMLUListElement>("#playerList");

if (playerList) {
    const newPlayer = document.createElement("li");

    newPlayer.textContent = "Knight";

    playerList.appendChild(newPlayer);
}


// ==========================================
// 17. Removing an Element from a List
// ==========================================

if (playerList) {
    const firstPlayer = playerList.querySelector("li");

    firstPlayer?.remove();
}


// ==========================================
// 18. Working with Images
// ==========================================

const image = document.createElement("img");

image.src = "player.png";
image.alt = "Player character";
image.width = 200;


// ==========================================
// 19. Adding an Image to the Page
// ==========================================

if (container) {
    container.appendChild(image);
}


// ==========================================
// 20. Checking Whether an Element Exists
// ==========================================

const gameTitle = document.querySelector<HTMLHeadingElement>("#gameTitle");

if (gameTitle) {
    console.log("Game title exists!");
} else {
    console.log("Game title was not found.");
}