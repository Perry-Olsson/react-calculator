import React from "react";
import styled from "styled-components";

const Flex: React.FC<{
  children?: React.ReactNode;
  style?: React.CSSProperties;
  restProps?: React.HTMLAttributes<any>;
}> = ({ children, style, ...restProps }) => {
  return (
    <Container style={style} {...restProps}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Arial;
`;

export default Flex;
