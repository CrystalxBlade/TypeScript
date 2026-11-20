# APIs and JSON in TypeScript

## 1. What is an API?

API stands for **Application Programming Interface**.

An API allows two applications or systems to communicate with each other.

For example, imagine you're building a music application similar to Spotify.

Your application might need:

- Song information.
- Artist names.
- Album covers.
- User playlists.
- Search results.

You don't necessarily store all this information inside your application. Instead, your application can request the information from a backend server through an API.

### How API Communication Works

Imagine your React application communicates with an ASP.NET Core Web API.

```text
React Application
       |
       | HTTP Request
       v
ASP.NET Core Web API
       |
       | Processes Request
       v
Database
       |
       | Returns Data
       v
ASP.NET Core Web API
       |
       | HTTP Response
       v
React Application
```

The frontend sends a request, the backend processes it, and the backend returns a response.

---

## 2. What is a REST API?

REST stands for **Representational State Transfer**.

A REST API is a commonly used approach for building web APIs that communicate through HTTP.

REST APIs commonly use HTTP methods to perform operations on resources.

For example, imagine a backend API managing players.

| HTTP Method | Purpose | Example |
|---|---|---|
| GET | Retrieve data | Get players |
| POST | Create data | Create a player |
| PUT | Replace data | Replace a player |
| PATCH | Update part of data | Update player's level |
| DELETE | Delete data | Delete a player |

Example endpoints:

```text
GET     /api/players
GET     /api/players/1
POST    /api/players
PUT     /api/players/1
PATCH   /api/players/1
DELETE  /api/players/1
```

An endpoint is a specific URL through which an API provides access to a resource or operation.

---

## 3. What is JSON?

JSON stands for **JavaScript Object Notation**.

JSON is a lightweight format used to store and exchange data.

It is commonly used by APIs to send information between frontend and backend applications.

### Example JSON

```json
{
    "id": 1,
    "name": "Blade",
    "level": 25,
    "isActive": true
}
```

This JSON represents a player.

### JSON Data Types

| JSON Type | Example |
|---|---|
| String | "Blade" |
| Number | 25 |
| Boolean | true |
| Array | [1, 2, 3] |
| Object | {"name": "Blade"} |
| Null | null |

JSON does not support:

- Functions.
- `undefined`.
- Symbols.
- Comments.

---

## 4. JSON vs TypeScript Objects

JSON is a data format, while TypeScript objects are actual objects used in your code.

JSON:

```json
{
    "name": "Blade",
    "level": 25
}
```

TypeScript:

```ts
const player = {
    name: "Blade",
    level: 25
};
```

They look similar, but they serve different purposes.

JSON is commonly transmitted between applications, while TypeScript objects are used to work with data in your program.

---

## 5. JSON.stringify()

The `JSON.stringify()` method converts a JavaScript value into a JSON string.

```ts
const player = {
    name: "Blade",
    level: 25
};

const jsonData = JSON.stringify(player);

console.log(jsonData);
```

Output:

```text
{"name":"Blade","level":25}
```

### Formatting JSON

You can use additional arguments to format the JSON string.

```ts
const jsonData = JSON.stringify(player, null, 2);

console.log(jsonData);
```

Output:

```json
{
  "name": "Blade",
  "level": 25
}
```

The third argument controls indentation.

---

## 6. JSON.parse()

The `JSON.parse()` method converts a JSON string into a JavaScript value.

```ts
const jsonData = '{"name":"Blade","level":25}';

const player = JSON.parse(jsonData);

console.log(player.name);
console.log(player.level);
```

Output:

```text
Blade
25
```

### Important TypeScript Note

`JSON.parse()` does not validate the structure of the JSON data.

It can parse valid JSON even if the data does not match the interface you expected.

Always be careful when working with data received from external sources.

---

## 7. What is the Fetch API?

The Fetch API allows JavaScript and TypeScript to make HTTP requests.

It is commonly used to communicate with web APIs.

### Basic Syntax

```ts
const response = await fetch("https://example.com/api");
```

The `fetch()` function returns a Promise that fulfills with a `Response` object when a response is received.

### Important Properties of Response

| Property | Purpose |
|---|---|
| status | HTTP status code |
| ok | Indicates whether the status is in the 200–299 range |
| headers | Contains response headers |
| url | URL of the response |
| body | Response body stream |

Example:

```ts
const response = await fetch("https://example.com/api");

console.log(response.status);
console.log(response.ok);
console.log(response.url);
```

---

## 8. Fetching JSON Data

Many APIs return JSON.

You can use `response.json()` to read the response body and parse it as JSON.

```ts
const response = await fetch("https://jsonplaceholder.typicode.com/users");

const data = await response.json();

console.log(data);
```

### How It Works

1. `fetch()` sends the request.
2. The server sends a response.
3. `response.json()` reads the response body and parses the JSON.
4. The parsed data becomes available.

**Important:** `response.json()` is asynchronous and returns a Promise.

---

