import React from "react";
import styled from "styled-components";
import { R1, R2, R3, R4, R5, R6 } from "./rows";

const Buttons: React.FC = () => {
  return (
    <Container>
      <R1 />
      <R2 />
      <R3 />
      <R4 />
      <R5 />
      <R6 />
    </Container>
  );
};

const Container = styled.div`
  height: 75%;
  background-color: #6176a7;
  padding: 12px;
  width: 100%;
`;

export default Buttons;
