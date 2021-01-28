import React from "react";

import { Button, Text } from "../../../components";
import {
  operatorPress,
  useOperationDispatch,
  useOperationState,
} from "../../../context/operation";
import { State } from "../../../context/operation/types";
import { ButtonProps } from "../types";
import { disableAfterDecimal } from "../utils/disableAfterDecimal";

export const OperatorButton: React.FC<ButtonProps> = ({ value }) => {
  const dispatch = useOperationDispatch();
  const state = useOperationState();

  const dispatcher = ({ previousOperation }: State) => {
    if (previousOperation) dispatch(operatorPress(value));
  };

  const handleClick = () => disableAfterDecimal(state, dispatcher);

  return (
    <Button onClick={handleClick}>
      <Text value={value} />
    </Button>
  );
};
