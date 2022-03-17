"use strict";
const start = process.hrtime();

const { graphqlHTTP } = require("express-graphql");
const app = require("fastify")();
const { compileQuery } = require("graphql-jit");
const { parse } = require("graphql");
const {
  createTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");

const cache = {};

createTypeGraphQLSchema().then((schema) => {
  app.post(
    "/graphql",
    graphqlHTTP((_, __, { query }) => {
      if (!(query in cache)) {
        const document = parse(query);
        cache[query] = compileQuery(schema, document);
      }
      return {
        schema,
        graphiql: true,
        customExecuteFn: ({ rootValue, variableValues, contextValue }) =>
          cache[query].query(rootValue, contextValue, variableValues),
      };
    }),
  );
  const loadingTime = process.hrtime(start);
  app.listen(4001, () => {
    const listenTime = process.hrtime(start);
    require("fs").writeFileSync(
      `${__filename}.txt`,
      `${loadingTime} | ${listenTime}\n`,
      { encoding: "utf-8", flag: "a" },
    );
    app.close();
  });
});
