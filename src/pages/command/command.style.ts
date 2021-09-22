import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { StickerGallery } from "../../ui/components/StickerGallery/StickerGallery";
import { mxm } from "../../ui/styles/_mixin";

export const TextBlock = styled(motion.div)`
  max-width: 550px;
`;
export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Stickers = styled(StickerGallery)`
  margin: 60px 40px 0 0;
  ${mxm(
    800,
    css`
      display: none;
    `
  )}
`;
export const Section = styled.main`
  margin-top: 35px;
`;
export const Heading = motion.h2;
