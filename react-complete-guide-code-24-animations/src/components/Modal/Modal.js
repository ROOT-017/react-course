import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};
const modal = (props) => {
  const cssClasses = [
    "Modal",
    props.show === "entering"
      ? "ModalOpen"
      : props.show === "exiting"
      ? "ModalClosed"
      : null,
  ];

  return (
    <CSSTransition
      classNames="fade-slide"
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
