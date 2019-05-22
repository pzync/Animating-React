import React, { useState, useRef } from "react";
import { animated, useTrail, useSpring, useChain } from "react-spring";

const items = [0, 1, 2, 3, 4, 5];

const Boxes = () => {
  const [toggleState, setToggleState] = useState(false);

  const springRef = useRef();
  const { size } = useSpring({
    ref: springRef,
    from: { size: `20%` },
    to: { size: toggleState ? `100%` : `20%` }
  });

  const trailRef = useRef();
  const trails = useTrail(items.length, {
    ref: trailRef,
    from: {
      opacity: 0,
      transform: `scale(0.6)`
    },
    to: {
      opacity: toggleState ? 1 : 0,
      transform: toggleState ? `scale(1)` : `scale(0.6)`
    }
  });

  useChain(toggleState ? [springRef, trailRef] : [trailRef, springRef]);

  return (
    <div className="full-height">
      <animated.div
        style={{ height: size, width: size }}
        className="boxes-grid-two"
        onClick={() => setToggleState(!toggleState)}
      >
        {trails.map(animation => (
          <animated.div
            key={animation.id}
            className="box-two"
            style={animation}
          />
        ))}
      </animated.div>
    </div>
  );
};

export default Boxes;
