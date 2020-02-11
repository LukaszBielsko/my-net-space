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
      <Link href="/">
        <li>about</li>
      </Link>
      <Link href="/posts">
        <li>posts</li>
      </Link>
      <Link href="/contact">
        <li>contact</li>
      </Link>
    </StyledHeader>
  );
};

export default Header;
