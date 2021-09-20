import styled, { css } from "styled-components";
import { mxm } from "../ui/styles/_mixin";
import v from "../ui/styles/_variables";
import { motion } from "framer-motion";

export const Main = styled.main`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    ${v.backgroundColor} 0%,
    ${v.backgroundColor} 300px,
    ${v.backgroundAccent} 300px,
    ${v.backgroundAccent} 100%
  );
  ${mxm(
    1366,

    css`
      background: linear-gradient(
        90deg,
        ${v.backgroundColor} 0%,
        ${v.backgroundColor} 75px,
        ${v.backgroundAccent} 75px,
        ${v.backgroundAccent} 100%
      );
      height: auto;
    `
  )}
`;
export const Heading = styled(motion.h1)`
  font-size: 104px;
  line-height: 80px;
  font-family: ${v.secondaryFont};
  text-transform: uppercase;

  ${mxm(
    1700,
    css`
      font-size: 70px;
      line-height: 55px;
    `
  )}
  ${mxm(
    1366,
    css`
      font-size: 70px;
      line-height: 80px;
      font-family: ${v.secondaryFont};
      text-transform: uppercase;
    `
  )}
  ${mxm(
    780,
    css`
      font-size: 48px;
      line-height: 52px;
      font-family: ${v.secondaryFont};
      text-transform: uppercase;
    `
  )}
`;
export const Content = styled.div`
  display: flex;
  margin-top: 35px;
  justify-content: space-between;
  ${mxm(
    1366,
    css`
      flex-direction: column;
    `
  )}
  ${mxm(
    780,
    css`
      justify-content: center;
      align-items: center;
    `
  )}
`;
export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Accent = styled(motion.div)`
  margin-top: 100px;
  display: flex;
  position: relative;
  z-index: 12;
  align-items: center;
  ${mxm(
    1366,
    css`
      align-self: flex-end;
      margin-top: 55px;
    `
  )}
`;
export const AccentText = styled.p`
  margin-left: 50px;
  font-size: 22px;
  line-height: 22px;
  ${mxm(
    535,
    css`
      font-size: 18px;
      margin-left: 15px;
    `
  )}
`;
export const TeamImage = styled(motion.div)`
  position: relative;
  z-index: 11;
  width: 920px;
  margin-right: 85px;
  position: relative;
  ${mxm(
    1700,
    css`
      margin-right: 0;
      top: -45px;
      width: 575px;
    `
  )}
  ${mxm(
    1420,
    css`
      margin-right: 0;
      top: -45px;
      width: 575px;
    `
  )}
  ${mxm(
    1366,
    css`
      top: -20px;
      width: 800px;
      max-width: 95%;
    `
  )}
`;
