import React from "react";
import Link from "next/link";

import styled from "styled-components";

const StyledHeader = styled.ul`
  max-width: 700px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  background-color: yellow;
  li {
    list-style: none;
  }
`;

const Header = props => {
  return (
    <StyledHeader>
      <li>about</li>
      <li>posts</li>
      <li>contact</li>
    </StyledHeader>
  );
};

export default Header;
