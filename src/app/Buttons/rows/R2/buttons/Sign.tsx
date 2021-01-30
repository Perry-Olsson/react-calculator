import React from "react";

import { Button, Text } from "../../../../../components";
import { signPress } from "../../../../../context/operation";
import { useValidateClick } from "../../../../../hooks/useValidateClick";

export const Sign: React.FC = () => {
  const validateClick = useValidateClick("SIGN");

  const handleClick = () => validateClick(dispatch => dispatch(signPress()));

  return (
    <Button onClick={handleClick}>
      <Text value="+/-" />
    </Button>
  );
};
