import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [toggleState, setToggleState] = useState(false);

  const fade = useSpring({
    opacity: toggleState ? 1 : 0
  });

  return (
    <div>
      <animated.h1 style={fade}>Hello</animated.h1>
      <button onClick={() => setToggleState(!toggleState)}>Toggle</button>
    </div>
  );
};

export default Toggle;
