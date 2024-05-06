"use strict";

const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const OpentracingPlugin = require("apollo-opentracing").default;
const express = require("express");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

if (true) {
  throw new Error(
    "https://github.com/DanielMSchmidt/apollo-opentracing/issues/573",
  );
}

const app = express();
const schema = createApolloSchema();
const server = new ApolloServer({
  schema,
  plugins: [
    OpentracingPlugin({
      server: {
        startSpan: () => ({ finish: () => ({}) }),
        extract: () => ({}),
        finish: () => ({}),
      },
      local: {
        startSpan: () => ({ finish: () => ({}) }),
      },
    }),
  ],
});
server.start().then(() => {
  app.use("/graphql", cors(), express.json(), expressMiddleware(server, {}));
  app.listen(4001);
});
