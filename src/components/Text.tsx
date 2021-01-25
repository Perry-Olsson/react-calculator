import React from "react";
import styled from "styled-components";
import { TextBoxProps, TextProps } from "./types";

export const Text: React.FC<TextProps> = ({ value, size, ...restProps }) => {
  return (
    <TextBox size={size} {...restProps}>
      {value}
    </TextBox>
  );
};

const TextBox = styled.p<TextBoxProps>`
  font-size: ${props => (props.size ? props.size : "2rem")};
  font-family: Arial, Helvetica, sans-serif;
  color: inherit;
`;
