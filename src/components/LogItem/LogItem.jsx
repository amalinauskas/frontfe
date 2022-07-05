import React from "react";
import PropTypes from "prop-types";
import * as S from "./LogItem.styles";

const LogItem = ({ title, post, created_at, children }) => {
  return (
    <S.LogItem>
      <label>{title}</label>
      <S.ItemDate>{post}</S.ItemDate>
      <div className="deleteDiv">
        <p>{created_at}</p>
        {children}
      </div>
    </S.LogItem>
  );
};

LogItem.propTypes = {
  title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};

export default LogItem;
