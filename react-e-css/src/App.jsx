import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  let redTitle = true;
  return (
    <>
      <h1>Hello, Vite + React!</h1>
      <MyComponent />
      <p style={{ color: "blue" }}>This is a paragraph.</p>
      <h3 className={redTitle ? "red-title" : "title"}>My Title</h3>
      <Title />
    </>
  );
}

export default App;
