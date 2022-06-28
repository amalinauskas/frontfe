import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Notification from "../components/Notification/Notification";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const loginUser = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      return setError(err.message);
    }
  };

  return (
    <>
      {error && <Notification>{error}</Notification>}
      <LoginForm handleSubmit={loginUser} />
    </>
  );
};

export default Login;
