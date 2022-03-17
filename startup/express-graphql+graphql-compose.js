"use strict";
const start = process.hrtime();

const { graphqlHTTP } = require("express-graphql");
const { graphqlUploadExpress } = require("graphql-upload");
const express = require("express");
const {
  createGraphqlComposeSchema,
} = require("../lib/schemas/createGraphqlCompose");

const app = express();
const schema = createGraphqlComposeSchema();
app.use(
  "/graphql",
  graphqlUploadExpress(),
  graphqlHTTP({
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
