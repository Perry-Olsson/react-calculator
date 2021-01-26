import React from "react";

import { Button, Text } from "../../../../../components";
import {
  equalsPress,
  useOperationDispatch,
  useOperationState,
} from "../../../../../context/operation";

export const Equals: React.FC = () => {
  const { currentNumber, previousOperation } = useOperationState();
  const dispatch = useOperationDispatch();

  const handleClick = () => {
    if (currentNumber && previousOperation !== "CHAINED_OPERATOR")
      dispatch(equalsPress());
  };

  return (
    <Button onClick={handleClick}>
      <Text value="=" />
    </Button>
  );
};
