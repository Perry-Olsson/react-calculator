import React from "react";

import RowContainer from "../../components/RowContainer";
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
