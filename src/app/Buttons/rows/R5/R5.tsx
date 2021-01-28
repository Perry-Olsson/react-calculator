import React from "react";

import RowContainer from "../../components/RowContainer";
import { Add, One, Three, Two } from "./buttons";

export const R5: React.FC = () => {
  return (
    <RowContainer>
      <One />
      <Two />
      <Three />
      <Add />
    </RowContainer>
  );
};
