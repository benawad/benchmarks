"use strict";

const { graphqlHTTP } = require("express-graphql");
const { graphqlUploadExpress } = require("graphql-upload");
const express = require("express");
const {
  createAsyncApolloSchema,
} = require("../lib/schemas/createApolloSchema");

const app = express();
const schema = createAsyncApolloSchema();
app.use(
  "/graphql",
  graphqlUploadExpress(),
  graphqlHTTP({
    schema,
  }),
);
app.listen(4001);
