import React from "react";

import RowContainer from "../RowContainer";
import { Squared, AllClear, Clear, BackSpace } from "./buttons";

export const R1: React.FC = () => {
  return (
    <RowContainer>
      <Squared />
      <AllClear />
      <Clear />
      <BackSpace />
    </RowContainer>
  );
};
