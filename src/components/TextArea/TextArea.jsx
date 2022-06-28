import React from "react";
import PropTypes from "prop-types";
import * as S from "./TextArea.styles";

const TextArea = ({ label, placeholder, value, handleChange }) => {
  return (
    <S.TextArea>
      <S.Label>{label}</S.Label>
      <S.Area
        id={label}
        // type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </S.TextArea>
  );
};

TextArea.propTypes = {
  //   type: PropTypes.oneOf(["text", "email", "password"]),
  label: PropTypes.string.isRequired,
  //   placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

// TextArea.defaultProps = {
//   type: "text",
// };

export default TextArea;
