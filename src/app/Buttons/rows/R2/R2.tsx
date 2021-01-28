import React from "react";

import RowContainer from "../../components/RowContainer";
import { Sqrt, Sign, Percent, Divide } from "./buttons";

export const R2: React.FC = () => {
  return (
    <RowContainer>
      <Sqrt />
      <Sign />
      <Percent />
      <Divide />
    </RowContainer>
  );
};
