import React from "react";

import { Button, Text } from "../../../../../components";
import {
  equalsPress,
  useOperationDispatch,
  useOperationState,
} from "../../../../../context/operation";
import { State } from "../../../../../context/operation/types";
import { PressValidator } from "../../../types";
import { disableAfterDecimal } from "../../../utils/disableAfterDecimal";

export const Equals: React.FC = () => {
  const state = useOperationState();
  const dispatch = useOperationDispatch();

  const dispatcher = (state: State) => {
    if (isValidOperation(state)) dispatch(equalsPress());
  };

  const handleClick = () => disableAfterDecimal(state, dispatcher);

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
