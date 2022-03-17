"use strict";
const start = process.hrtime();

const OpentracingPlugin = require("apollo-opentracing").default;
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

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
server.applyMiddleware({ app });

const loadingTime = process.hrtime(start);

const svr = app.listen(4001);
const listenTime = process.hrtime(start);
require("fs").writeFileSync(
  `${__filename}.txt`,
  `${loadingTime} | ${listenTime}\n`,
  { encoding: "utf-8", flag: "a" },
);
svr.close();
