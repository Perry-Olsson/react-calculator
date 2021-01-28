import React from "react";

import { Button, Text } from "../../../components";
import {
  numberPress,
  useOperationDispatch,
  useOperationState,
} from "../../../context/operation";
import { State } from "../../../context/operation/types";
import { ButtonProps } from "../types";

export const DigitButton: React.FC<ButtonProps> = ({ value, ...restProps }) => {
  const dispatch = useOperationDispatch();
  const state = useOperationState();

  const handleClick = () => {
    if (!isLeadingZero(state, value)) dispatch(numberPress(value));
  };

  return (
    <Button onClick={handleClick} {...restProps}>
      <Text value={value} />
    </Button>
  );
};

const isLeadingZero = (state: State, value: string) => {
  if (state.previousOperation !== "DIGIT" && value === "0") return true;
  return false;
};
