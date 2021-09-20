import styled, { createGlobalStyle, css } from "styled-components";
import { _reset } from "./_reset";
import v from "./_variables";
import { _fonts } from "./_fonts";

const includes = css`
  ${_reset}
  ${_fonts}
`;

export const GlobalStyle = createGlobalStyle`
  ${includes}
  * {
    box-sizing: border-box;
  }
  
  html{
    background-color: ${v.backgroundColor};
  }
  body {
    font-family: ${v.primaryFont};
    font-size: 16px;
    overflow-x: hidden;
  }

  .main-nav{
    text-decoration: none;
    color: ${v.textColorSecondary};
    cursor: pointer;
    font-weight: bold;
  }

  .main-nav:hover {
    border-bottom: 1px solid ${v.textColorSecondary};
    cursor: pointer;
  }
  
`;
