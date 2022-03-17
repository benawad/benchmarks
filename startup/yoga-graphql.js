"use strict";

const { GraphQLServer } = require("graphql-yoga");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const server = new GraphQLServer({ schema });

server.start({ port: 4001, endpoint: "/graphql" });
