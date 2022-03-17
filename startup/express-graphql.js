"use strict";

const { graphqlHTTP } = require("express-graphql");
const { graphqlUploadExpress } = require("graphql-upload");
const express = require("express");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const app = express();
const schema = createApolloSchema();
app.use(
  "/graphql",
  graphqlUploadExpress(),
  graphqlHTTP({
    schema,
  }),
);
app.listen(4001);
