import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "./../pages/PostIdPage";
import { privateRoutes, publicRoutes } from "../router/routes";
import Login from "../pages/Login";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  if(isLoading) {
    return <Loader/>
  }
  return isAuth ? (
    <Routes>

      <Route index element={<About />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Navigate replace to="/error" />} />

      {privateRoutes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
      <Route path="login" element={<Navigate replace to="/about" />} />
    </Routes>
  ) : (
    <Routes>

      <Route index element={<Login />} />
      <Route path="/error" element={<Error />} />

      {publicRoutes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
