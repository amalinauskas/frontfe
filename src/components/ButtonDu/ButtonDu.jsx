import React from "react";
import PropTypes from "prop-types";
import * as S from "./ButtonDu.styles";

const ButtonDu = ({ type, children, handleSubmit, id }) => {
  return (
    <S.ButtonDu type={type} onClick={handleSubmit} id={id} value={id}>
      {children}
    </S.ButtonDu>
  );
};

ButtonDu.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  children: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
};

ButtonDu.defaultProps = {
  type: "submit",
};

export default ButtonDu;
