import React from "react";
import PropTypes from "prop-types";
import * as S from "./LogItem.styles";

const LogItem = ({ title, post, created_at }) => {
  // const [checked, setChecked] = useState(false);

  // const handleChange = (checkboxValue) => {
  //   setChecked(checkboxValue);
  //   onChecked(checkboxValue);
  // };

  return (
    <S.LogItem>
      <label>{title}</label>
      <S.ItemDate>{post}</S.ItemDate>
      <p>{created_at}</p>
    </S.LogItem>
  );
};

LogItem.propTypes = {
  title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};

export default LogItem;
