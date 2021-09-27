import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { rgba } from "polished";
import v from "../../styles/_variables";
import { Button } from "../Button/Button";
import { mxm } from "../../styles/_mixin";

export const Section = styled.section`
  width: 100%;
  padding: 20px 0;
  min-height: 100px;
`;
export const CardList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 40px;
  row-gap: 40px;
  flex-wrap: wrap;
`;
export const Card = styled(motion.li)`
  display: flex;
  width: 310px;
  padding: 30px 20px;
  display: flex;
  border: 1px solid ${rgba(v.secondColor, 0.2)};
  border-radius: 3px;
  flex-direction: column;
  background-color: ${v.backgroundColor};
  position: relative;
  z-index: 1;
  align-items: center;
`;
export const ImageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ImageSticker = styled.img`
  width: 240px;
  display: block;
  height: 240px;
  margin: 0 auto;
`;
export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardHeading = styled.h5`
  margin-bottom: 0;
  line-height: 36px;
  font-size: 36px;
  text-align: center;
`;
export const Subtitle = styled.p`
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 4px;
  text-align: center;
`;
export const CardDescription = styled.p`
  font-size: 14px;
  color: ${v.secondColor};
  line-height: 18px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 0;
`;
export const TeamContentLine = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const Decoration = styled.img`
  ${mxm(
    1780,
    css`
      display: none;
    `
  )}
`;
export const CardButton = styled(Button)`
  margin-top: 20px;
  min-width: 140px;
`;
