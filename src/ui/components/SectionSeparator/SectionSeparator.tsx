import styled from "styled-components";
import v from "../../styles/_variables";

const Separator = styled.div<{ inverted: boolean }>`
  height: 18px;
  width: 60px;
  position: relative;
  margin: 20px auto;
  &:before {
    width: 100%;
    position: absolute;
    left: 50%;
    top: ${(props) => (props.inverted ? "0" : "100%")};
    transform: translateX(-50%);

    display: block;
    height: 6px;
    border-radius: 25px;
    content: "";
    margin: 0 auto;
    background-color: ${v.primaryColor};
  }
  &:after {
    width: 40%;
    position: absolute;
    display: block;
    left: 50%;
    top: ${(props) => (props.inverted ? "100%" : "0")};
    transform: translateX(-50%);
    margin: 0 auto;
    border-radius: 25px;
    height: 6px;
    content: "";
    background-color: ${v.primaryColor};
  }
`;

export const SectionSeparator: ComponentType<{ inverted?: boolean }> = ({
  inverted = false,
}) => {
  return <Separator inverted={inverted} />;
};
