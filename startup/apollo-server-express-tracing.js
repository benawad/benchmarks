"use strict";

const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const app = express();
const schema = createApolloSchema();
const server = new ApolloServer({
  schema,
  tracing: true,
});
server.applyMiddleware({ app });
app.listen(4001);
