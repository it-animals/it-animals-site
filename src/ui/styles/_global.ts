import styled, { createGlobalStyle, css } from "styled-components";
import { _reset } from "./_reset";
import v from "./_variables";
import { _fonts } from "./_fonts";
import { _headings } from "./elements/_headings";

const includes = css`
  ${_reset}
  ${_fonts}
  ${_headings}
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    line-height: 24px;
    position: relative;
  }

  ${includes}
  
  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${v.backgroundColor};
  }

  body {
    font-family: ${v.primaryFont};
    overflow-x: hidden;
  }

  p {
    margin-bottom: 1em;
    font-size: 18px;
    line-height: 26px;
  }



`;
