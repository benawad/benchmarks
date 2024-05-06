"use strict";

const Fastify = require("fastify");
const mercurius = require("mercurius");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const app = Fastify();

app.register(mercurius, {
  schema,
});

app.listen({
  port: 4001,
});
