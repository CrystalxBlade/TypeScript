# DOM and Events in TypeScript

## 1. What is the DOM?

DOM stands for **Document Object Model**.

When a browser loads an HTML page, it creates a tree-like representation of the page. JavaScript and TypeScript can use this representation to access and modify HTML elements.

For example, consider this HTML:

```html
<h1>Hello, Blade!</h1>
<button>Click Me</button>
```

The browser creates a DOM representation of these elements.

Using TypeScript, we can:
- Select HTML elements.
- Change text and HTML content.
- Modify CSS classes and styles.
- Read input values.
- Create and remove elements.
- Respond to user interactions.

**In simple words:** The DOM allows TypeScript to interact with the HTML page.

---

## 2. Selecting HTML Elements

JavaScript provides several methods to select elements from the DOM.

### getElementById()

Selects an element using its unique ID.

```ts
const heading = document.getElementById("heading");
```

HTML:

```html
<h1 id="heading">Welcome!</h1>
```

### getElementsByClassName()

Selects all elements having a particular class.

```ts
const players = document.getElementsByClassName("player");
```

It returns an `HTMLCollection`, which contains matching elements.

### getElementsByTagName()

Selects elements using their HTML tag name.

```ts
const paragraphs = document.getElementsByTagName("p");
```

### querySelector()

Selects the first element matching a CSS selector.

```ts
const heading = document.querySelector("#heading");

const player = document.querySelector(".player");

const button = document.querySelector("button");
```

### querySelectorAll()

Selects all elements matching a CSS selector.

```ts
const players = document.querySelectorAll(".player");
```

It returns a `NodeList` of matching elements.

### Difference Between querySelector() and querySelectorAll()

| Method | Result |
|---|---|
| querySelector() | First matching element or null |
| querySelectorAll() | All matching elements |

---

## 3. TypeScript and DOM Element Types

TypeScript provides specific types for HTML elements.

Some commonly used types:

| Type | Represents |
|---|---|
| HTMLElement | General HTML element |
| HTMLHeadingElement | Heading elements |
| HTMLParagraphElement | Paragraph elements |
| HTMLButtonElement | Button elements |
| HTMLInputElement | Input elements |
| HTMLImageElement | Image elements |
| HTMLFormElement | Form elements |
| HTMLAnchorElement | Anchor elements |
| HTMLDivElement | Div elements |

Example:

```ts
const button = document.querySelector<HTMLButtonElement>("button");
```

The generic type tells TypeScript what kind of element we expect.

### Handling null

DOM selection methods can return `null` when an element cannot be found.

For example:

```ts
const heading = document.getElementById("heading");

if (heading !== null) {
    heading.textContent = "Hello, Crystal!";
}
```

The condition checks whether the element exists before accessing it.

You can also use:

```ts
if (heading) {
    heading.textContent = "Hello, Crystal!";
}
```

**Important:** Always account for `null` when selecting elements. Avoid assuming an element exists.

---

## 4. Changing HTML Content

TypeScript can change the content of selected elements.

### textContent

Changes or reads the text inside an element.

```ts
const heading = document.querySelector<HTMLHeadingElement>("h1");

if (heading) {
    heading.textContent = "Welcome to TypeScript!";
}
```

### innerHTML

Gets or sets the HTML markup inside an element.

```ts
const container = document.querySelector<HTMLDivElement>("#container");

if (container) {
    container.innerHTML = "<h2>Game Started!</h2>";
}
```

### Difference Between textContent and innerHTML

| textContent | innerHTML |
|---|---|
| Works with text content | Works with HTML markup |
| Does not interpret HTML tags | Parses HTML tags |
| Generally safer for plain text | Can introduce security risks |

**Security note:** Avoid inserting untrusted user input using `innerHTML`. It can create cross-site scripting (XSS) vulnerabilities. Prefer `textContent` for plain text.

---

## 5. Changing CSS Styles

You can modify the inline CSS styles of an element using its `style` property.

```ts
const heading = document.querySelector<HTMLHeadingElement>("h1");

if (heading) {
    heading.style.color = "blue";
    heading.style.fontSize = "30px";
    heading.style.backgroundColor = "lightgray";
}
```

Notice that CSS properties written with hyphens become camelCase in TypeScript.

Examples:

| CSS | TypeScript |
|---|---|
| background-color | backgroundColor |
| font-size | fontSize |
| border-radius | borderRadius |
| margin-top | marginTop |

---

## 6. Working with CSS Classes

The `classList` property provides methods to work with an element's CSS classes.

### add()

Adds a class.

```ts
element.classList.add("active");
```

### remove()

Removes a class.

```ts
element.classList.remove("active");
```

### toggle()

Adds a class if it is missing, or removes it if it already exists.

```ts
element.classList.toggle("active");
```

### contains()

Checks whether an element has a particular class.

```ts
const isActive = element.classList.contains("active");
```

These methods are useful for showing menus, changing themes, and creating interactive interfaces.

---

## 7. Reading Input Values

Input elements are commonly used to collect information from users.

```html
<input type="text" id="playerName">
```

TypeScript:

```ts
const input = document.querySelector<HTMLInputElement>("#playerName");

if (input) {
    console.log(input.value);
}
```

The `.value` property contains the current value entered by the user.

**Important:** The value of an HTML input is always a string, even when its input type is `number`.

You can convert it when necessary:

```ts
const age = Number(input.value);
```

