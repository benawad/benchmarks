"use strict";

const { createHandler } = require("graphql-http/lib/use/express");
const express = require("express");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const processRequest = require("graphql-upload/processRequest.js");
const {
  createGraphqlComposeSchema,
} = require("../lib/schemas/createGraphqlCompose");

const app = express();

const cache = {};
const schema = createGraphqlComposeSchema();

app.use(
  "/graphql",
  createHandler({
    async parseRequestParams(req) {
      const params = await processRequest(req.raw, req.context.res);
      if (Array.isArray(params)) {
        throw new Error("Batching is not supported");
      }
      return {
        ...params,
        // variables must be an object as per the GraphQL over HTTP spec
        variables: Object(params.variables),
      };
    },
    execute: (_, __, { query }) => {
      if (!(query in cache)) {
        const document = parse(query);
        cache[query] = compileQuery(schema, document);
      }

      return {
        schema,
        customExecuteFn: ({ rootValue, variableValues, contextValue }) =>
          cache[query].query(rootValue, contextValue, variableValues),
      };
    },
  }),
);
app.listen(4001);
