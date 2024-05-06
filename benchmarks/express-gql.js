"use strict";

const bodyParser = require("body-parser");
const { createGraphqlMiddleware } = require("express-gql");
const express = require("express");
const graphqlUploadExpress = require("graphql-upload/graphqlUploadExpress.js");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

if (true) {
  throw new Error("Unsupported");
}

const app = express();
app.post(
  "/graphql",
  graphqlUploadExpress(),
  bodyParser.json(),
  createGraphqlMiddleware({
    context: () => ({}),
    formatError: ({ error }) => error,
    schema,
  }),
);
app.listen(4001);
