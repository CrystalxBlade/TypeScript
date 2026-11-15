# Promises and Async/Await in TypeScript

## 1. What is Asynchronous Programming?

In normal synchronous code, instructions execute one after another. Each instruction waits for the previous one to finish.

However, some operations take time, such as:

- Fetching data from an API.
- Loading information from a server.
- Reading a file.
- Waiting for a timer.
- Saving information to a database.

If JavaScript waited for every time-consuming operation to finish before doing anything else, the application could become unresponsive.

**Asynchronous programming** allows JavaScript to start a time-consuming operation and continue executing other code while waiting for the result.

### Synchronous Example

```ts
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

### Asynchronous Example

```ts
console.log("First");

setTimeout(() => {
    console.log("Second");
}, 2000);

console.log("Third");
```

Output:

```text
First
Third
Second
```

The `setTimeout()` function schedules the callback to execute after approximately 2 seconds. JavaScript continues executing the remaining code instead of waiting.

---

## 2. What is a Promise?

A **Promise** is an object that represents the eventual completion or failure of an asynchronous operation.

Think of ordering food:

1. You place an order.
2. The restaurant starts preparing it.
3. Your order is either delivered or fails.

A Promise works in a similar way. It represents a result that may become available later.

A Promise has three possible states:

| State | Meaning |
|---|---|
| Pending | The operation is still running. |
| Fulfilled | The operation completed successfully. |
| Rejected | The operation failed. |

A Promise starts as pending and eventually becomes fulfilled or rejected. Once settled, its state cannot change again.

### Promise Syntax

```ts
const myPromise = new Promise<string>((resolve, reject) => {
    // Asynchronous operation
});
```

- `new Promise()` creates a Promise.
- `resolve()` indicates successful completion.
- `reject()` indicates failure.
- `string` specifies the type of the fulfilled value.

### Example

```ts
const orderPromise = new Promise<string>((resolve, reject) => {
    resolve("Your food is ready!");
});
```

Here, the Promise is immediately fulfilled with a string.

---

## 3. Handling Promises with `.then()`

The `.then()` method handles a successfully fulfilled Promise.

```ts
const orderPromise = new Promise<string>((resolve) => {
    resolve("Your order is ready!");
});

orderPromise.then((message) => {
    console.log(message);
});
```

Output:

```text
Your order is ready!
```

The callback inside `.then()` receives the fulfilled value.

### Promise Chaining

You can chain multiple `.then()` methods together.

```ts
Promise.resolve(10)
    .then((number) => {
        return number * 2;
    })
    .then((result) => {
        console.log(result);
    });
```

Output:

```text
20
```

Each `.then()` can return a value or another Promise. The next `.then()` receives the resolved result.

---

## 4. Handling Errors with `.catch()`

The `.catch()` method handles a rejected Promise.

```ts
const orderPromise = new Promise<string>((resolve, reject) => {
    reject(new Error("Order failed!"));
});

orderPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error: unknown) => {
        if (error instanceof Error) {
            console.log(error.message);
        }
    });
```

Output:

```text
Order failed!
```

Use `.catch()` when an asynchronous operation fails.

**Important:** A rejection can contain any JavaScript value. Using `unknown` encourages you to check the error before accessing its properties.

---

## 5. Using `.finally()`

The `.finally()` method executes after a Promise settles, whether it fulfilled or rejected.

```ts
Promise.resolve("Game loaded!")
    .then((message) => {
        console.log(message);
    })
    .catch((error: unknown) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Loading finished.");
    });
```

Output:

```text
Game loaded!
Loading finished.
```

Common uses include:

- Hiding loading indicators.
- Cleaning up resources.
- Resetting loading states.

---

## 6. What is Async/Await?

`async` and `await` provide a cleaner way to work with Promises.

They allow asynchronous code to look more like ordinary synchronous code.

### The `async` Keyword

Adding `async` before a function makes that function return a Promise.

```ts
async function getMessage(): Promise<string> {
    return "Hello, Blade!";
}

getMessage().then((message) => {
    console.log(message);
});
```

Even though the function returns a normal string, JavaScript automatically wraps that value in a fulfilled Promise.

### The `await` Keyword

The `await` keyword pauses execution inside an async function until a Promise settles.

```ts
function getPlayer(): Promise<string> {
    return Promise.resolve("Blade");
}

