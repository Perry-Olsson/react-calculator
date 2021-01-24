import React from "react";

import { Layout, Header } from "../components";
import Main from "../app/main";

export default function home() {
  return (
    <Layout style={{ border: "solid" }}>
      <Header text="Home" />
      <Main />
    </Layout>
  );
}
