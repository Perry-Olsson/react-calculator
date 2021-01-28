import React from "react";

import { Button, Text } from "../../../../../components";
import {
  decimalPress,
  useOperationDispatch,
} from "../../../../../context/operation";

export const Decimal: React.FC = () => {
  const dispatch = useOperationDispatch();

  const handleClick = () => {
    dispatch(decimalPress());
  };

  return (
    <Button onClick={handleClick}>
      <Text value="." />
    </Button>
  );
};
