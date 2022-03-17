"use strict";

const { ApolloServer } = require("apollo-server-koa");
const Koa = require("koa");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const {
  createAsyncTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");

const app = new Koa();

const cache = {};

createAsyncTypeGraphQLSchema().then((schema) => {
  const server = new ApolloServer({
    schema,
    executor: ({ source, context }) => {
      if (!(source in cache)) {
        const document = parse(source);
        cache[source] = compileQuery(schema, document);
      }

      return cache[source].query({}, context, {});
    },
  });

  server.applyMiddleware({ app });
  app.listen(4001);
});
