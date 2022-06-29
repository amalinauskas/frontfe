import React from "react";
import ChangePsw from "./ChangePsw";

export default {
  title: "Views/ChangeForm",
  component: ChangePsw,
};

export const Primary = () => (
  <ChangePsw handleSubmit={(values) => console.log(values)} />
);
