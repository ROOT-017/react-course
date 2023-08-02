import React, { useState } from "react";

import UserForm from "./components/UserForm";
import style from "./App.module.css";
import UserItem from "./components/UserItem";
import Overley from "./components/ui/overley/Overley";

function App() {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState();

  const deleteHandler = (id) => {
    setUsers((prevUsers) => {
      const users = prevUsers.filter((user) => user.id !== id);
      return users;
    });
  };

  const cancelOverly = (e) => {
    e.stopPropagation();
    setErr();
  };
  return (
    <div className={style["container"]}>
      {err && (
        <Overley
          message={err.message}
          errType={err.errType}
          directive={err.directive}
          setErr={setErr}
          onConfrim={cancelOverly}
        />
      )}
      <UserForm setErr={setErr} setUsers={setUsers} users={users} />

      <div className={style["user-list"]}>
        {users.length > 0
          ? users.map((user) => (
              <UserItem user={user} key={user.id} onDelete={deleteHandler} />
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
