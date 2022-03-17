"use strict";

const Fastify = require("fastify");
const mercurius = require("mercurius");
const {
  createTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");

const app = Fastify();

createTypeGraphQLSchema().then((schema) => {
  app.register(mercurius, {
    schema,
  });
  app.listen(4001);
});
