import styled, { css } from "styled-components";
import { Logo } from "../Logo/Logo";
import Link from "next/link";
import { mxm } from "../../styles/_mixin";
import { Burger } from "../Burger/Burger";

const items = [
  {
    title: "Главная",
    src: "/",
  },
  {
    title: "Команда",
    src: "/comand",
  },
  {
    title: "Блог",
    src: "/adasd",
  },
  {
    title: "Связь",
    src: "/asdasd",
  },
];

export const Header = () => {
  return (
    <HeaderStyle>
      <BurgerHeader />
      <Logo />
      <Navigation>
        <NavList>
          {items.map(({ title, src }) => (
            <Item key={src}>
              <Link passHref={true} href={src}>
                <a>{title}</a>
              </Link>
            </Item>
          ))}
        </NavList>
      </Navigation>
    </HeaderStyle>
  );
};

const BurgerHeader = styled(Burger)`
  display: none;
  ${mxm(
    1180,
    css`
      display: flex;
      margin-right: 35px;
    `
  )}
`;

const HeaderStyle = styled.header`
  width: 100%;
  height: 100px;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  text-decoration: none;
  ${mxm(
    1180,
    css`
      display: flex;
      justify-content: flex-start;
    `
  )}
`;

const NavList = styled.ul`
  display: flex;
  position: relative;
  top: 3px;
  align-items: center;
  ${mxm(
    1180,
    css`
      display: none;
    `
  )}
`;

const Item = styled.li`
  margin-left: 70px;

  &:last-child {
    margin-right: 20px;
  }

  & a {
    text-decoration: none;
    color: black;
    position: relative;
    font-weight: bold;

    &:before {
      transition: 0.2s ease-in-out;
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      background-color: black;
      height: 2px;
    }

    &:hover {
      &:before {
        width: calc(100% + 5px);
      }
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
