import styled from "styled-components";
import v from "../../styles/_variables";
import React from "react";

const Component = styled.button`
  outline: none;
  background-color: ${v.primaryColor};
  padding: 12px 25px;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: ${v.secondaryFont};
  color: white;
  font-size: 18px;
  transition: 0.2s ease-in-out;
  opacity: 0.65;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`;
export const Button: ComponentType<
  unknown & React.ButtonHTMLAttributes<unknown>
> = ({ className, children, ...rest }) => {
  return (
    <Component {...rest} className={className}>
      {children}
    </Component>
  );
};
