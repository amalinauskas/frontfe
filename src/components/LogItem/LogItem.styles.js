import styled from "styled-components";

export const LogItem = styled.div`
  font-family: "Special Elite", cursive;
  padding: 1rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:not(:first-child) {
    border-top: 0.1rem solid #cccccc;
  }
  p {
    color: #969696;
  }

  .deleteDiv {
    margin-top: 1vh;
    display: flex;
    height: 3vh;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background: transparent;
    border: 0.05rem solid #969696;
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 0.5rem 0.5rem;
    font-family: "Special Elite", cursive;
    transition: 0.2s ease-in;
    color: #7d7d7d;

    &:hover {
      border: 0.05rem solid #ff0063;
      color: #ff0063;
    }
  }
`;

export const ItemDate = styled.span`
  margin-top: 1rem;

  color: grey;
  padding-left: 1rem;
  width: 100%;
`;
