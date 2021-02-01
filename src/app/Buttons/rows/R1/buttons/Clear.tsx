import React from "react";

import { Button, Text } from "../../../../../components";
import { clearPress } from "../../../../../context/operation";
import { useValidateClick } from "../../../../../hooks/useValidateClick";

export const Clear: React.FC = () => {
  const validateClick = useValidateClick("CLEAR");

  const handleClick = () =>
    validateClick(dispatch => {
      dispatch(clearPress());
    });

  return (
    <Button onClick={handleClick}>
      <Text value="C" />
    </Button>
  );
};
