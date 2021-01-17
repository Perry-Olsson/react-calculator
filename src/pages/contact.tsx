import React from "react";

import { Layout, Header } from "../components";

export default function Contact() {
  return (
    <Layout style={{ color: `teal` }}>
      <Header text="Contact" />
      <p>Send us a message!</p>
    </Layout>
  );
}
