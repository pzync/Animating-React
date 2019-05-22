import React, { useState, useRef } from "react";
import {
  animated,
  useTrail,
  useSpring,
  useChain,
  useTransition
} from "react-spring";

const items = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Boxes = () => {
  const [toggleState, setToggleState] = useState(false);

  const springRef = useRef();
  const { size } = useSpring({
    ref: springRef,
    from: { size: `20%` },
    to: { size: toggleState ? `100%` : `20%` }
  });

  const transitionRef = useRef();
  const transitions = useTransition(toggleState ? items : [], item => item, {
    ref: transitionRef,
    trail: 400 / items.length,
    from: {
      opacity: 0,
      transform: `scale(0.4)`
    },
    enter: {
      opacity: 1,
      transform: `scale(1)`
    },
    leave: {
      opacity: 0,
      transform: `scale(0.8)`
    }
  });

  // const trailRef = useRef();
  // const trails = useTrail(items.length, {
  //   ref: trailRef,
  //   from: {
  //     opacity: 0,
  //     transform: `scale(0.6)`
  //   },
  //   to: {
  //     opacity: toggleState ? 1 : 0,
  //     transform: toggleState ? `scale(1)` : `scale(0.6)`
  //   }
  // });

  useChain(
    toggleState ? [springRef, transitionRef] : [transitionRef, springRef]
  );

  return (
    <div className="full-height">
      <animated.div
        style={{ height: size, width: size }}
        className="boxes-grid-two"
        onClick={() => setToggleState(!toggleState)}
      >
        {transitions.map(({ item, key, props }) => (
          <animated.div key={key} className="box-two" style={props} />
        ))}
      </animated.div>
    </div>
  );
};

export default Boxes;
