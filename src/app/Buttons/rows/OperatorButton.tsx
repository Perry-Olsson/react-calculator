import React from "react";

import { Button, Text } from "../../../components";
import {
  operatorPress,
  useOperationDispatch,
  useOperationState,
} from "../../../context/operation";
import { ButtonProps } from "../types";

export const OperatorButton: React.FC<ButtonProps> = ({ value }) => {
  const dispatch = useOperationDispatch();
  const { previousOperation } = useOperationState();

  const handleClick = () => {
    if (previousOperation) dispatch(operatorPress(value));
  };

  return (
    <Button onClick={handleClick}>
      <Text value={value} />
    </Button>
  );
};
