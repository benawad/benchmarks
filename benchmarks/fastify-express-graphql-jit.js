"use strict";

const { createHandler } = require("graphql-http/lib/use/express");
const app = require("fastify")();

const { compileQuery } = require("graphql-jit");

const { parse } = require("graphql");

const cache = {};

const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

app.post(
  "/graphql",
  createHandler({
    execute: (_, __, { query }) => {
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
    },
  }),
);
app.listen({
  port: 4001,
});
