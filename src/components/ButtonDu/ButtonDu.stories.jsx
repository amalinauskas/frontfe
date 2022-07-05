import React from "react";
import ButtonDu from "./ButtonDu";

export default {
  title: "ButtonDu",
  component: ButtonDu,
};

export const Primary = () => (
  <ButtonDu onCLick={() => alert("ok")}>Button text</ButtonDu>
);
