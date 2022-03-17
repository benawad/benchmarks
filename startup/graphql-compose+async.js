"use strict";

const { graphqlHTTP } = require("express-graphql");
const { graphqlUploadExpress } = require("graphql-upload");
const express = require("express");
const {
  createAsyncGraphqlComposeSchema,
} = require("../lib/schemas/createGraphqlCompose");

const app = express();
const schema = createAsyncGraphqlComposeSchema();
app.use(
  "/graphql",
  graphqlUploadExpress(),
  graphqlHTTP({
    schema,
  }),
);
app.listen(4001);
