"use strict";

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const graphqlUploadKoa = require("graphql-upload/graphqlUploadKoa.js");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

Promise.all([
  import("graphql-api-koa/execute.mjs"),
  import("graphql-api-koa/errorHandler.mjs"),
]).then(([{ default: execute }, { default: errorHandler }]) => {
  const app = new Koa()
    .use(errorHandler())
    .use(graphqlUploadKoa())
    .use(bodyParser())
    .use(execute({ schema }));

  app.listen(4001);
});
