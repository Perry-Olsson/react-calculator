import React from "react";

import { Layout } from "../components";
import Main from "../app/Main";
import { OperationProvider } from "../context/operation";

export default function home() {
  return (
    <Layout>
      <OperationProvider>
        <Main />
      </OperationProvider>
    </Layout>
  );
}
