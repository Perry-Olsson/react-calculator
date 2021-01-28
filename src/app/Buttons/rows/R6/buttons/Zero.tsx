import React from "react";
import styled from "styled-components";

import { DigitButton } from "../../DigitButton";

export const Zero: React.FC = () => {
  return <StyledDigitButton value="0" />;
};

const StyledDigitButton = styled(DigitButton)`
  grid-column: 1/3;
`;
