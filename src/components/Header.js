import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CharacterCreatorHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
`;

const StyledWrapper = styled.section`
  background-color: orange;
`;

function Header() {
  return (
    <StyledWrapper>
      <CharacterCreatorHeader>Character Creator</CharacterCreatorHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </StyledWrapper>
  );
}

export default Header;