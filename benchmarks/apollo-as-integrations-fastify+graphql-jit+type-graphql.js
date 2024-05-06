"use strict";

const { ApolloServer } = require("@apollo/server");
const {
  default: fastifyApollo,
  fastifyApolloDrainPlugin,
} = require("@as-integrations/fastify");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const app = require("fastify")();
const {
  createTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");

const cache = {};

createTypeGraphQLSchema().then((schema) => {
  const server = new ApolloServer({
    schema,
    plugins: [fastifyApolloDrainPlugin(app)],
    executor: ({ source, context }) => {
      if (!(source in cache)) {
        const document = parse(source);
        cache[source] = compileQuery(schema, document);
      }

      return cache[source].query({}, context, {});
    },
  });
  server.start().then(() => {
    app.register(fastifyApollo(server));
    app.listen({
      port: 4001,
    });
  });
});
