"use strict";

const { createServer } = require("http");
const { makeCompileQuery } = require("@benzene/jit");
const { Benzene, makeHandler, parseGraphQLBody } = require("@benzene/http");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const rawBody = (req, done) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => done(body));
};

const schema = createApolloSchema();

const GQL = new Benzene({
  schema,
  compileQuery: makeCompileQuery(),
});

const graphqlHTTP = makeHandler(GQL);

const server = createServer((req, res) => {
  rawBody(req, (rawBody) =>
    graphqlHTTP({
      method: req.method,
      headers: req.headers,
      body: parseGraphQLBody(rawBody, req.headers["content-type"]),
    }).then((result) => {
      res.writeHead(result.status, result.headers);
      res.end(JSON.stringify(result.payload));
    }),
  );
});

server.listen(4001);
