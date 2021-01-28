import React from "react";

import { Button, Text } from "../../../../../components";
import {
  decimalPress,
  useOperationDispatch,
  useOperationState,
} from "../../../../../context/operation";
import { PressValidator } from "../../../types";

export const Decimal: React.FC = () => {
  const dispatch = useOperationDispatch();
  const state = useOperationState();

  const handleClick = () => {
    if (!hasDecimal(state)) dispatch(decimalPress());
  };

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
