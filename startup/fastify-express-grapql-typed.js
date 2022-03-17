"use strict";
const start = process.hrtime();

const { graphqlHTTP } = require("express-graphql");
const {
  createTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");
const app = require("fastify")();

createTypeGraphQLSchema().then((schema) => {
  app.post(
    "/graphql",
    graphqlHTTP({
      schema,
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
