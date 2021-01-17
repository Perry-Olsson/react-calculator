import React from "react";
import { Link } from "gatsby";

import { Container, Header } from "../components";

export default function About() {
  return (
    <Container>
      <Link to="/">home</Link>
      <Header text="About" />
      <p>gatsby is cool</p>
    </Container>
  );
}
