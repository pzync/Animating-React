import React from "react";
import { useGesture } from "react-with-gesture";
import { animated, useSpring } from "react-spring";

const Gestures = () => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const bind = useGesture(({ down, delta }) => {
    down
      ? set({ x: delta[0] })
      : delta[0] > 200
      ? set({ x: 200 })
      : delta[0] < -200
      ? set({ x: -200 })
      : set({ x: 0 });
  });

  return (
    <animated.div
      {...bind()}
      className="box"
      style={{
        // opacity: x.interpolate({
        //   map: Math.abs,
        //   range: [0, 300],
        //   output: [1, 0]
        // }),
        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
      }}
    />
  );
};

export default Gestures;
