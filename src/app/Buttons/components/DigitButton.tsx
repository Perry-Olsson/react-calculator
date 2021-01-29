import React from "react";

import { Button, Text } from "../../../components";
import {
  numberPress,
  useOperationDispatch,
  useOperationState,
} from "../../../context/operation";
import { ButtonProps, PressValidator } from "../types";
import { clearAllAfterEquals } from "../utils/clearAllAfterEquals";

export const DigitButton: React.FC<ButtonProps> = ({ value, ...restProps }) => {
  const dispatch = useOperationDispatch();
  const state = useOperationState();

  const handleClick = () => {
    if (!isLeadingZero(state, value)) {
      clearAllAfterEquals(state, dispatch);
      dispatch(numberPress(value));
    }
  };

  return (
    <Button onClick={handleClick} {...restProps}>
      <Text value={value} />
    </Button>
  );
};

const isLeadingZero: PressValidator<string> = ({ previousEvent }, value) => {
  if (previousEvent !== "DIGIT" && previousEvent !== "DECIMAL" && value === "0")
    return true;
  return false;
};
