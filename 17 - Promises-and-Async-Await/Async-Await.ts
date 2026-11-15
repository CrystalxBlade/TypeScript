
// ==========================================
// 1. Basic Promise
// ==========================================

const playerPromise = new Promise<string>((resolve) => {
    resolve("Blade");
});

playerPromise.then((player) => {
    console.log("Player:", player);
});


// ==========================================
// 2. Promise with setTimeout
// ==========================================

function wait(milliseconds: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

wait(2000).then(() => {
    console.log("2 seconds completed!");
});


// ==========================================
// 3. Promise with resolve and reject
// ==========================================

function checkHealth(health: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (health > 0) {
            resolve("Player is alive!");
        } else {
            reject(new Error("Player has been defeated!"));
        }
    });
}

checkHealth(100)
    .then((message) => {
        console.log(message);
    })
    .catch((error: unknown) => {
        if (error instanceof Error) {
            console.log(error.message);
        }
    });


// ==========================================
// 4. Promise Chaining
// ==========================================

Promise.resolve(10)
    .then((score) => {
        console.log("Original score:", score);

        return score + 50;
    })
    .then((updatedScore) => {
        console.log("Updated score:", updatedScore);

        return updatedScore * 2;
    })
    .then((finalScore) => {
        console.log("Final score:", finalScore);
    });


// ==========================================
// 5. Async Function
// ==========================================

async function getPlayerName(): Promise<string> {
    return "Crystal";
}

getPlayerName().then((name) => {
    console.log("Player name:", name);
});


// ==========================================
// 6. Using Await
// ==========================================

function getGame(): Promise<string> {
    return Promise.resolve("Ghost of Tsushima");
}

async function displayGame(): Promise<void> {
    const game = await getGame();

    console.log("Game:", game);
}

displayGame();


// ==========================================
// 7. Async/Await with setTimeout
// ==========================================

async function loadGame(): Promise<void> {
    console.log("Loading game...");

    await wait(2000);

    console.log("Game loaded!");
}

loadGame();


// ==========================================
// 8. Error Handling with Try/Catch
// ==========================================

async function checkPlayer(): Promise<void> {
    try {
        await checkHealth(0);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        }
    }
}

checkPlayer();


// ==========================================
// 9. Using Finally
// ==========================================

async function loadPlayer(): Promise<void> {
    try {
        console.log("Loading player data...");

        await wait(1500);

        console.log("Player data loaded!");
    } catch (error: unknown) {
        console.log("Something went wrong:", error);
    } finally {
        console.log("Loading process completed.");
    }
}

loadPlayer();


// ==========================================
// 10. Promise.all()
// ==========================================

async function loadPlayers(): Promise<void> {
    const players = await Promise.all([
        Promise.resolve("Blade"),
        Promise.resolve("Crystal"),
        Promise.resolve("Knight")
    ]);

    console.log("All players:", players);
}

loadPlayers();


// ==========================================
// 11. Promise.allSettled()
// ==========================================

async function checkServers(): Promise<void> {
    const results = await Promise.allSettled([
        Promise.resolve("Server 1 connected"),
        Promise.reject(new Error("Server 2 failed")),
        Promise.resolve("Server 3 connected")
    ]);

    console.log("Server results:", results);
}

checkServers();


// ==========================================
// 12. Promise.race()
// ==========================================

async function checkFastestServer(): Promise<void> {
    const result = await Promise.race([
        wait(1000).then(() => "Server 1"),
        wait(2000).then(() => "Server 2"),
        wait(3000).then(() => "Server 3")
    ]);

    console.log("Fastest server:", result);
}

checkFastestServer();


// ==========================================
// 13. Promise.any()
// ==========================================

async function connectToServer(): Promise<void> {
    try {
        const result = await Promise.any([
            Promise.reject(new Error("Server 1 failed")),
            Promise.resolve("Server 2 connected"),
            Promise.resolve("Server 3 connected")
        ]);

        console.log(result);
    } catch (error: unknown) {
        console.log("All servers failed:", error);
    }
}

connectToServer();


// ==========================================
// 14. Fetch API
// ==========================================

interface User {
    id: number;
    name: string;
    email: string;
}

async function fetchUsers(): Promise<void> {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users: User[] = await response.json();

        users.forEach((user) => {
            console.log(user.id, user.name, user.email);
        });

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Fetch error:", error.message);
        }
    }
}

fetchUsers();


// ==========================================
// 15. Practical Example: Player Profile
// ==========================================

interface Player {
    id: number;
    name: string;
    level: number;
}

async function getPlayerProfile(): Promise<Player> {
    await wait(1500);

    return {
        id: 1,
        name: "Hornet",
        level: 25
    };
}

async function displayPlayerProfile(): Promise<void> {
    try {
        console.log("Fetching player profile...");

        const player = await getPlayerProfile();

        console.log("Player ID:", player.id);
        console.log("Player Name:", player.name);
        console.log("Player Level:", player.level);

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        }
    }
}

displayPlayerProfile();