# React Series Projects

## 📘 Learnings

### 🟢 Day 1:
- `React` is a library not framework , so there is not so naming restriction.
- Always start the name of any component or function with a **Capital letter**.
- File names for components should be in `.jsx` format.
- In `App.jsx`, only one root element can be returned — so wrap all elements inside `<> </>` (React Fragment).
- React uses its own **Virtual DOM (ReactDOM)** to manage updates efficiently.
- React apps are **SPA (Single Page Applications)**, meaning everything runs inside a single `index.html` file under the `#root` div.

---

### 🟢 Day 3:
- Installed and used **Tailwind CSS**.
- Understood **what React components** are and how to create them.
- Learned about **props** — how to pass data between components.
- Created and used multiple reusable components.

---

### 🔐 Password Generator Project:
- **`useCallback()`**: Used to optimize performance by memoizing functions when dependencies change.
- **`useEffect()`**: Runs on initial render and whenever dependencies change.
- **`useRef()`**: Used to reference DOM elements directly (e.g., for copying password).

---

### 💱 Currency Converter Project:
- Created a **custom hook** to fetch and convert currency data.
- Used:
  - **`useId()`** for generating unique IDs.
  - **API handling** and real-time currency conversion logic.
  - Clean separation of logic using reusable hooks.

---

### 💱 mini-context project:
- Context API is a built-in React tool for managing global state and avoiding prop drilling across components.
- To use it: create a context using createContext(), wrap components with the Context.Provider, and access values using the useContext() hook.
- Redux is a standalone state management library often used in React apps for complex state logic.
- In React, Redux is integrated using the react-redux package, and the modern standard is to use Redux Toolkit (RTK) for simplified configuration.
- Context API is ideal for small to medium apps, while Redux is better for large-scale applications with    deeply nested state logic.
- Both Context API and Redux allow centralized state sharing, but Context is more lightweight and easier to implement for simple use cases.  
---

## 📄 About
This repository contains beginner-level to intermediate React practice projects with Tailwind CSS and custom hooks.

---

## 🛠️ Tech Stack
- **React**
- **Tailwind CSS**
- **JavaScript**
- **HTML / CSS**

---

## 📦 Projects Included
- Basic DOM Manipulation
- Password Generator
- Currency Converter
- React Components with Props
- Tailwind Styling

---

## 🚀 How to Run
```bash
npm install
npm run dev
