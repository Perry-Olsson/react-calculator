import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Layout: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  return (
    <Container style={style}>
      <div>
        <Link to="/">home</Link>
        {"  "}
        <Link to="/about/">about</Link>
        {"  "}
        <Link to="/contact/">contact</Link>
      </div>
      {children}
    </Container>
  );
};
