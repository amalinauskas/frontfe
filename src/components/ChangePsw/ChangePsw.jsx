import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import * as S from "./ChangePsw.styles";

const LoginForm = ({ handleSubmit }) => {
  const [changeValues, updateChangeValues] = useState();

  return (
    <>
      <Hero title="Change your password" subtitle="Please fill your details" />
      <Section>
        <S.loginDiv>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              handleSubmit(changeValues);
            }}
          >
            <TextInput
              type="password"
              label="Old password:"
              placeholder="Your old password"
              handleChange={(changeValue) =>
                updateChangeValues({
                  ...changeValues,
                  oldPassword: changeValue,
                })
              }
            />
            <TextInput
              type="password"
              label="New password:"
              placeholder="Your new password"
              handleChange={(changeValue) =>
                updateChangeValues({
                  ...changeValues,
                  newPassword: changeValue,
                })
              }
            />
            <Button type="submit">Change password</Button>
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
