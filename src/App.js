import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./Toggle";
import Nav from "./Nav";

function App() {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const [navOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: navOpen ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="menu-button" onClick={() => setNavOpen(!navOpen)}>
          Menu
        </button>
      </header>
      <Nav style={navAnimation} />
      <main>
        <Toggle />
      </main>
    </animated.div>
  );
}

export default App;
