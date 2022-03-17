"use strict";

const { graphqlHTTP } = require("express-graphql");
const { graphqlUploadExpress } = require("graphql-upload");
const express = require("express");

const {
  createTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");

const app = express();
createTypeGraphQLSchema().then((schema) => {
  app.use(
    "/graphql",
    graphqlUploadExpress(),
    graphqlHTTP({
      schema,
    }),
  );
  app.listen(4001);
});
