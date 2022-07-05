import React from "react";
import * as S from "./Navigation.styles";
import Section from "../Section/Section";
import PropTypes from "prop-types";
import Logo from "../../Assets/logotrys.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const publicLinks = [
  { path: "/", name: "Home" },
  { path: "/login", name: "Login" },
  { path: "/register", name: "Register" },
];

const privateLinks = [
  { path: "/logs", name: "Logs" },
  { path: "/add", name: "Add a memory" },
  { path: "/change", name: "Change password" },
];

const Navigation = () => {
  const navigate = useNavigate();
  const links = localStorage.getItem("token") ? privateLinks : publicLinks;
  return (
    <S.Header>
      <Section>
        <S.Navigation>
          <S.Logo src={Logo} alt="text"></S.Logo>
          <S.NavBar>
            {links &&
              links.map((link, index) => (
                <Link to={link.path} key={index}>
                  {link.name}
                </Link>
              ))}
            {localStorage.getItem("token") && (
              <Button
                handleClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                Logout
              </Button>
            )}
          </S.NavBar>
        </S.Navigation>
      </Section>
    </S.Header>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Navigation;
