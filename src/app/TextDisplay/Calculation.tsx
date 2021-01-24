import React from "react";
import styled from "styled-components";
import Flex from "../../components/Flex";
import Text from "../../components/Text";

import { StyledContainer } from "./StyledContainer";

const Calculation: React.FC = () => {
  return (
    <Container>
      <TextBox>
        <Text value="hello" />
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
  font-size: 2.2rem;
  color: #999;
  line-height: 1;
`;

export default Calculation;
