import React from "react";
import path from "path";

import { Button } from "../../../../../components";
import {
  backSpacePress,
  useOperationDispatch,
  useOperationState,
} from "../../../../../context/operation";

export const BackSpace: React.FC = () => {
  const state = useOperationState();
  const dispatch = useOperationDispatch();

  const handleClick = () => {
    if (
      state.previousEvent === "DECIMAL" ||
      state.previousEvent === "DIGIT" ||
      state.previousEvent === "BACKSPACE"
    )
      dispatch(backSpacePress());
  };

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
