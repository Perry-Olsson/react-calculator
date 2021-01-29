import React from "react";

import { Button, Text } from "../../../../../components";
import {
  decimalPress,
  useOperationDispatch,
  useOperationState,
} from "../../../../../context/operation";
import { PressValidator } from "../../../types";
import { clearAllAfterEquals } from "../../../utils/clearAllAfterEquals";

export const Decimal: React.FC = () => {
  const state = useOperationState();
  const dispatch = useOperationDispatch();

  const handleClick = () => {
    if (!hasDecimal(state)) {
      clearAllAfterEquals(state, dispatch);
      dispatch(decimalPress());
    }
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
