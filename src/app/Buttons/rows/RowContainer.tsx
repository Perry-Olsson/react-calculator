import React from "react";
import styled from "styled-components";

const RowContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 15.667%;
  margin: 3.5px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default RowContainer;
