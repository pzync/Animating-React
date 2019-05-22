import React, { useState } from "react";
import { animated, useTrail } from "react-spring";

const items = [0, 1, 2, 3, 4];

const Boxes = () => {
  const [toggleState, setToggleState] = useState(false);

  const trails = useTrail(items.length, {
    opacity: toggleState ? 1 : 0,
    transform: toggleState ? `scale(1)` : `scale(0.6)`
  });

  return (
    <div className="boxes-grid">
      <button onClick={() => setToggleState(!toggleState)}>Toggle</button>
      {trails.map(animation => (
        <animated.div key={animation.id} className="box" style={animation} />
      ))}
    </div>
  );
};

export default Boxes;
