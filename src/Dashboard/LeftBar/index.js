import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  LeftBarContainer,
  TitleLeftBar,
  Option,
  OptionsLeftBarContainer,
} from "./style";
import Logo from "../../images/Logo.jpeg";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%; /* Para garantir que o link ocupe todo o espaço */
`;

export function LeftBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LeftBarContainer isOpen={isOpen}>
      <TitleLeftBar>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "100%", height: "auto" }}
        />
      </TitleLeftBar>
      <OptionsLeftBarContainer className="menu-items">
        <StyledLink to="/" onClick={toggleMenu}>
          <Option>Início</Option>
        </StyledLink>
        <StyledLink to="/financeiro" onClick={toggleMenu}>
          <Option>Financeiro</Option>
        </StyledLink>
        <StyledLink to="/obras" onClick={toggleMenu}>
          <Option>Obras</Option>
        </StyledLink>
        <StyledLink to="/funcionarios" onClick={toggleMenu}>
          <Option>Funcionários</Option>
        </StyledLink>
        <StyledLink to="/prazos" onClick={toggleMenu}>
          <Option>Prazos</Option>
        </StyledLink>
      </OptionsLeftBarContainer>
    </LeftBarContainer>
  );
}
