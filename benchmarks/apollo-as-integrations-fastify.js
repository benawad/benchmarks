"use strict";

const { ApolloServer } = require("@apollo/server");
const {
  default: fastifyApollo,
  fastifyApolloDrainPlugin,
} = require("@as-integrations/fastify");
const app = require("fastify")();
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();
const server = new ApolloServer({
  schema,
  plugins: [fastifyApolloDrainPlugin(app)],
});

server.start().then(() => {
  app.register(fastifyApollo(server));
  app.listen({
    port: 4001,
  });
});
