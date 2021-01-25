import React from "react";
import path from "path";

import { Button } from "../../../../../components";

export const BackSpace: React.FC = () => {
  return (
    <Button>
      <img
        src={path.resolve(__dirname, "icons8-clear-symbol-100.png")}
        width="50%"
      />
    </Button>
  );
};
