import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import * as S from "./LoginForm.styles";

const LoginForm = ({ handleSubmit }) => {
  const [loginValues, updateLoginValues] = useState();

  return (
    <>
      <Hero title="Login" subtitle="Please fill your login details" />
      <Section>
        <S.loginDiv>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              handleSubmit(loginValues);
            }}
          >
            <TextInput
              type="email"
              label="Email:"
              placeholder="your@email.com"
              handleChange={(emailValue) =>
                updateLoginValues({ ...loginValues, email: emailValue })
              }
            />
            <TextInput
              type="password"
              label="Password:"
              placeholder="password"
              handleChange={(passwordValue) =>
                updateLoginValues({ ...loginValues, password: passwordValue })
              }
            />
            <Button type="submit">Login</Button>
          </form>
        </S.loginDiv>
      </Section>
    </>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
