import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./Toggle";
import Nav from "./Nav";
import Checkout from "./Checkout";
import Routes from "./Routes";
import ModalWrapper from "./Modal";
import Waypoints from "./Waypoint";

function App() {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <button
          className="menu-button"
          onClick={() => setModalOpen(!modalOpen)}
        >
          Menu
        </button>
        {/* <Nav status={navOpen} /> */}
      </header>
      <main>
        <ModalWrapper />
        {/* <Routes /> */}
        {/* <Toggle /> */}
        <Checkout isOpen={modalOpen} />
        <Waypoints />
      </main>
    </animated.div>
  );
}

export default App;
