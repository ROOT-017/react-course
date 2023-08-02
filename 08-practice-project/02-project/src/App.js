import React, { useState } from "react";

import UserForm from "./components/UserForm";
import style from "./App.module.css";
import UserItem from "./components/UserItem";
import Overley from "./components/overley/Overley";

function App() {
  const [overley, setOverly] = useState(false);
  const [users, setUsers] = useState([]);

  if (overley) {
    return <Overley setOverly={setOverly} />;
  }
  const deleteHandler = (id) => {
    setUsers((prevUsers) => {
      const users = prevUsers.filter((user) => user.id !== id);
      return users;
    });
  };

  return (
    <div className={style["container"]}>
      <UserForm setOverly={setOverly} setUsers={setUsers} users={users} />
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
