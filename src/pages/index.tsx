import React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";

export default function home() {
  return (
    <div>
      <Link to="/about/">about</Link>
      <span>{"  "}</span>
      <Link to="/contact/">contact</Link>
      <Header text="hello" />
      <p>Hello world!</p>
    </div>
  );
}
