import styled from "styled-components";

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  margin: 0.25rem 0;
  color: #4d4d4d;
`;

export const Area = styled.textarea`
  border: 0.15rem solid #cccccc;
  border-radius: 0.3rem;
  outline: none;
  background: transparent;
  width: calc(100% - 1.75rem);
  color: #4d4d4d;
  background: #f8f8f8;
  font-size: 1.2rem;
  height: 25vh;
  background-image: -webkit-linear-gradient(left, white 10px, transparent 10px),
    -webkit-linear-gradient(right, white 10px, transparent 10px),
    -webkit-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: -moz-linear-gradient(left, white 10px, transparent 10px),
    -moz-linear-gradient(right, white 10px, transparent 10px),
    -moz-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: -ms-linear-gradient(left, white 10px, transparent 10px),
    -ms-linear-gradient(right, white 10px, transparent 10px),
    -ms-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: -o-linear-gradient(left, white 10px, transparent 10px),
    -o-linear-gradient(right, white 10px, transparent 10px),
    -o-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: linear-gradient(left, white 10px, transparent 10px),
    linear-gradient(right, white 10px, transparent 10px),
    linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-size: 100% 100%, 100% 100%, 100% 31px;
  line-height: 31px;
`;

export const TextArea = styled.div`
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