## 9. Checking HTTP Errors

Fetch does not automatically reject its Promise when the server returns HTTP error statuses such as 404 or 500.

For example:

- 200: OK.
- 201: Created.
- 204: No Content.
- 400: Bad Request.
- 401: Unauthorized.
- 403: Forbidden.
- 404: Not Found.
- 500: Internal Server Error.

You can check `response.ok` to determine whether the HTTP status indicates success.

```ts
const response = await fetch("https://example.com/api");

if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
}
```

---

## 10. Handling API Errors

API requests can fail for several reasons:

- Internet connection problems.
- Server unavailable.
- Invalid request.
- Authentication failure.
- Missing resource.
- Server-side error.

Use `try...catch` to handle errors.

```ts
async function getData(): Promise<void> {
    try {
        const response = await fetch("https://example.com/api");

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data: unknown = await response.json();

        console.log(data);

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
```

---

## 11. Typing API Responses

TypeScript allows you to define interfaces describing the expected structure of API data.

Example:

```ts
interface Player {
    id: number;
    name: string;
    level: number;
}
```

When you receive player data, you can use this interface to describe the data you expect.

```ts
const player: Player = {
    id: 1,
    name: "Blade",
    level: 25
};
```

However, TypeScript interfaces do not validate data received from an API at runtime.

They only provide compile-time type checking.

---

## 12. Why API Data Should Be Treated Carefully

When you receive external JSON, TypeScript cannot automatically guarantee that it matches your interface.

For example, an API might return:

```json
{
    "id": "wrong",
    "name": "Blade",
    "level": "twenty five"
}
```

Even if your interface expects numbers, the API might return strings.

TypeScript does not automatically fix or reject this data.

### Safer Approach

Treat the parsed data as `unknown` until you have verified its structure.

```ts
const data: unknown = await response.json();
```

Then validate the data using checks, such as:

- `typeof`.
- `Array.isArray()`.
- Property checks.
- Custom type guards.

This is especially important when working with APIs you do not control.

---

## 13. Sending Data Using POST

The Fetch API can also send data to a server.

```ts
const player = {
    name: "Blade",
    level: 25
};

const response = await fetch("https://example.com/api/players", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(player)
});
```

### Explanation

| Property | Purpose |
|---|---|
| method | Specifies the HTTP method |
| headers | Provides request metadata |
| Content-Type | Indicates the format of the request body |
| body | Contains the data being sent |

`JSON.stringify()` converts the object into a JSON string.

---

## 14. HTTP Headers

Headers provide additional information about HTTP requests and responses.

Example:

```ts
const response = await fetch("https://example.com/api", {
    headers: {
        "Accept": "application/json"
    }
});
```

Common headers:

| Header | Purpose |
|---|---|
| Content-Type | Describes the request or response body format |
| Accept | Indicates acceptable response formats |
| Authorization | Contains authentication credentials or tokens when required |

---

## 15. API Query Parameters

Query parameters allow you to pass additional information through a URL.

Example:

```text
https://example.com/api/players?level=25&active=true
```

Here:

- `level=25` is a query parameter.
- `active=true` is another query parameter.

You can use `URLSearchParams` to construct query parameters.

```ts
const params = new URLSearchParams({
    level: "25",
    active: "true"
});

const url = `https://example.com/api/players?${params}`;

console.log(url);
```

---

## 16. Working with API Arrays

Many APIs return arrays of objects.

Example:

```json
[
    {
        "id": 1,
        "name": "Blade"
    },
    {
        "id": 2,
        "name": "Crystal"
    }
]
```

You can use array methods to work with the data.

```ts
const players = [
    { id: 1, name: "Blade" },
    { id: 2, name: "Crystal" }
];

players.forEach((player) => {
    console.log(player.name);
});
```

You can use methods such as:

- `forEach()`.
- `map()`.
- `filter()`.
- `find()`.

---

## 17. Important Concepts to Remember

| Concept | Purpose |
|---|---|
| API | Allows applications to communicate. |
| REST API | Common HTTP-based API design approach. |
| JSON | Data exchange format. |
| JSON.stringify() | Converts a value into a JSON string. |
| JSON.parse() | Parses JSON into a JavaScript value. |
| Fetch API | Sends HTTP requests. |
| Response | Represents the HTTP response. |
| response.json() | Reads and parses a JSON response body. |
| response.ok | Checks for successful HTTP status. |
| HTTP methods | Define the type of operation. |
| HTTP headers | Provide request or response metadata. |
| Query parameters | Pass additional URL information. |
| Interfaces | Describe expected data structure. |
| unknown | Safely represents data before validation. |

### Final Takeaway

APIs allow your application to communicate with backend systems.

JSON is the common format used to exchange data, and the Fetch API allows your TypeScript application to send HTTP requests and receive responses.

These concepts are essential for building:

- React applications.
- ASP.NET Core Web API applications.
- Full-stack applications.
- Authentication systems.
- Dashboard applications.
- Chat applications.
- Music applications.