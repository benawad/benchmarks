"use strict";

const Fastify = require("fastify");
const mercurius = require("mercurius");
const {
  createGraphqlComposeSchema,
} = require("../lib/schemas/createGraphqlCompose");

const schema = createGraphqlComposeSchema();

const app = Fastify();

app.register(mercurius, {
  schema,
});

app.listen({
  port: 4001,
});
