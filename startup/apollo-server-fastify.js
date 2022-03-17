"use strict";

const { ApolloServer } = require("apollo-server-fastify");
const app = require("fastify")();
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();
const server = new ApolloServer({
  schema,
});
app.register(server.createHandler());
app.listen(4001);
