import styled, { css } from "styled-components";
import { mxm } from "../../styles/_mixin";
import React from "react";

const Content = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  ${mxm(
    1920,
    css`
      width: 100%;
      padding: 0 15px;
    `
  )}
`;

export const Wrapper: React.FC<unknown> = ({ children }) => {
  return <Content>{children}</Content>;
};
