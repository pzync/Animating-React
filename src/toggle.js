import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const shuffleArray = array => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const Toggle = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      text: "Hello World"
    },
    {
      id: 1,
      text: "Lorem Ipsum"
    },
    {
      id: 2,
      text: "Namaste India"
    },
    {
      id: 3,
      text: "Huzzah!"
    }
  ]);

  const transitions = useTransition(items, item => item.id, {
    from: { transform: `translateX(-40px)`, opacity: 0 },
    enter: { transform: `translateX(0px)`, opacity: 1 },
    leave: { transform: `translateX(40px)`, opacity: 0 },
    trail: 100 // this trail property adds acumulative delays
  });

  return (
    <div>
      {transitions.map(({ item, key, props }) => (
        <animated.h1 key={key} style={props}>
          {item.text}
        </animated.h1>
      ))}

      <button onClick={() => setItems({ id: 0, text: "Hello World" })}>
        Toggle
      </button>
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
