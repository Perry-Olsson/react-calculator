import React from "react";

import { Button, Text } from "../../../../../components";
import {
  signPress,
  useOperationDispatch,
} from "../../../../../context/operation";

export const Sign: React.FC = () => {
  const dispatch = useOperationDispatch();

  const handleClick = () => {
    dispatch(signPress());
  };

  return (
    <Button onClick={handleClick}>
      <Text value="+/-" />
    </Button>
  );
};
