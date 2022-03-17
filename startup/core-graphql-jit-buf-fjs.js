"use strict";
const start = process.hrtime();

const { createServer } = require("http");

const fastJSONStringify = require("fast-json-stringify");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const turboJSONParse = require("turbo-json-parse");

const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const jsonParse = turboJSONParse({
  type: "object",
  properties: {
    query: {
      type: "string",
    },
  },
});

const stringify = fastJSONStringify({
  type: "object",
  properties: {
    data: {
      type: "object",
      properties: {
        authors: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "string",
              },
              name: {
                type: "string",
              },
              md5: {
                type: "string",
              },
              books: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                    },
                    name: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
});

const schema = createApolloSchema();

const cache = {};

const server = createServer((req, res) => {
  const chunks = [];

  req.on("data", (chunk) => {
    chunks.push(chunk);
  });

  req.on("end", async () => {
    const { query } = jsonParse(Buffer.concat(chunks).toString());

    cache[query] = cache[query] || compileQuery(schema, parse(query));

    const result = await cache[query].query();

    res.end(stringify(result));
  });
});

const loadingTime = process.hrtime(start);

server.listen(4001, () => {
  const listenTime = process.hrtime(start);
  require("fs").writeFileSync(
    `${__filename}.txt`,
    `${loadingTime} | ${listenTime}\n`,
    { encoding: "utf-8", flag: "a" },
  );
  server.close();
});
