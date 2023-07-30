import React from "react";
import { Outlet } from "react-router";

const AuthLayouts = () => {
  return (
    <div>
      AuthLayouts
      <hr />
      <Outlet />
    </div>
  );
};

export default AuthLayouts;
