import { createYoga } from "graphql-yoga";

import schema from "./schema";

const fetch = createYoga({
  graphqlEndpoint: "/graphql",
  schema,
});

const server = Bun.serve({
  fetch,
  port: process.env.PORT || 4001,
});

console.info(
  `Server is running on ${new URL(
    "/graphql",
    `http://${server.hostname}:${server.port}`,
  )}`,
);
