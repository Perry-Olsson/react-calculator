import React from "react";

import { Button, Text } from "../../../../../components";
import {
  clearPress,
  useOperationDispatch,
} from "../../../../../context/operation";

export const Clear: React.FC = () => {
  const dispatch = useOperationDispatch();

  const handleClick = () => dispatch(clearPress());

  return (
    <Button onClick={handleClick}>
      <Text value="C" />
    </Button>
  );
};
