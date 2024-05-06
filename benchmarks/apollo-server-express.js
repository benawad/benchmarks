"use strict";

const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const express = require("express");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const app = express();
const schema = createApolloSchema();
const server = new ApolloServer({
  schema,
});
server.start().then(() => {
  app.use("/graphql", cors(), express.json(), expressMiddleware(server, {}));
  app.listen(4001);
});
