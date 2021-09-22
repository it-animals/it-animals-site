import styled, { css } from "styled-components";
import { mxm } from "../../styles/_mixin";
import { Burger } from "../Burger/Burger";
import { Logo } from "../Logo/Logo";
import { motion } from "framer-motion";
import { rgba } from "polished";
import v from "../../styles/_variables";
import { Wrapper } from "../PageComponent/Wrapper/Wrapper";

export const BurgerHeader = styled(Burger)`
  display: none;
  ${mxm(
    1180,
    css`
      position: relative;
      z-index: 16;
      display: flex;
      margin-right: 35px;
    `
  )}
`;
export const HeaderLogo = styled(Logo)`
  position: relative;
  z-index: 18;
`;
export const HeaderStyle = styled.header<{ forPreviewPage: boolean }>`
  width: 100%;
  height: 65px;
  z-index: 20;
  padding: 10px 0;
  font-size: 18px;
  position: relative;
  text-decoration: none;
  background-color: ${(props) =>
    props.forPreviewPage ? "transparent" : v.primaryColor};
  ${mxm(
    1180,
    css`
      height: 65px;
    `
  )}
`;

export const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mxm(
    1180,
    css`
      display: flex;
      justify-content: flex-start;
    `
  )}
`;

export const NavList = styled(motion.ul)<{ active: boolean }>`
  display: flex;
  position: relative;
  top: 3px;
  align-items: center;
  ${mxm(
    1180,
    css`
      position: absolute;
      background-color: ${rgba(v.backgroundColor, 0.95)};
      display: block;
      top: -10px;
      padding-top: 120px;
      left: 0px;
      z-index: 15;
      height: 100vh;
      overflow-x: hidden;
      width: 0;
    `
  )}
`;
export const NavItem = styled.li<{ isOpen: boolean }>`
  margin-left: 70px;

  &:last-child {
    margin-right: 20px;
  }

  & a {
    text-decoration: none;
    color: ${(props) => (props.isOpen ? "black" : "white")};
    position: relative;
    font-weight: bold;

    &:before {
      transition: 0.2s ease-in-out;
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      background-color: ${(props) => (props.isOpen ? "black" : "white")};
      height: ${(props) => (props.isOpen ? "4px" : "2px")};
    }

    &:hover {
      &:before {
        width: calc(100% + 5px);
      }
    }
  }

  ${mxm(
    1180,
    css`
      margin-left: 0;
      margin-bottom: 25px;

      & a {
        font-size: 45px;
      }
    `
  )}
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
