import React from "react";

import { Button, Text } from "../../../../../components";
import { decimalPress } from "../../../../../context/operation";
import { useValidateClick } from "../../../../../hooks/useValidateClick";
import { PressValidator } from "../../../types";

export const Decimal: React.FC = () => {
  const validateClick = useValidateClick("DECIMAL");

  const handleClick = () =>
    validateClick((dispatch, state) => {
      if (!hasDecimal(state)) dispatch(decimalPress());
    });

  return (
    <Button onClick={handleClick}>
      <Text value="." />
    </Button>
  );
};

const hasDecimal: PressValidator = ({ currentNumber }) => {
  if (currentNumber.includes(".")) return true;
  return false;
};
