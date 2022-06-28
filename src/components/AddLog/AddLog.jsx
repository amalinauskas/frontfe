import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import Section from "../Section/Section";
import Hero from "../Hero/Hero";
import * as S from "./AddLog.styles";

const AddLog = ({ handleSubmit }) => {
  const [LogValues, updateLogValues] = useState();

  return (
    <>
      <Hero title="Add memories" subtitle="Random inspirational text" />
      <Section>
        <S.loginDiv>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              handleSubmit(LogValues);
            }}
          >
            <TextInput
              type="text"
              label="Title:"
              placeholder="Add title to your memory"
              handleChange={(titleValue) =>
                updateLogValues({ ...LogValues, title: titleValue })
              }
            />
            <TextArea
              label="Memory:"
              placeholder="Let's see where it's going to take you ..."
              handleChange={(postValue) =>
                updateLogValues({ ...LogValues, post: postValue })
              }
            />

            <Button type="submit">Post</Button>
          </form>
        </S.loginDiv>
      </Section>
    </>
  );
};

AddLog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddLog;
