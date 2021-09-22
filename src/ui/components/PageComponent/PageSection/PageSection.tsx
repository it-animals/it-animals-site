import styled from "styled-components";

const Section = styled.section`
  padding: 35px 0;
`;

export const PageSection: ComponentType<unknown> = ({
  className,
  children,
}) => {
  return <Section className={className}>{children}</Section>;
};
