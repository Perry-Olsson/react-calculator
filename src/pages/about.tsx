import React from "react";
import { Link } from "gatsby";

import Header from "../components/Header";

export default function About() {
  return (
    <div>
      <Link to="/">home</Link>
      <Header text="About" />
      <p>gatsby is cool</p>
    </div>
  );
}
