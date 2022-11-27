import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ type }) => {
  const {
    isLogin,
    data: { userInfo },
  } = useSelector((state) => state.auth);

  const check = [...type].some((x) => x === userInfo?.role);

  console.log({ check });
  return isLogin && check ? <Outlet /> : <Navigate to={"/404"} />;
};

export default PrivateRoute;
