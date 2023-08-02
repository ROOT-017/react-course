import React from "react";
import style from "./Overley.module.css";
import Button from "../Button";
import Card from "../Card";

const Overley = (props) => {
  return (
    <div className={style["overley-container"]} onClick={props.onConfrim}>
      <Card>
        <div className={style["overley__header"]}>{props.errType}</div>
        <div className={style["overley__body"]}>
          <p>{props.message}</p>
          <div className={style["overley__footer"]}>
            <Button onClick={props.onConfrim} className="overley__button">
              {props.directive}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Overley;
