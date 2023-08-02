import React from "react";
import style from "./Button.module.css";
const Button = (props) => {
  console.log(props);
  return (
    <button
      type={props.type || "submit"}
      onClick={props.onClick}
      className={style[props.className]}
    >
      {props.children}
    </button>
  );
};

export default Button;
