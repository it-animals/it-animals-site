import styled from "styled-components";
import React from "react";
import cn from "classnames";

const Burg = styled.button<{ forPrimaryPage: boolean; isActive?: boolean }>`
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
    background: ${(props) =>
      props.forPrimaryPage ? "black" : props.isActive ? "black" : "white"};
    border-radius: 20px;
    transition: 0.25s;
  }

  &.active .dash:nth-of-type(1) {
    transform: translateY(5px);
  }

  &.active .dash:nth-of-type(2) {
    opacity: 0;
  }

  &.active .dash:nth-of-type(3) {
    transform: translateY(-5px);
  }
`;

export const Burger: React.FC<{
  className?: string;
  isActive?: boolean;
  forPrimaryPage?: boolean;
  onClick?: (val: boolean) => void;
}> = ({
  forPrimaryPage = false,
  onClick = () => {},
  isActive = false,
  className,
}) => {
  return (
    <Burg
      isActive={isActive}
      forPrimaryPage={forPrimaryPage}
      className={cn((isActive && "active") || "", className)}
      onClick={() => onClick(!isActive)}
    >
      <div className={"dash"} />
      <div className={"dash"} />
      <div className={"dash"} />
    </Burg>
  );
};
