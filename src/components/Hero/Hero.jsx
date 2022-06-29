import React from "react";
import PropTypes from "prop-types";
import * as S from "./Hero.styles";
// import Section from "../Section/Section";

const Hero = ({ title, subtitle }) => {
  return (
    <S.Hero>
      <h1 className="title">{title}</h1>
      <S.SectionHero>
        {" "}
        <p className="subtitle">{subtitle}</p>
      </S.SectionHero>
    </S.Hero>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Hero;
