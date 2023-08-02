import React, { useState } from "react";

import style from "./UserForm.module.css";
const initialInput = {
  username: "",
  age: 0,
  id: "",
};
const UserForm = (props) => {
  const [userInput, setUserInput] = useState(initialInput);

  const inputHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
        id: Math.random().toString(),
      };
    });
  };
  const clearInput = () => {
    setUserInput(initialInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput.username === "" || userInput.age < 0) {
      return props.setOverly(true);
    }

    props.setUsers((prevUsers) => {
      return [...prevUsers, userInput];
    });
    clearInput();
  };

  return (
    <form className={style["form"]} onSubmit={submitHandler}>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={userInput.username}
            onChange={(e) => inputHandler("username", e.target.value)}
            id="username"
          />
        </p>
        <p>
          <label htmlFor="age">Age(years)</label>
          <input
            type="number"
            id="age"
            value={userInput.age}
            onChange={(e) => inputHandler("age", e.target.value)}
          />
        </p>
      </div>
      <div className={style["submit-button"]}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
