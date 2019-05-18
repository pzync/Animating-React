import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Toggle = () => {
  const [toggleState, setToggleState] = useState(false);

  const transitions = useTransition(toggleState, null, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div style={{ position: "relative" }}>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.h1 key={key} style={props}>
            Hello
          </animated.h1>
        ) : (
          <animated.h1 key={key} style={props}>
            World
          </animated.h1>
        )
      )}

      <button onClick={() => setToggleState(!toggleState)}>Toggle</button>
    </div>
  );
};

export default Toggle;

// const [toggleState, setToggleState] = useState(false);

// const transitions = useTransition(toggleState, null, {
//   from: { opacity: 0, position: "absolute" },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 }
// });

// return (
//   <div style={{ position: "relative" }}>
//     {transitions.map(({ item, key, props }) =>
//       item ? (
//         <animated.h1 key={key} style={props}>
//           Hello
//         </animated.h1>
//       ) : (
//         <animated.h1 key={key} style={props}>
//           World
//         </animated.h1>
//       )
//     )}

//     <button onClick={() => setToggleState(!toggleState)}>Toggle</button>
//   </div>
// );
