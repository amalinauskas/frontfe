import React from "react";
import PropTypes from "prop-types";
import * as S from "./TextArea.styles";

const TextArea = ({ label, placeholder, value, handleChange }) => {
  return (
    <S.TextArea>
      <S.Label>{label}</S.Label>
      <S.Area
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </S.TextArea>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default TextArea;