---

## 8. Creating and Removing HTML Elements

TypeScript can dynamically create elements.

### createElement()

Creates a new HTML element.

```ts
const paragraph = document.createElement("p");

paragraph.textContent = "Hello, Blade!";
```

### appendChild()

Adds an element as the last child of another element.

```ts
const container = document.querySelector<HTMLDivElement>("#container");

if (container) {
    container.appendChild(paragraph);
}
```

### remove()

Removes an element from the DOM.

```ts
paragraph.remove();
```

These methods are useful for dynamically creating lists, cards, messages, and other interface elements.

---

# EVENTS

## 9. What are Events?

An **event** is an action or occurrence that happens in the browser.

Examples:

- Clicking a button.
- Typing inside an input.
- Moving the mouse.
- Submitting a form.
- Pressing a keyboard key.
- Loading a webpage.

TypeScript can listen for these events and execute code when they happen.

---

## 10. addEventListener()

The `addEventListener()` method attaches an event listener to an element.

Syntax:

```ts
element.addEventListener("eventName", callback);
```

Example:

```ts
const button = document.querySelector<HTMLButtonElement>("button");

if (button) {
    button.addEventListener("click", () => {
        console.log("Button clicked!");
    });
}
```

Here:
- `"click"` is the event name.
- The arrow function is the callback.
- The callback executes when the button is clicked.

---

## 11. Common DOM Events

| Event | Description |
|---|---|
| click | Element is clicked. |
| dblclick | Element is double-clicked. |
| mouseover | Pointer enters an element. |
| mouseout | Pointer leaves an element. |
| keydown | Keyboard key is pressed. |
| keyup | Keyboard key is released. |
| input | Input value changes. |
| change | A control's value is committed. |
| submit | A form is submitted. |
| focus | Element receives focus. |
| blur | Element loses focus. |
| load | Resource or page finishes loading. |

---

## 12. Event Object

When an event occurs, the browser provides an event object containing information about it.

```ts
button.addEventListener("click", (event) => {
    console.log(event);
});
```

The event object can provide information such as:
- Event type.
- Target element.
- Current target.
- Mouse coordinates for mouse events.
- Keyboard key information for keyboard events.

### target

The element where the event originally occurred.

### currentTarget

The element whose event listener is currently executing.

Both properties are useful when working with nested HTML elements.

---

## 13. Event Object Types

TypeScript provides specific event types.

| Event type | Used for |
|---|---|
| MouseEvent | Mouse interactions |
| KeyboardEvent | Keyboard interactions |
| InputEvent | Input changes |
| SubmitEvent | Form submission |
| FocusEvent | Focus changes |
| Event | General events |

Example:

```ts
button.addEventListener("click", (event: MouseEvent) => {
    console.log(event.clientX);
    console.log(event.clientY);
});
```

TypeScript can often infer the event type automatically from the selected element and event name.

---

## 14. Preventing Default Behaviour

Some browser events have default actions.

For example, submitting a form may reload or navigate the page.

The `preventDefault()` method stops that default action.

```ts
form.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    console.log("Form submitted!");
});
```

This is commonly used when handling forms with JavaScript or TypeScript.

---

## 15. Event Bubbling

Event bubbling means that an event triggered on a child element can propagate upward through its parent elements.

Example:

```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```

If both the button and the div have click listeners, clicking the button normally triggers the button listener first, then the parent listener.

The `stopPropagation()` method stops an event from continuing to propagate.

```ts
button.addEventListener("click", (event) => {
    event.stopPropagation();
});
```

---

## 16. Event Delegation

Event delegation means attaching one event listener to a parent element instead of attaching separate listeners to every child.

It uses event bubbling.

Example:

```ts
const list = document.querySelector<HTMLUListElement>("#playerList");

if (list) {
    list.addEventListener("click", (event) => {
        const target = event.target;

        if (target instanceof HTMLLIElement) {
            console.log(target.textContent);
        }
    });
}
```

This is particularly useful when elements are created dynamically.

---

## 17. Removing Event Listeners

You can remove an event listener using `removeEventListener()`.

The callback reference must be the same function that was originally registered.

```ts
function handleClick(): void {
    console.log("Button clicked!");
}

button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);
```

---

## 18. Important Concepts to Remember

| Concept | Purpose |
|---|---|
| DOM | Represents the webpage as objects. |
| document | Provides access to the webpage. |
| getElementById() | Selects an element by ID. |
| querySelector() | Selects the first matching element. |
| querySelectorAll() | Selects all matching elements. |
| textContent | Reads or changes text. |
| innerHTML | Reads or changes HTML markup. |
| style | Changes inline CSS styles. |
| classList | Manages CSS classes. |
| createElement() | Creates a new element. |
| appendChild() | Adds an element to another element. |
| addEventListener() | Listens for events. |
| preventDefault() | Prevents default browser behaviour. |
| stopPropagation() | Stops event propagation. |
| removeEventListener() | Removes an event listener. |

### Final Takeaway

DOM and Events are important foundations for frontend development.

You will use these concepts to:

- Interact with HTML elements.
- Read user input.
- Respond to clicks and keyboard actions.
- Build dynamic interfaces.
- Understand how frontend frameworks interact with the browser.

**React note:** React usually handles UI updates through components, state, props, and JSX rather than manually manipulating the DOM. Still, understanding DOM and browser events makes learning React much easier.