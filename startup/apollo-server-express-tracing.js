"use strict";
const start = process.hrtime();

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

const loadingTime = process.hrtime(start);

const svr = app.listen(4001);

const listenTime = process.hrtime(start);
require("fs").writeFileSync(
  `${__filename}.txt`,
  `${loadingTime} | ${listenTime}\n`,
  { encoding: "utf-8", flag: "a" },
);
svr.close();
