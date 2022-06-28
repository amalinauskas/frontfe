import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import * as S from "./RegisterForm.styles";

const LoginForm = ({ handleSubmit }) => {
  const [registerValues, updateRegisterValues] = useState();

  return (
    <>
      <Hero title="Register" subtitle="Please fill your registration details" />
      <Section>
        <S.loginDiv>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              handleSubmit(registerValues);
            }}
          >
            <TextInput
              type="text"
              label="Name:"
              placeholder="Your Name"
              handleChange={(nameValue) =>
                updateRegisterValues({ ...registerValues, name: nameValue })
              }
            />
            <TextInput
              type="email"
              label="Email:"
              placeholder="your@email.com"
              handleChange={(emailValue) =>
                updateRegisterValues({ ...registerValues, email: emailValue })
              }
            />
            <TextInput
              type="password"
              label="Password:"
              placeholder="Your password"
              handleChange={(passwordValue) =>
                updateRegisterValues({
                  ...registerValues,
                  password: passwordValue,
                })
              }
            />
            <Button type="submit">Register</Button>
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
