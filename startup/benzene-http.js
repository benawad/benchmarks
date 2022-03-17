"use strict";
const start = process.hrtime();

const { createServer } = require("http");
const { Benzene, makeHandler, parseGraphQLBody } = require("@benzene/http");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const rawBody = (req, done) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => done(body));
};

const schema = createApolloSchema();

const GQL = new Benzene({ schema });

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

const loadingTime = process.hrtime(start);

server.listen(4001, () => {
  const listenTime = process.hrtime(start);
  require("fs").writeFileSync(
    `${__filename}.txt`,
    `${loadingTime} | ${listenTime}\n`,
    { encoding: "utf-8", flag: "a" },
  );
  server.close();
});
