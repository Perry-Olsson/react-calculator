import React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";

export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header text="Contact" />
      <p>Send us a message!</p>
    </div>
  );
}
