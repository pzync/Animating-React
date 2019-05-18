import React from "react";
import { useSpring, animated } from "react-spring";

const Checkout = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100
  });

  return (
    <div
      className="checkout"
      style={{
        pointerEvents: isOpen ? "all" : "none"
      }}
    >
      <animated.div
        className="checkout-left"
        style={{
          transform: x.interpolate(x => `translate3d(${-x}%,0,0)`)
        }}
      />
      <animated.div
        className="checkout-right"
        style={{
          transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
        }}
      />
    </div>
  );
};

export default Checkout;
