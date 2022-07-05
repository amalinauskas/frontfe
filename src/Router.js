import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Add from "./Pages/Add";
import Logs from "./Pages/Logs";
import ChangePassword from "./Pages/Change";

const token = localStorage.getItem("token");

const publicLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/register",
    name: "Register",
  },
];

const privateLinks = [
  {
    path: "/add",
    name: "Add",
  },
  {
    path: "/logs",
    name: "Logs",
  },
  {
    path: "/change",
    name: "Change password",
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation links={token ? privateLinks : publicLinks} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/logs" element={<Logs />} />
        <Route exact path="/change" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
