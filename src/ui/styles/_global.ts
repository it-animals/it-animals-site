import styled, { createGlobalStyle, css } from "styled-components";
import { _reset } from "./_reset";
import { styleVariables } from "./_variables";

const includes = css`
  ${_reset}
`;

export const GlobalStyle = createGlobalStyle`
  ${includes}
  *{
    box-sizing: border-box;
    background-color: ${styleVariables.primaryColor};
  }
`;
