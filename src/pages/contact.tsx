import React from "react";
import { Link } from "gatsby";
import { Container, Header } from "../components";

export default function Contact() {
  return (
    <Container style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header text="Contact" />
      <p>Send us a message!</p>
    </Container>
  );
}
