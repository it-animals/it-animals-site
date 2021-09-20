import styled from "styled-components";
import React, { useState } from "react";
import cn from "classnames";
const Burg = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
  height: 30px;
  border: none;
  background: transparent;
  outline: none;
  transition: 0.3s ease;

  & .dash {
    width: 35px;
    height: 5px;
    background: black;
    border-radius: 20px;
    transition: 0.25s;
  }

  &.active .dash:nth-of-type(1) {
    transform: rotate(45deg) translate(8px, 6px);
  }

  &.active .dash:nth-of-type(2) {
    opacity: 0;
  }

  &.active .dash:nth-of-type(3) {
    transform: rotate(-45deg) translate(8px, -7px);
  }
`;

export const Burger: React.FC<{ className?: string }> = ({ className }) => {
  const [active, setActive] = useState(false);

  return (
    <Burg
      className={cn((active && "active") || "", className)}
      onClick={() => {
        setActive(!active);
      }}
    >
      <div className={"dash"} />
      <div className={"dash"} />
      <div className={"dash"} />
    </Burg>
  );
};
