import styled from "styled-components";
import v from "../../styles/_variables";

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
`;
export const Button: ComponentType<unknown> = ({ className, children }) => {
  return <Component className={className}>{children}</Component>;
};
