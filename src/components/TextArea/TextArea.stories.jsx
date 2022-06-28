import React from "react";
import TextArea from "./TextArea";

export default {
  title: "Components/TextArea",
  component: TextArea,
};

export const Primary = () => (
  <TextArea label="Area name:" placeholder="Your text ..." />
);
