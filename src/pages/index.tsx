import React from "react";
import { Link } from "gatsby";
import { Container, Header } from "../components";

export default function home() {
  return (
    <Container>
      <div>
        <Link to="/about/">about</Link>
        <span>{"  "}</span>
        <Link to="/contact/">contact</Link>
      </div>
      <Header text="Home" />
      <p>Hello world!</p>
    </Container>
  );
}
