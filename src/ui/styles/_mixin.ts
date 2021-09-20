import {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  ThemedCssFunction,
} from "styled-components";

export function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export const mxm = (width: number, rules: FlattenSimpleInterpolation) => css`
  @media screen and (max-width: ${width}px) {
    ${rules}
  }
`;

export const toHex = (hex: string) =>
  css`
    ${hexToRgb(hex)}
  `;
