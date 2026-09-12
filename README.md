## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React code easy to write and read.

### 2. What is the difference between props and state?

Props pass data from parent to child. State stores data inside a component and can change.

### 3. What does the `useState` hook do, and where did you use it?

`useState` is used to store and change data. I used it to manage my technology stack.

### 4. What does the `useEffect` hook do, and why did you need it?

`useEffect` runs code after the component loads. I used it to load the JSON data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in the list.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

I used it to show a message when the stack is empty.

```tsx
{
  stack.length === 0 && <p>Your stack is empty.</p>;
}
```
