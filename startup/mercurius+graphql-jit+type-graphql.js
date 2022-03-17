"use strict";
const start = process.hrtime();

const Fastify = require("fastify");
const mercurius = require("mercurius");
const {
  createTypeGraphQLSchema,
} = require("../lib/schemas/createTypeGraphQLSchema");

const app = Fastify();

createTypeGraphQLSchema().then((schema) => {
  app.register(mercurius, {
    schema,
  });
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
