export {};

// ==========================================
// Fetch-API.ts
// ==========================================


// ==========================================
// 1. Basic Fetch Request
// ==========================================

async function getData(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log(response);
}

getData();


// ==========================================
// 2. Checking Response Status
// ==========================================

async function checkResponse(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    console.log("Status:", response.status);
    console.log("Successful:", response.ok);
    console.log("URL:", response.url);
}

checkResponse();


// ==========================================
// 3. Fetching JSON Data
// ==========================================

async function fetchUsers(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data: unknown = await response.json();

    console.log(data);
}

fetchUsers();


// ==========================================
// 4. Handling HTTP Errors
// ==========================================

async function fetchPosts(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: unknown = await response.json();

        console.log(data);

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        }
    }
}

fetchPosts();


// ==========================================
// 5. GET Request
// ==========================================

async function getPlayer(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const player: unknown = await response.json();

        console.log(player);

    } catch (error: unknown) {
        console.log("Request failed:", error);
    }
}

getPlayer();


// ==========================================
// 6. POST Request
// ==========================================

async function createPlayer(): Promise<void> {
    const player = {
        name: "Blade",
        level: 25
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(player)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result: unknown = await response.json();

        console.log("Created:", result);

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

createPlayer();


// ==========================================
// 7. PUT Request
// ==========================================

async function updatePlayer(): Promise<void> {
    const updatedPlayer = {
        id: 1,
        name: "Blade",
        level: 50
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(updatedPlayer)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result: unknown = await response.json();

        console.log("Updated:", result);

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

updatePlayer();


// ==========================================
// 8. PATCH Request
// ==========================================

async function updatePlayerLevel(): Promise<void> {
    const update = {
        level: 30
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(update)
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result: unknown = await response.json();

        console.log("Updated level:", result);

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

updatePlayerLevel();


// ==========================================
// 9. DELETE Request
// ==========================================

async function deletePlayer(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        console.log("Player deleted successfully!");

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

deletePlayer();


// ==========================================
// 10. Working with Headers
// ==========================================

async function fetchWithHeaders(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: unknown = await response.json();

        console.log(data);

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

fetchWithHeaders();


// ==========================================
// 11. Query Parameters
// ==========================================

async function fetchFilteredPosts(): Promise<void> {
    const params = new URLSearchParams({
        userId: "1"
    });

    const url = `https://jsonplaceholder.typicode.com/posts?${params}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const posts: unknown = await response.json();

        console.log(posts);

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

fetchFilteredPosts();


// ==========================================
// 12. Fetching a Single Resource
// ==========================================

async function fetchSinglePost(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const post: unknown = await response.json();

        console.log(post);

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

fetchSinglePost();


// ==========================================
// 13. Fetching Multiple Resources
// ==========================================

async function fetchMultipleResources(): Promise<void> {
    try {
        const [usersResponse, postsResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);

        if (!usersResponse.ok || !postsResponse.ok) {
            throw new Error("One or more requests failed.");
        }

        const [users, posts]: [unknown, unknown] = await Promise.all([
            usersResponse.json(),
            postsResponse.json()
        ]);

        console.log("Users:", users);
        console.log("Posts:", posts);

    } catch (error: unknown) {
        console.log("Error:", error);
    }
}

fetchMultipleResources();


// ==========================================
// 14. Fetch API with Finally
// ==========================================

async function loadData(): Promise<void> {
    try {
        console.log("Loading data...");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: unknown = await response.json();

        console.log(data);

    } catch (error: unknown) {
        console.log("Error:", error);

    } finally {
        console.log("Request finished.");
    }
}

loadData();