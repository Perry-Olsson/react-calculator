import React from "react";
import styled from "styled-components";
import { Flex, theme } from "../../../../components";

export const SquaredIcon: React.FC = () => {
  return (
    <Container>
      <X>x</X>
      <Two>2</Two>
    </Container>
  );
};

const Container = styled(Flex)`
  width: fit-content;
`;

const X = styled.span`
  font-size: ${theme.fontSize};
  position: relative;
  top: 5px;
`;

const Two = styled.span`
  font-size: 1.4rem;
  position: relative;
  bottom: 7px;
`;
