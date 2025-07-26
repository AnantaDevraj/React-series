<<<<<<< HEAD
<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
=======# React Series Projects

## 📘 Learnings

### 🟢 Day 1:
- `React` is a **library**, not a framework — so there are no strict naming rules.
- Always start component or function names with a **Capital Letter**.
- File names for components should be in `.jsx` format.
- In `App.jsx`, only **one root element** can be returned — wrap elements with `<> </>` (React Fragment).
- React uses its own **Virtual DOM (ReactDOM)** for efficient UI updates.
- React apps are **SPA (Single Page Applications)**, meaning everything runs inside a single `index.html` under the `#root` div.

---

### 🟢 Day 3:
- Installed and configured **Tailwind CSS**.
- Understood how **React components** work and how to create them.
- Learned about **props** — used to pass data between components.
- Created and reused **multiple components** for modular development.

---

### 🔐 Password Generator Project:
- **`useCallback()`**: Used to memoize functions for better performance.
- **`useEffect()`**: Triggered on component mount and when dependencies change.
- **`useRef()`**: Accessed DOM elements directly (e.g., copying password).

---

### 💱 Currency Converter Project:
- Built a **custom hook** to fetch and convert currency data in real time.
- Used:
  - **`useId()`** for generating unique IDs to bind elements.
  - **API handling** and logic separation via reusable hooks.
  - Conversion of values between multiple currencies dynamically.

---

### 💱 Mini-Context Project:
- **Context API**: Built-in tool in React for global state management (avoids prop drilling).
- How to use:
  - `createContext()` → to create context
  - `Context.Provider` → to wrap and share data
  - `useContext()` → to consume data inside child components
- **Redux** is a standalone state management library used for large-scale apps.
- Redux in React is used via the `react-redux` library.
- **Redux Toolkit (RTK)** is the modern standard for simplified Redux configuration.
- **Context vs Redux**:
  - Context is ideal for **small to medium** apps.
  - Redux/RTK is better for **large, complex** apps.
  - Context is simpler, but Redux offers more control in complex scenarios.

---

## 📄 About
This repository contains beginner to intermediate level React projects, demonstrating core concepts, Tailwind CSS, and state management using Context API and custom hooks.

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
- Mini Context API Project

---

## 🚀 How to Run
```bash
npm install
npm run dev

# React Series Projects
>>>>>>> 48796a5 (Understand the basic of Context and RTK)

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

<<<<<<< HEAD
# Learning with currency-convertor project:
1. how to create a custom hook.
2. use of "useId , api handeling , data retriving ".
3. useId : creates unique id that used for binding different components or elements in same page.
4. create a custom hook for fetching the API for converting at real time from one to another currency.
>>>>>>> a8c1430dae07b737221aa88d5857fc92ad9a7642
=======
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
>>>>>>> 48796a5 (Understand the basic of Context and RTK)
