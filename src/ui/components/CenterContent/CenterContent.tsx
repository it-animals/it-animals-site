import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  align-items: center;
`;
export const CenterContent: ComponentType<unknown> = ({
  children,
  className,
}) => {
  return <Center className={className}>{children}</Center>;
};
