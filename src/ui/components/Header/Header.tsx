import Link from "next/link";
import { useState } from "react";
import useWindowWidth from "react-hook-use-window-width";
import {
  BurgerHeader,
  HeaderLogo,
  HeaderStyle,
  Item,
  Navigation,
  NavList,
} from "./Header.style";
import ScrollLock from "react-scrolllock";

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
  const [isOpenMenu, setOpenMenu] = useState(false);
  const wWidth = useWindowWidth();

  const animVariants =
    wWidth <= 1180
      ? {
          open: { width: "100vw", paddingLeft: "50px" },
          close: { width: "0", paddingLeft: "0px" },
        }
      : {
          open: { width: "auto", paddingLeft: "0px" },
          close: { width: "auto", paddingLeft: "0px" },
        };

  const navAnimate = isOpenMenu ? animVariants.open : animVariants.close;
  const navTransition = wWidth <= 1180 ? { duration: 0.3 } : { duration: 0 };

  return (
    <HeaderStyle>
      <BurgerHeader isActive={isOpenMenu} onClick={setOpenMenu} />
      <HeaderLogo />
      <Navigation>
        <NavList
          active={isOpenMenu}
          animate={navAnimate}
          transition={navTransition}
        >
          {items.map(({ title, src }) => (
            <Item key={src}>
              <Link passHref={true} href={src}>
                <a>{title}</a>
              </Link>
            </Item>
          ))}
        </NavList>
      </Navigation>
      <ScrollLock isActive={isOpenMenu} />
    </HeaderStyle>
  );
};
