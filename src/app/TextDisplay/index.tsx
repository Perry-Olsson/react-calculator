import React from "react";
import styled from "styled-components";

import Calculation from "./Calculation";
import Number from "./Number";

const TextBox: React.FC = () => {
  return (
    <Container>
      <Calculation />
      <Number />
    </Container>
  );
};

const Container = styled.div`
  height: 25%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export default TextBox;
