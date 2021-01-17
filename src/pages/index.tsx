import React from "react";

import Message from "./Message";

const home: React.FC = () => {
  return (
    <div>
      <p>Hello world!</p>
      <Message text="Good bye World!" />
    </div>
  );
};

export default home;
