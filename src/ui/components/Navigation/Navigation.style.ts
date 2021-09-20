import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ListItem = styled.li`
  margin-left: 70px;
  &:first-child {
    margin-left: 0;
  }
`;
