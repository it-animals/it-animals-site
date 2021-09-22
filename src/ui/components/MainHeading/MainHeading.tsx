import styled from "styled-components";
import v from "../../styles/_variables";

export const Head = styled.h1`
  font-size: 70px;
  line-height: 55px;
  font-family: ${v.secondaryFont};
`;

export const MainHeading: ComponentType<unknown> = ({
  className,
  children,
}) => {
  return <Head className={className}>{children}</Head>;
};
