"use strict";

const { graphqlHTTP } = require("express-graphql");
const app = require("fastify")();
const { compileQuery } = require("graphql-jit");
const { parse } = require("graphql");
const {
  createTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");

const cache = {};

createTypeGraphQLSchema().then((schema) => {
  app.post(
    "/graphql",
    graphqlHTTP((_, __, { query }) => {
      if (!(query in cache)) {
        const document = parse(query);
        cache[query] = compileQuery(schema, document);
      }
      return {
        schema,
        graphiql: true,
        customExecuteFn: ({ rootValue, variableValues, contextValue }) =>
          cache[query].query(rootValue, contextValue, variableValues),
      };
    }),
  );
  app.listen(4001);
});
