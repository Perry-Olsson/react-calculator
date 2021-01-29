import React from "react";
import path from "path";

import { Button } from "../../../../../components";
import {
  backSpacePress,
  useOperationDispatch,
  useOperationState,
} from "../../../../../context/operation";

export const BackSpace: React.FC = () => {
  const { previousEvent } = useOperationState();
  const dispatch = useOperationDispatch();

  const handleClick = () => {
    if (previousEvent === "BACKSPACE") dispatch(backSpacePress());
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
