"use strict";

const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { createAsyncApolloSchema } = require("../lib/schemas/createApolloSchema");

const app = express();
const schema = createAsyncApolloSchema();
const server = new ApolloServer({
  schema,
});
server.applyMiddleware({ app });
app.listen(4001);
