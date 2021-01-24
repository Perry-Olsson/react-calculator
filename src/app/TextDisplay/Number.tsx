import React from "react";
import styled from "styled-components";

import Text from "../../components/Text";
import Flex from "../../components/Flex";

const Number: React.FC = () => {
  return (
    <Container>
      <Text value="hello" />
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
