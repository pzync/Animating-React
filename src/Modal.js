import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

const Modal = ({ closeModal, animation }) => {
  return (
    <div className="modal">
      <animated.div className="modal-card" style={animation}>
        <h1>Modal</h1>
        <button onClick={closeModal}>Close</button>
      </animated.div>
    </div>
  );
};

const ModalWrapper = () => {
  const [modalOn, setModalOn] = useState(false);

  const transition = useTransition(modalOn, null, {
    from: { opacity: 0, transform: `translate3d(0, -40px, 0)` },
    enter: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    leave: { opacity: 0, transform: `translate3d(0, -40px, 0)` }
  });

  return (
    <div>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <Modal
              key={key}
              animation={props}
              closeModal={() => setModalOn(false)}
            />
          )
      )}
      <button onClick={() => setModalOn(!modalOn)}>Open</button>
    </div>
  );
};

export default ModalWrapper;
