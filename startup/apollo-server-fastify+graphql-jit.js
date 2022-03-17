"use strict";
const start = process.hrtime();

const { ApolloServer } = require("apollo-server-fastify");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const app = require("fastify")();
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const cache = {};

const server = new ApolloServer({
  schema,
  executor: ({ source, context }) => {
    if (!(source in cache)) {
      const document = parse(source);
      cache[source] = compileQuery(schema, document);
    }

    return cache[source].query({}, context, {});
  },
});
app.register(server.createHandler());

const loadingTime = process.hrtime(start);

app.listen(4001, () => {
  const listenTime = process.hrtime(start);
  require("fs").writeFileSync(
    `${__filename}.txt`,
    `${loadingTime} | ${listenTime}\n`,
    { encoding: "utf-8", flag: "a" },
  );
  app.close();
});
