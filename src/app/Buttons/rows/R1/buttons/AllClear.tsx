import React from "react";

import { Button, Text } from "../../../../../components";
import {
  allClearPress,
  useOperationDispatch,
} from "../../../../../context/operation";

export const AllClear: React.FC = () => {
  const dispatch = useOperationDispatch();

  const handleClick = () => {
    dispatch(allClearPress());
  };

  return (
    <Button onClick={handleClick}>
      <Text value="AC" />
    </Button>
  );
};
