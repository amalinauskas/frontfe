import React from "react";
import AddLog from "./AddLog";

export default {
  title: "Views/AddLog",
  component: AddLog,
};

export const Primary = () => (
  <AddLog handleSubmit={(values) => console.log(values)} />
);
