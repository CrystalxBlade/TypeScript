// ==========================================
// Response-Types.ts
// ==========================================


// ==========================================
// 1. Creating an Interface for API Data
// ==========================================

interface Player {
    id: number;
    name: string;
    username: string;
    email: string;
}

const examplePlayer: Player = {
    id: 1,
    name: "Blade",
    username: "blade",
    email: "blade@example.com"
};

console.log(examplePlayer);


// ==========================================
// 2. Using an Interface with API Data
// ==========================================

async function fetchPlayer(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const player: Player = await response.json();

        console.log(player.name);
        console.log(player.email);

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

fetchPlayer();


// ==========================================
// 3. Creating an Interface for an Array
// ==========================================

interface User {
    id: number;
    name: string;
    email: string;
}

async function fetchUsers(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users: User[] = await response.json();

        users.forEach((user) => {
            console.log(user.name);
        });

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

fetchUsers();


// ==========================================
// 4. Interface for a Post
// ==========================================

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const posts: Post[] = await response.json();

        posts.forEach((post) => {
            console.log(post.title);
        });

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

fetchPosts();


// ==========================================
// 5. Optional Properties in API Responses
// ==========================================

interface GameProfile {
    id: number;
    name: string;
    level: number;
    bio?: string;
}

const profile: GameProfile = {
    id: 1,
    name: "Crystal",
    level: 50
};

console.log(profile);


// ==========================================
// 6. Nested API Objects
// ==========================================

interface Address {
    street: string;
    city: string;
    zipcode: string;
}

interface UserProfile {
    id: number;
    name: string;
    email: string;
    address: Address;
}

async function fetchUserProfile(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const user: UserProfile = await response.json();

        console.log("Name:", user.name);
        console.log("City:", user.address.city);

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

fetchUserProfile();


// ==========================================
// 7. Treating API Data as Unknown
// ==========================================

async function fetchUnknownData(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: unknown = await response.json();

        console.log(data);

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

fetchUnknownData();


// ==========================================
// 8. Checking Unknown Data
// ==========================================

function displayUnknownData(data: unknown): void {
    if (typeof data === "string") {
        console.log("String:", data);
    } else if (typeof data === "number") {
        console.log("Number:", data);
    } else if (typeof data === "boolean") {
        console.log("Boolean:", data);
    } else {
        console.log("Other data:", data);
    }
}

displayUnknownData("Blade");
displayUnknownData(25);
displayUnknownData(true);
displayUnknownData({ name: "Crystal" });


// ==========================================
// 9. Custom Type Guard for a Player
// ==========================================

interface PlayerData {
    id: number;
    name: string;
    level: number;
}

function isPlayerData(data: unknown): data is PlayerData {
    if (typeof data !== "object" || data === null) {
        return false;
    }

    if (!("id" in data) || !("name" in data) || !("level" in data)) {
        return false;
    }

    return (
        typeof data.id === "number" &&
        typeof data.name === "string" &&
        typeof data.level === "number"
    );
}

function displayPlayerData(data: unknown): void {
    if (isPlayerData(data)) {
        console.log("Player:", data.name);
        console.log("Level:", data.level);
    } else {
        console.log("Invalid player data.");
    }
}

displayPlayerData({
    id: 1,
    name: "Blade",
    level: 25
});

displayPlayerData({
    id: "wrong",
    name: "Blade",
    level: 25
});


// ==========================================
// 10. Validating API Data
// ==========================================

async function fetchValidatedPlayer(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: unknown = await response.json();

        if (
            typeof data === "object" &&
            data !== null &&
            "id" in data &&
            "name" in data &&
            typeof data.id === "number" &&
            typeof data.name === "string"
        ) {
            console.log("Valid player:", data.name);
        } else {
            console.log("Invalid API response.");
        }

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

fetchValidatedPlayer();


// ==========================================
// 11. Handling API Errors
// ==========================================

interface ApiError {
    message: string;
}

function displayApiError(error: unknown): void {
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        console.log("Unknown error occurred.");
    }
}

displayApiError(new Error("Server unavailable"));


// ==========================================
// 12. Practical Example: Player API
// ==========================================

interface GamePlayer {
    id: number;
    name: string;
    email: string;
}

async function getGamePlayer(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: unknown = await response.json();

        if (
            typeof data === "object" &&
            data !== null &&
            "id" in data &&
            "name" in data &&
            "email" in data &&
            typeof data.id === "number" &&
            typeof data.name === "string" &&
            typeof data.email === "string"
        ) {
            const player: GamePlayer = {
                id: data.id,
                name: data.name,
                email: data.email
            };

            console.log("Player ID:", player.id);
            console.log("Player Name:", player.name);
            console.log("Player Email:", player.email);

        } else {
            throw new Error("Invalid player data.");
        }

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        }
    }
}

getGamePlayer();