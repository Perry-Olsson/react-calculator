import React from "react";

import RowContainer from "../../components/RowContainer";
import { Seven, Eight, Nine, Multiply } from "./buttons";

export const R3: React.FC = () => {
  return (
    <RowContainer>
      <Seven />
      <Eight />
      <Nine />
      <Multiply />
    </RowContainer>
  );
};
