"use strict";
const start = process.hrtime();

const { ApolloServer } = require("apollo-server-fastify");
const app = require("fastify")();
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();
const server = new ApolloServer({
  schema,
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
