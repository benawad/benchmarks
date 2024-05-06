"use strict";

const { createServer } = require("http");
const { createYoga } = require("graphql-yoga");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const yoga = createYoga({
  graphqlEndpoint: "/graphql",
  schema,
});

const server = createServer(yoga);

server.listen(4001);
