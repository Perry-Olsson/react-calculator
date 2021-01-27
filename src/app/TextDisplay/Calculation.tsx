import React, { useRef } from "react";
import styled from "styled-components";
import { Text, theme } from "../../components";
import { useOperationState } from "../../context/operation";

import { StyledContainer } from "./StyledContainer";

const Calculation: React.FC = () => {
  const { operation } = useOperationState();
  const textBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <TextBox ref={textBoxRef}>
        <Text value={operation.join(" ")} size="2rem" />
      </TextBox>
    </Container>
  );
};

const Container = styled(StyledContainer)`
  border-bottom: 1px solid #999;
`;

const TextBox = styled.div`
  justify-content: flex-start;
  min-height: 3.6rem;
  width: 100%;
  color: #999;
  line-height: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: ${theme.fontFamily};
`;

export default Calculation;
