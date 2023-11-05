"use strict";

require("../lib/instrumentations/otel-instrumentation");
const Fastify = require("fastify");
const mercurius = require("mercurius");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const app = Fastify();

app.register(mercurius, {
  schema,
  jit: 1,
});

app.listen(4001);
