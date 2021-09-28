import { css } from "styled-components";

export const _fonts = css`
  @font-face {
    font-family: "AnotherCastle3";
    font-weight: normal;
    font-style: normal;
    src: url("${process.env["base-path"]}/fonts/Another-Castle3.woff2");
  }
  @font-face {
    font-family: "Inter";
    font-weight: normal;
    font-style: normal;
    src: url("${process.env["base-path"]}/fonts/Inter-Regular.woff2");
  }
  @font-face {
    font-family: "Inter";
    font-weight: bold;
    font-style: normal;
    src: url("${process.env["base-path"]}/fonts/Inter-Bold.woff2");
  }
`;
