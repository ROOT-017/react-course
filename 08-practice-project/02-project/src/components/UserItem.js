import React from "react";
import style from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <div
      className={style["user-item"]}
      onClick={() => {
        props.onDelete(props.user.id);
      }}
    >
      {props.user.username} {props.user.age} years old
    </div>
  );
};

export default UserItem;
