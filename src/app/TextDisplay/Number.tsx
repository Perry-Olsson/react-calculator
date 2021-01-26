import React from "react";
import styled from "styled-components";

import { Flex, Text } from "../../components";
import { useOperationState } from "../../context/operation";

const Number: React.FC = () => {
  const { currentNumber } = useOperationState();

  return (
    <Container>
      <Text value={currentNumber} size="3rem" />
    </Container>
  );
};

const Container = styled(Flex)`
  border-bottom: 2px solid #999;
  justify-content: flex-end;
  margin: 0;
  padding: 0 15px;
  font-size: 3rem;
`;

export default Number;
