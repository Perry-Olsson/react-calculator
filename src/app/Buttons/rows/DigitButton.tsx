import React from "react";

import { Button, Text } from "../../../components";
import { numberPress, useOperationDispatch } from "../../../context/operation";
import { ButtonProps } from "../types";

export const DigitButton: React.FC<ButtonProps> = ({ value }) => {
  const dispatch = useOperationDispatch();

  const handleClick = () => {
    dispatch(numberPress(value));
  };

  return (
    <Button onClick={handleClick}>
      <Text value={value} />
    </Button>
  );
};
