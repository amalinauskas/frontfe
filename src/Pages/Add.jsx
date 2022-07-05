import React, { useState } from "react";
import Notification from "../components/Notification/Notification";
import AddLog from "../components/AddLog/AddLog";

const AddPost = () => {
  const [error, setError] = useState();

  const addUserPost = async (inputs) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/v1/logs`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();

      if (data.err) {
        return setError(data.err);
      }

      return setError("Post added successfuly");
    } catch (err) {
      return setError(err.message);
    }
  };

  return (
    <>
      {error && <Notification>{error}</Notification>}
      <AddLog handleSubmit={addUserPost}></AddLog>
    </>
  );
};

export default AddPost;
