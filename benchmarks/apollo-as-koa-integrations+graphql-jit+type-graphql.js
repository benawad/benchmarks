"use strict";

const { koaMiddleware } = require("@as-integrations/koa");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const { ApolloServer } = require("@apollo/server");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const { createServer } = require("http");
const {
  createAsyncTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");

const app = new Koa();

const cache = {};

const httpServer = createServer(app.callback());

createAsyncTypeGraphQLSchema().then((schema) => {
  const server = new ApolloServer({
    schema,
    executor: ({ source, context }) => {
      if (!(source in cache)) {
        const document = parse(source);
        cache[source] = compileQuery(schema, document);
      }

      return cache[source].query({}, context, {});
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  server.start().then(() => {
    app.use(cors());
    app.use(bodyParser());
    app.use(koaMiddleware(server, {}));
    return new Promise((resolve) => httpServer.listen({ port: 4001 }, resolve));
  });
});
