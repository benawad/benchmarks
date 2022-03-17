"use strict";
const start = process.hrtime();

const { GraphQLServer } = require("graphql-yoga");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const server = new GraphQLServer({ schema });
const loadingTime = process.hrtime(start);

server
  .start({ port: 4001, endpoint: "/graphql", tracing: true }, () => {})
  .then((server) => {
    const listenTime = process.hrtime(start);
    require("fs").writeFileSync(
      `${__filename}.txt`,
      `${loadingTime} | ${listenTime}\n`,
      { encoding: "utf-8", flag: "a" },
    );
    server.close();
  });
