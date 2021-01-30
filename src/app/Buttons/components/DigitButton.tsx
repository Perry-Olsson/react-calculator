import React from "react";

import { Button, Text } from "../../../components";
import { numberPress } from "../../../context/operation";
import { useValidateClick } from "../../../hooks/useValidateClick";
import { ButtonProps, PressValidator } from "../types";

export const DigitButton: React.FC<ButtonProps> = ({ value, ...restProps }) => {
  const validateClick = useValidateClick("DIGIT", value);

  const handleClick = () =>
    validateClick((dispatch, state) => {
      if (!isLeadingZero(state, value)) dispatch(numberPress(value));
    });

  return (
    <Button onClick={handleClick} {...restProps}>
      <Text value={value} />
    </Button>
  );
};

const isLeadingZero: PressValidator<string> = (state, value) => {
  if (state.currentNumber === "" && value === "0") return true;
  return false;
};
