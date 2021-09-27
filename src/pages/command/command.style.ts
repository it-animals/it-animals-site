import styled, { css } from "styled-components";
import { StickerGallery } from "../../ui/components/StickerGallery/StickerGallery";
import { mxm } from "../../ui/styles/_mixin";

export const Stickers = styled(StickerGallery)`
  margin: 60px 40px 0 0;
  ${mxm(
    800,
    css`
      display: none;
    `
  )}
`;
