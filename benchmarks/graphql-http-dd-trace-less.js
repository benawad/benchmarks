"use strict";

const tracer = require("dd-trace").init();

tracer.use("graphql", { depth: 0 });
const { createHandler } = require("graphql-http/lib/use/express");
const processRequest = require("graphql-upload/processRequest.js");
const express = require("express");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const app = express();
const schema = createApolloSchema();
app.use(
  "/graphql",
  createHandler({
    schema,
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
  }),
);
app.listen(4001);
