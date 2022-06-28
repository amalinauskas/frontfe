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
`;

export const ItemDate = styled.span`
  margin-top: 1rem;

  color: grey;
  padding-left: 1rem;
  width: 100%;
`;

// export const Checkbox = styled.input`
//   margin-right: 1rem;
// `;
