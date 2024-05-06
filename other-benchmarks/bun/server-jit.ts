import { createYoga } from "graphql-yoga";
import { useGraphQlJit } from "@envelop/graphql-jit";

import schema from "./schema";

const fetch = createYoga({
  graphqlEndpoint: "/graphql",
  schema,
  plugins: [useGraphQlJit()],
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
