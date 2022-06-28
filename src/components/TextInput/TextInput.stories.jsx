import React from "react";
import TextInput from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
};

export const Primary = () => (
  <TextInput label="Label Name" type="text" placeholder="your@email.com" />
);
