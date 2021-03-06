import styled from "styled-components";
import v from "../../styles/_variables";
import React from "react";

const Layout = styled.div`
  min-width: 120px;
  width: 120px;
  height: 120px;
  background-color: ${v.accentColor};
  outline: none;
  padding-top: 30px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 25px;
  font-size: 18px;
  cursor: pointer;
  color: ${v.textColorPrimary};
  & svg {
    transition: 0.2s ease-in-out;
    width: 91px;
  }
  &:hover {
    & svg {
      width: 85px;
    }
  }
`;

export const AccentButton: React.FC<{ title: title }> = ({ title }) => {
  return (
    <Layout>
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        viewBox="0 0 91 16"
        fill="none"
      >
        <path
          d="M90.7071 8.70711C91.0976 8.31658 91.0976 7.68342 90.7071 7.29289L84.3431 0.928932C83.9526 0.538408 83.3195 0.538408 82.9289 0.928932C82.5384 1.31946 82.5384 1.95262 82.9289 2.34315L88.5858 8L82.9289 13.6569C82.5384 14.0474 82.5384 14.6805 82.9289 15.0711C83.3195 15.4616 83.9526 15.4616 84.3431 15.0711L90.7071 8.70711ZM0 9H90V7H0V9Z"
          fill="currentColor"
        />
      </svg>
    </Layout>
  );
};
