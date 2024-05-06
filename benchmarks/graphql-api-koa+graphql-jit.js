"use strict";

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const graphqlUploadKoa = require("graphql-upload/graphqlUploadKoa.js");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const cache = {};

Promise.all([
  import("graphql-api-koa/execute.mjs"),
  import("graphql-api-koa/errorHandler.mjs"),
]).then(([{ default: execute }, { default: errorHandler }]) => {
  const app = new Koa()
    .use(errorHandler())
    .use(graphqlUploadKoa())
    .use(bodyParser())
    .use(
      execute({
        schema,
        override: ({
          request: {
            body: { query },
          },
        }) => ({
          execute({ rootValue, contextValue, variableValues }) {
            if (!(query in cache)) {
              cache[query] = compileQuery(schema, parse(query));
            }
            return cache[query].query(rootValue, contextValue, variableValues);
          },
        }),
      }),
    );

  app.listen(4001);
});
