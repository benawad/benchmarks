"use strict";
const start = process.hrtime();

const { graphqlHTTP } = require("express-graphql");
const express = require("express");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const { graphqlUploadExpress } = require("graphql-upload");
const {
  createGraphqlComposeSchema,
} = require("../lib/schemas/createGraphqlCompose");

const app = express();

const cache = {};
const schema = createGraphqlComposeSchema();

app.use(
  "/graphql",
  graphqlUploadExpress(),
  graphqlHTTP((_, __, { query }) => {
    if (!(query in cache)) {
      const document = parse(query);
      cache[query] = compileQuery(schema, document);
    }

    return {
      schema,
      customExecuteFn: ({ rootValue, variableValues, contextValue }) =>
        cache[query].query(rootValue, contextValue, variableValues),
    };
  }),
);
const loadingTime = process.hrtime(start);
const svr = app.listen(4001);
const listenTime = process.hrtime(start);
require("fs").writeFileSync(
  `${__filename}.txt`,
  `${loadingTime} | ${listenTime}\n`,
  { encoding: "utf-8", flag: "a" },
);
svr.close();
