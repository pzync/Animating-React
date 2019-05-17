import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [toggleState, setToggleState] = useState(false);

  const fade = useSpring({
    // opacity: toggleState ? 1 : 0,
    color: toggleState ? `magenta` : `yellow`,
    // fontSize: toggleState ? `2em` : `10rem`
    transform: toggleState ? `translate3d(0,0,0)` : `translate3d(0, -40px, 0)`
  });

  return (
    <div>
      <animated.h1 style={fade}>Hello</animated.h1>
      <button onClick={() => setToggleState(!toggleState)}>Toggle</button>
    </div>
  );
};

export default Toggle;
