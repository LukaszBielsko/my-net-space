import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  html {
      box-sizing: border-box;
      font-size: 10px;
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }
  body {
      font-family: sans-serif;
      padding: 0;
      margin: 0;
      font-size: 2rem;
      line-height: 1.5;
      background: #ebedee;
  }
`;

const Inner = styled.div`
  width: 90%;
  margin: auto;
  background-color: royalblue;
`;

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Inner>
        <div>content of whatever is clicked goes here</div>
        {children}
      </Inner>
    </>
  );
};

export default Page;
