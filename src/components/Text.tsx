import React from "react";
import styled from "styled-components";

const Text: React.FC<{ value: React.ReactText }> = ({ value }) => {
  return <Container>{value}</Container>;
};

const Container = styled.p`
  font-family: Arial, Helvetica, sans-serif;
`;

export default Text;
