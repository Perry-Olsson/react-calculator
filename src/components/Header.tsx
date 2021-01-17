import React from "react";

export const Header: React.FC<{ text: string }> = ({ text }) => {
  return <h1 style={{ fontSize: "72px", color: `purple` }}>{text}</h1>;
};
