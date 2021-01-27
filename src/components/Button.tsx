import React from "react";
import styled from "styled-components";
import { Flex } from "./Flex";
import { BaseProps } from "./types";

export const Button: React.FC<BaseProps> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const Container = styled(Flex)`
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgb(99, 99, 99),
    rgba(51, 51, 51, 1)
  );
  border: 2px solid #444;
  border-radius: 4px;
  color: white;
  margin: 1.5px;
  cursor: pointer;
  &:active {
    background-color: rgb(51, 51, 51);
    background-image: none;
    position: relative;
    top: 1px;
  }
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;
