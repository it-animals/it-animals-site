import Link from "next/link";
import React, { useState } from "react";
import useWindowWidth from "react-hook-use-window-width";
import {
  BurgerHeader,
  HeaderLogo,
  HeaderStyle,
  HeaderWrapper,
  Navigation,
  NavItem,
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
    src: "/command",
  },
  {
    title: "Деятельность",
    src: "/history",
  },
  {
    title: "Связь",
    src: "/asdasd",
  },
];

export const Header: React.FC<{ forPreviewPage?: boolean }> = ({
  forPreviewPage = false,
}) => {
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
    <HeaderStyle forPreviewPage={forPreviewPage}>
      <HeaderWrapper>
        <BurgerHeader
          forPrimaryPage={forPreviewPage}
          isActive={isOpenMenu}
          onClick={setOpenMenu}
        />
        <HeaderLogo coloredLogo={!forPreviewPage} />
        <Navigation>
          <NavList
            active={isOpenMenu}
            animate={navAnimate}
            transition={navTransition}
          >
            {items.map(({ title, src }) => (
              <NavItem isOpen={isOpenMenu} key={src}>
                <Link passHref={true} href={src}>
                  <a>{title}</a>
                </Link>
              </NavItem>
            ))}
          </NavList>
        </Navigation>
        <ScrollLock isActive={isOpenMenu} />
      </HeaderWrapper>
    </HeaderStyle>
  );
};
