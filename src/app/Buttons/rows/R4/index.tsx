import React from "react";

import RowContainer from "../../components/RowContainer";
import { Five, Four, Six, Subtract } from "./buttons";

export const R4: React.FC = () => {
  return (
    <RowContainer>
      <Four />
      <Five />
      <Six />
      <Subtract />
    </RowContainer>
  );
};
