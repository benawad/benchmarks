"use strict";

const { createServer } = require("http");

const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");

const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const cache = {};

const server = createServer((req, res) => {
  const chunks = [];

  req.on("data", (chunk) => {
    chunks.push(chunk);
  });

  req.on("end", async () => {
    const { query } = JSON.parse(Buffer.concat(chunks).toString());

    cache[query] = cache[query] || compileQuery(schema, parse(query));

    const result = await cache[query].query();

    res.end(JSON.stringify(result));
  });
});

server.listen(4001);
