import React from "react";
import { animated, useSpring } from "react-spring";

const Nav = ({ status: navOpen }) => {
  // in levelUpTuts' Video #7 for this, the navAnimation variable resides in App.js
  // that's not good separation of concerns. it should reside in Nav.js as it controls the
  // style+animation of Nav component

  // App.js should pass NavOpen status via props to Nav component. and NOT it's animation style
  // prop the way this tutorial does

  const navAnimation = useSpring({
    transform: navOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(100%,0,0) scale(0.4)`,
    transformOrigin: `100% 0 0` /*this is totally allowed as it is just a styling property*/
  });

  return (
    <animated.div className="nav-wrapper" style={navAnimation}>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Store</a>
        <a href="#">Tutorials</a>
      </nav>
    </animated.div>
  );
};

export default Nav;
