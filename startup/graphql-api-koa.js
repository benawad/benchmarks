"use strict";

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { errorHandler, execute } = require("graphql-api-koa");
const { graphqlUploadKoa } = require("graphql-upload");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const app = new Koa()
  .use(errorHandler())
  .use(graphqlUploadKoa())
  .use(bodyParser())
  .use(execute({ schema }));

app.listen(4001);
