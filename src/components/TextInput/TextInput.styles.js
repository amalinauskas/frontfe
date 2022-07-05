import styled from "styled-components";

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  margin: 0.25rem 0;
  color: #4d4d4d;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: calc(100% - 1.75rem);
  color: #4d4d4d;
`;

export const TextInput = styled.div`
  width: calc(100% - 2rem);

  font-family: "Special Elite", cursive;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