async function displayPlayer(): Promise<void> {
    const player = await getPlayer();

    console.log(player);
}

displayPlayer();
```

Output:

```text
Blade
```

**Remember:**

- `async` makes a function return a Promise.
- `await` waits for a Promise to settle and gives you its fulfilled value.
- `await` can normally be used inside an `async` function. JavaScript also supports top-level `await` in appropriate modules.

---

## 7. Error Handling with Async/Await

When using `async` and `await`, you can handle errors with `try...catch`.

```ts
async function loadGame(): Promise<void> {
    try {
        const message = await Promise.reject(
            new Error("Unable to load the game.")
        );

        console.log(message);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

loadGame();
```

Output:

```text
Unable to load the game.
```

You can also use `finally`:

```ts
async function loadPlayer(): Promise<void> {
    try {
        console.log("Loading player...");
    } catch (error: unknown) {
        console.log("Something went wrong.");
    } finally {
        console.log("Loading process finished.");
    }
}
```

---

## 8. Promise Utility Methods

JavaScript provides useful static methods for working with multiple Promises.

### Promise.all()

Waits for all Promises to fulfill.

```ts
const promise1 = Promise.resolve("Blade");
const promise2 = Promise.resolve("Crystal");
const promise3 = Promise.resolve("Knight");

const players = await Promise.all([
    promise1,
    promise2,
    promise3
]);
```

`Promise.all()` fulfills when every input Promise fulfills. If any input rejects, the returned Promise rejects.

### Promise.allSettled()

Waits for every Promise to settle, regardless of whether it fulfills or rejects.

```ts
const results = await Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject(new Error("Failed"))
]);

console.log(results);
```

It returns an array describing the outcome of each Promise.

### Promise.race()

Settles with the result of the first input Promise to settle.

```ts
const result = await Promise.race([
    Promise.resolve("First"),
    Promise.resolve("Second")
]);

console.log(result);
```

The first Promise to settle determines the result.

### Promise.any()

Fulfills with the first fulfilled input Promise. It rejects with an `AggregateError` if every input Promise rejects.

```ts
const result = await Promise.any([
    Promise.reject(new Error("Server 1 failed")),
    Promise.resolve("Server 2 connected"),
    Promise.resolve("Server 3 connected")
]);

console.log(result);
```

Output:

```text
Server 2 connected
```

---

## 9. Fetch API and Promises

The Fetch API is commonly used to request data from a server.

It returns a Promise that fulfills with a `Response` object when a response is received.

```ts
async function getUsers(): Promise<void> {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users: unknown = await response.json();

        console.log(users);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

getUsers();
```

Important points:

- `fetch()` returns a Promise.
- `response` contains information about the server response.
- `response.ok` tells you whether the HTTP status is in the successful range (200–299).
- `response.json()` also returns a Promise.
- `response.json()` does not automatically guarantee that the returned data matches a TypeScript interface.

**Important:** Fetch does not automatically reject for HTTP errors such as 404 or 500. Check `response.ok` yourself.

---

## 10. Important Concepts to Remember

| Concept | Purpose |
|---|---|
| Promise | Represents a future result. |
| Pending | Promise is still waiting. |
| Fulfilled | Promise completed successfully. |
| Rejected | Promise failed. |
| resolve() | Fulfills a Promise. |
| reject() | Rejects a Promise. |
| then() | Handles fulfillment. |
| catch() | Handles rejection. |
| finally() | Runs after settlement. |
| async | Makes a function return a Promise. |
| await | Waits for a Promise to settle. |
| Promise.all() | Waits for all Promises to fulfill. |
| Promise.allSettled() | Waits for all Promises to settle. |
| Promise.race() | Uses the first Promise to settle. |
| Promise.any() | Uses the first Promise to fulfill. |

### Final Takeaway

Promises and Async/Await are essential for modern application development.

You will use them frequently when:

- Fetching data from APIs.
- Communicating with a backend.
- Loading user information.
- Saving records to a database through an API.
- Handling asynchronous operations in React.

**For your ASP.NET Core + React learning path, this chapter is particularly important because your frontend will frequently communicate with backend APIs.**