import React from "react";
import styled from "styled-components";

import { Button, Text } from "../../../../../components";

export const Zero: React.FC = () => {
  return (
    <StyledButton>
      <Text value="0" />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  grid-column: 1/3;
`;
