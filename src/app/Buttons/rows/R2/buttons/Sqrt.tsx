import React from "react";
import path from "path";

import { Button, Text } from "../../../../../components";

export const Sqrt: React.FC = () => {
  return (
    <Button>
      <img
        src={path.resolve(__dirname, "square-root-mathematical-symbol.png")}
        width="50%"
      />
    </Button>
  );
};
