import React from "react";
import style from "./Overley.module.css";

const Overley = (props) => {
  const cancelOverly = (e) => {
    e.stopPropagation();
    props.setOverly(false);
  };
  return (
    <div className={style["overley-container"]}>
      <div className={style["overley__content"]}>
        <div className={style["overley__header"]}>Invalid Input</div>
        <div className={style["overley__body"]}>
          <p>Please enter a name and a valid age (&gt; 0)</p>
          <div className={style["overley__button"]}>
            <button onClick={cancelOverly}>Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overley;
