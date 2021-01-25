import React from "react";
import styled from "styled-components";
import { BaseProps } from "./types";

export const Flex: React.FC<BaseProps> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Arial;
`;
