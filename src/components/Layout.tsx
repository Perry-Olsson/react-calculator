import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Layout: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};
