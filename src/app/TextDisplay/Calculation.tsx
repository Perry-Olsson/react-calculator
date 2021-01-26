import React from "react";
import styled from "styled-components";
import { Flex, Text } from "../../components";
import { useOperationState } from "../../context/operation";

import { StyledContainer } from "./StyledContainer";

const Calculation: React.FC = () => {
  const { operation } = useOperationState();

  return (
    <Container>
      <TextBox>
        <Text value={operation.join(" ")} size="2rem" />
      </TextBox>
    </Container>
  );
};

const Container = styled(StyledContainer)`
  border-bottom: 1px solid #999;
`;

const TextBox = styled(Flex)`
  justify-content: flex-start;
  min-height: 3.6rem;
  width: 100%;
  color: #999;
  line-height: 1;
`;

export default Calculation;
