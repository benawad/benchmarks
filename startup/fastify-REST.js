"use strict";
const start = process.hrtime();

const fastify = require("fastify")({});
const md5 = require("md5");
const { data } = require("../lib/data");

fastify.post("/graphql", (_, reply) => {
  reply.send(data.map((x) => ({ ...x, md5: md5(x.name) })));
});
const loadingTime = process.hrtime(start);

fastify.listen(4001, () => {
  const listenTime = process.hrtime(start);
  require("fs").writeFileSync(
    `${__filename}.txt`,
    `${loadingTime} | ${listenTime}\n`,
    { encoding: "utf-8", flag: "a" },
  );
  fastify.close();
});
