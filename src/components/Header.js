import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CharacterCreatorHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
`;

const CharacterCreatorList = styled.ul`
  font-size: 18px;
  list-style: none;
  text-align: center;
  color: white;
  margin: 0;
  padding: 0;
  a:link, a:visited {
    color: white;
  }
`;

const StyledWrapper = styled.section`
  background-color: darkBlue
`;

function Header() {
  return (
    <StyledWrapper>
      <CharacterCreatorHeader>Dungeons and Dragons 5th Edition Character Creator</CharacterCreatorHeader>
      <CharacterCreatorList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
      </CharacterCreatorList>
    </StyledWrapper>
  );
}

export default Header;