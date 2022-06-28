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
  /* padding: 0.50rem 1.5rem; */
  font-family: "Special Elite", cursive;
  /* border-top:0.01rem solid black; */
  /* box-shadow: 1.5px 2px 2px 0px rgba(0,0,0,0.3); */
  /* box-sizing:border-box; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
