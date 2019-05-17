import React from "react";
import { useSpring, animated } from "react-spring";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="menu-button">Menu</button>
      </header>
    </animated.div>
  );
}

export default App;
