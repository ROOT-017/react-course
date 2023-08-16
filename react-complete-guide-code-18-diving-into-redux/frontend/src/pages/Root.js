import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import React from "react";
const RootLayout = () => {
  // const navigation = useNavigation();
  return (
    <div>
      <MainNavigation />
      <main>
        {/* {
          navigation.state ==='loading':
        } */}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
