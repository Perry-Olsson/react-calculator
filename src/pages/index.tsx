import { graphql } from "gatsby";
import React from "react";

import { Layout, Header } from "../components";

export default function home({
  data: {
    postgres: { users },
  },
}: PostgresQuery<Users>) {
  return (
    <Layout>
      <Header text="Home" />
      {users.map((user: { id: number; username: string }) => {
        return (
          <div>
            id: {user.id} username: {user.username}
          </div>
        );
      })}
      <p>Hello world!</p>
    </Layout>
  );
}

interface User {
  id: number;
  username: string;
}

interface Users {
  users: User[];
}

interface PostgresQuery<T> {
  data: {
    postgres: T;
  };
}

export const query = graphql`
  {
    postgres {
      users: allUsersList {
        id
        username
      }
    }
  }
`;
