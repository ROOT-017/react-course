import React from "react";
import { useSelector } from "react-redux";

import Auth from "./components/Auth";
import Header from "./components/Header";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfile />}
      <Counter />;
    </>
  );
}

export default App;
