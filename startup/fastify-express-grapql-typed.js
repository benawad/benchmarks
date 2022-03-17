"use strict";

const { graphqlHTTP } = require("express-graphql");
const {
  createTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");
const app = require("fastify")();

createTypeGraphQLSchema().then((schema) => {
  app.post(
    "/graphql",
    graphqlHTTP({
      schema,
    }),
  );
  app.listen(4001);
});
