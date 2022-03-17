"use strict";
const start = process.hrtime();

const bodyParser = require("body-parser");
const { createGraphqlMiddleware } = require("express-gql");
const express = require("express");
const { graphqlUploadExpress } = require("graphql-upload");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const app = express();
app.post(
  "/graphql",
  graphqlUploadExpress(),
  bodyParser.json(),
  createGraphqlMiddleware({
    context: () => ({}),
    formatError: ({ error }) => error,
    schema,
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
