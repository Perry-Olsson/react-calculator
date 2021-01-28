import React from "react";

import { Button, Text } from "../../../../../components";
import {
  equalsPress,
  useOperationDispatch,
  useOperationState,
} from "../../../../../context/operation";
import { PressValidator } from "../../../types";

export const Equals: React.FC = () => {
  const state = useOperationState();
  const dispatch = useOperationDispatch();

  const handleClick = () => {
    if (isValidOperation(state)) dispatch(equalsPress());
  };

  return (
    <Button onClick={handleClick}>
      <Text value="=" />
    </Button>
  );
};

const isValidOperation: PressValidator = ({
  currentNumber,
  previousOperation,
}) => {
  if (currentNumber && previousOperation !== "CHAINED_OPERATOR") return true;
  return false;
};
