import styled from "styled-components";

export const Header = styled.header`
  background: #ebebeb;
  font-family: "Special Elite", cursive;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  /*  */
  min-height: 5rem;

  @media (max-width: 40em) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  max-width: 2rem;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: blue; */
  /* width: 20%; */
  /*  */
  max-width: 5500px;
  gap: 1rem;
  @media (max-width: 40em) {
    flex-direction: column;
  }
  /*  */

  a {
    text-decoration: none;
    color: #7d7d7d;
    transition: 0.3s ease-in;
  }

  a:hover {
    color: #4d4d4d;
    text-decoration: underline;
  }
`;
