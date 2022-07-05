import React, { useState } from "react";
import Notification from "../components/Notification/Notification";
import ChangePsw from "../components/ChangePsw/ChangePsw";

const ChangePassword = () => {
  const [error, setError] = useState();

  const changeUserPassword = async (inputs) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/v1/users/change-password`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }

      return setError("Password has been changed");
    } catch (err) {
      return setError(err.message);
    }
  };

  return (
    <>
      {error && <Notification>{error}</Notification>}
      <ChangePsw handleSubmit={changeUserPassword}></ChangePsw>
    </>
  );
};

export default ChangePassword;
