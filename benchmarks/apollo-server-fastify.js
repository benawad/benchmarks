"use strict";

const { ApolloServer } = require("apollo-server-fastify");
const app = require("fastify")();
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();
const server = new ApolloServer({
  schema,
});

server.start().then(() => {
  app.register(server.createHandler());
  app.listen(4001);
})
