import React from "react";
import Link from "next/link";
import { List, ListItem } from "./Navigation.style";

export type NavigationProps = {
  items: {
    title: title;
    src: src;
  }[];
};

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav>
      <List>
        {items.map(({ src, title }) => (
          <ListItem key={src}>
            <Link href={src}>
              <span className={"main-nav"}>{title}</span>
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
