import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Add from "./Pages/Add";
import Logs from "./Pages/Logs";

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
    path: "/dashoard",
    name: "Dashboard",
  },
  {
    path: "/logs",
    name: "Logs",
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
