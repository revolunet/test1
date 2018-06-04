import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import App from "./App";

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

render(
  <ApolloProvider client={client}>
    <h1>GraphQL + Apollo 2</h1>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
