import React from "react";
import styled from "styled-components";

export const Icon = styled.img`
  width: 37px;
  height: 37px;
`;

export const CatIcon: React.FC<unknown> = ({ ...props }) => {
  return (
    <div>
      <Icon {...props} src={"/images/kuki.svg"} />
    </div>
  );
};
