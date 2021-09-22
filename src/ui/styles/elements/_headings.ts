import { css } from "styled-components";
import v from "../_variables";

export const _headings = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${v.secondaryFont};
    margin-bottom: 1.2rem;
  }
  h2 {
    font-size: 70px;
    line-height: 80px;
  }
  h5 {
    font-size: 32px;
  }
`;
