import React from "react";

import { Button, Text } from "../../../components";
import { operatorPress } from "../../../context/operation";
import { useValidateClick } from "../../../hooks/useValidateClick";
import { ButtonProps } from "../types";

export const OperatorButton: React.FC<ButtonProps> = ({ value }) => {
  const validateClick = useValidateClick("OPERATOR", value);

  const handleClick = () =>
    validateClick(dispatch => {
      dispatch(operatorPress(value));
    });

  return (
    <Button onClick={handleClick}>
      <Text value={value} />
    </Button>
  );
};
