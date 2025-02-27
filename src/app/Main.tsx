import React from "react";
import styled from "styled-components";
import { useOperationState } from "../context/operation";
import Buttons from "./Buttons";

import TextDisplay from "./TextDisplay";

export default function Main() {
  const state = useOperationState();
  console.log(state);

  return (
    <Container>
      <TextDisplay />
      <Buttons />
    </Container>
  );
}

const Container = styled.div`
  border: solid;
  width: 450px;
  height: 650px;
  border: solid #444;
  border-radius: 5px;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.6);
`;
