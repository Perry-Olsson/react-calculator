import React from "react";

import RowContainer from "../RowContainer";
import { Decimal, Equals, Zero } from "./buttons";

export const R6: React.FC = () => {
  return (
    <RowContainer>
      <Zero />
      <Decimal />
      <Equals />
    </RowContainer>
  );
};
