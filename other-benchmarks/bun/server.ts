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

process.on("SIGINT", (code) => {
  server.stop(true);
  process.exit(0);
});

process.on("SIGTERM", (code) => {
  server.stop(true);
  process.exit(0);
});
