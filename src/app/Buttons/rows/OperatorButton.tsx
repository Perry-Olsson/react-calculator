import React from "react";

import { Button, Text } from "../../../components";
import {
  operatorPress,
  useOperationDispatch,
} from "../../../context/operation";
import { ButtonProps } from "../types";

export const OperatorButton: React.FC<ButtonProps> = ({ value }) => {
  const dispatch = useOperationDispatch();

  const handleClick = () => dispatch(operatorPress(value));

  return (
    <Button onClick={handleClick}>
      <Text value={value} />
    </Button>
  );
};
