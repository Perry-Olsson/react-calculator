import React from "react";

import { Button, Text } from "../../../../../components";
import { percentPress } from "../../../../../context/operation";
import { useValidateClick } from "../../../../../hooks/useValidateClick";
import { ClickValidator } from "../../../types";

export const Percent: React.FC = () => {
  const validateClick = useValidateClick("PERCENT");

  const handleClick = () =>
    validateClick((dispatch, state) => {
      if (!hasPercent(state)) dispatch(percentPress());
    });

  return (
    <Button onClick={handleClick}>
      <Text value="%" />
    </Button>
  );
};

const hasPercent: ClickValidator = ({ currentNumber }) => {
  if (currentNumber.includes("%")) return true;
  return false;
};
