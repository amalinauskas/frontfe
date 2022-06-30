import React from "react";
import PropTypes from "prop-types";
import * as S from "./LogsList.styles";
import LogItem from "../LogItem/LogItem";

const LogsList = ({ allPosts }) => {
  return (
    <S.LogsList>
      {allPosts &&
        allPosts.map((x) => (
          <LogItem
            key={x.title}
            title={x.title}
            post={x.post}
            created_at={x.created_at.slice(0, -14)}
          />
        ))}
    </S.LogsList>
  );
};

LogsList.propTypes = {
  allPosts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      post: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LogsList;
