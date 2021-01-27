import React from "react";
import styled from "styled-components";

export const SqrtIcon: React.FC = () => {
  return (
    <Container>
      <Line1 />
      <Line2 />
      <Line3 />
    </Container>
  );
};

const Container = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
`;

const Line1 = styled.div`
  border-bottom: 3px solid white;
  width: 0.5rem;
  transform: skew(0, 60deg);
  position: relative;
  top: 15px;
  right: 10px;
`;

const Line2 = styled.div`
  border-bottom: 3px solid white;
  width: 1rem;
  transform: skew(0, -60deg);
  position: relative;
  top: 5px;
  right: 2px;
`;

const Line3 = styled.div`
  border-bottom: 2px solid white;
  width: 1rem;
  position: relative;
  bottom: 12px;
  left: 14px;
`;
