import React from "react";

import { Button, Text } from "../../../../../components";
import { equalsPress } from "../../../../../context/operation";
import { useValidateClick } from "../../../../../hooks/useValidateClick";

export const Equals: React.FC = () => {
  const validateClick = useValidateClick("EQUALS");

  const handleClick = () =>
    validateClick(dispatch => {
      dispatch(equalsPress());
    });

  return (
    <Button onClick={handleClick}>
      <Text value="=" />
    </Button>
  );
};
