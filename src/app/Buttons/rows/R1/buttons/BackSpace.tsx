import React from "react";
import path from "path";

import { Button } from "../../../../../components";
import { backSpacePress } from "../../../../../context/operation";
import { useValidateClick } from "../../../../../hooks/useValidateClick";

export const BackSpace: React.FC = () => {
  const validateClick = useValidateClick("BACKSPACE");

  const handleClick = () =>
    validateClick(dispatch => {
      dispatch(backSpacePress());
    });

  return (
    <Button onClick={handleClick}>
      <img
        src={path.resolve(__dirname, "/icons8-clear-symbol-100.png")}
        width="50%"
        alt="Back"
      />
    </Button>
  );
};
