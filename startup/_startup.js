"use strict";

const { Worker } = require("worker_threads");
const path = require("path");

const minSamples = 5;

const runSample = (cb) => {
  return async () => {
    for (let i = 0; i < minSamples; ++i) {
      await cb();
    }
  };
};

const measureApollOpenTracing = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./apollo-opentracing.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureApolloSchemaAsync = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./apollo-schema+async.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureApolloServerExpress = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./apollo-server-express.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureApolloServerTracing = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./apollo-server-express-tracing.js")).on(
      "exit",
      resolve,
    );
  });
});

// error
const measureApolloServerFastify = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./apollo-server-fastify.js")).on(
      "exit",
      resolve,
    );
  });
});

// error
const measureApolloServerFastifyGraphQLjit = runSample(() => {
  return new Promise((resolve) => {
    new Worker(
      path.join(__dirname, "./apollo-server-fastify+graphql-jit.js"),
    ).on("exit", resolve);
  });
});

const measureApolloServerKoaGraphQLjitTypegraphql = runSample(() => {
  return new Promise((resolve) => {
    new Worker(
      path.join(__dirname, "./apollo-server-koa+graphql-jit+type-graphql.js"),
    ).on("exit", resolve);
  });
});

const measureBenzeneHttp = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./benzene-http.js")).on("exit", resolve);
  });
});

const measureCoreGraphQLjitBuf = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./core-graphql-jit-buf.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureCoreGraphQLJitStr = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./core-graphql-jit-str.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureCoreGraphQLJitBufFjs = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./core-graphql-jit-buf-fjs.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureExpressGql = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./express-gql.js")).on("exit", resolve);
  });
});

const measureExpressGraphqlGraphqlCompose = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./express-graphql+graphql-compose.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureExpressGraphqlGraphqlJitGraphqlCompose = runSample(() => {
  return new Promise((resolve) => {
    new Worker(
      path.join(__dirname, "./express-graphql+graphql-jit+graphql-compose.js"),
    ).on("exit", resolve);
  });
});

const measureExpressGraphqlGraphqlJitTypegraphql = runSample(() => {
  return new Promise((resolve) => {
    new Worker(
      path.join(__dirname, "./express-graphql+graphql-jit+type-graphql.js"),
    ).on("exit", resolve);
  });
});

const measureExpressGraphqlGraphqlJit = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./express-graphql+graphql-jit.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureExpressGraphqlTypegraphql = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./express-graphql+type-graphql.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureExpressGraphqlDdTraceLess = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./express-graphql-dd-trace-less.js")).on(
      "exit",
      resolve,
    );
  });
});

const meauserExpressGraphqlDdTraceNoPlugin = runSample(() => {
  return new Promise((resolve) => {
    new Worker(
      path.join(__dirname, "./express-graphql-dd-trace-no-plugin.js"),
    ).on("exit", resolve);
  });
});

const measureExpressGraphqlDdTrace = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./express-graphql-dd-trace.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureExpressGraphql = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./express-graphql.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureExpressRest = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./express-REST.js")).on("exit", resolve);
  });
});

const measureFastifyExpressGraphqlJit = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./fastify-express-graphql-jit.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureFastifyExpressGraphqlTypedJit = runSample(() => {
  return new Promise((resolve) => {
    new Worker(
      path.join(__dirname, "./fastify-express-graphql-typed-jit.js"),
    ).on("exit", resolve);
  });
});

const measureFastifyExpressGrapqlTyped = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./fastify-express-grapql-typed.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureFastifyRest = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./fastify-REST.js")).on("exit", resolve);
  });
});

// can't measure listen and startup time
const measureGoGraphql = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./go-graphql.js")).on("exit", resolve);
  });
});

const measureGraphqlApiKoaGraphqlJit = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./graphql-api-koa+graphql-jit.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureGraphqlApiKoa = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./graphql-api-koa.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureGraphqlComposeAsync = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./graphql-compose+async.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureMercuriusGraphqlCompose = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./mercurius+graphql-compose.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureMercuriusGraphqlJitTypegraphql = runSample(() => {
  return new Promise((resolve) => {
    new Worker(
      path.join(__dirname, "./mercurius+graphql-jit+type-graphql.js"),
    ).on("exit", resolve);
  });
});

const measureMercurius = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./mercurius.js")).on("exit", resolve);
  });
});

const measureTypegraphqlAsyncMiddleware = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./type-graphql+async-middleware.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureTypegraphqlAsync = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./type-graphql+async.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureMercuriusGraphQLjit = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./mercurius+graphql-jit.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureTypeGraphqlMiddleware = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./type-graphql+middleware.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureYogaGraphqlTrace = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./yoga-graphql-trace.js")).on(
      "exit",
      resolve,
    );
  });
});

const measureYogaGraphql = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./yoga-graphql.js")).on("exit", resolve);
  });
});

measureMercuriusGraphQLjit()
  .then(measureYogaGraphql)
  .then(measureYogaGraphqlTrace)
  .then(measureApollOpenTracing)
  .then(measureApolloSchemaAsync)
  .then(measureApolloServerExpress)
  .then(measureApolloServerTracing)
  //.then(measureApolloServerFastify)
  //.then(measureApolloServerFastifyGraphQLjit)
  .then(measureApolloServerKoaGraphQLjitTypegraphql)
  .then(measureBenzeneHttp)
  .then(measureCoreGraphQLjitBuf)
  .then(measureCoreGraphQLJitStr)
  .then(measureCoreGraphQLJitBufFjs)
  .then(measureExpressGql)
  .then(measureExpressGraphqlGraphqlCompose)
  .then(measureExpressGraphqlGraphqlJitGraphqlCompose)
  .then(measureExpressGraphqlGraphqlJitTypegraphql)
  .then(measureExpressGraphqlGraphqlJit)
  .then(measureExpressGraphqlTypegraphql)
  .then(measureExpressGraphqlDdTraceLess)
  .then(meauserExpressGraphqlDdTraceNoPlugin)
  .then(measureExpressGraphqlDdTrace)
  .then(measureExpressGraphql)
  .then(measureFastifyExpressGraphqlJit)
  .then(measureFastifyExpressGraphqlTypedJit)
  .then(measureFastifyExpressGrapqlTyped)
  .then(measureFastifyRest)
  //.then(measureGoGraphql)
  .then(measureGraphqlApiKoaGraphqlJit)
  .then(measureGraphqlApiKoa)
  .then(measureGraphqlComposeAsync)
  .then(measureMercuriusGraphqlCompose)
  .then(measureMercuriusGraphqlJitTypegraphql)
  .then(measureMercurius)
  .then(measureTypegraphqlAsyncMiddleware)
  .then(measureTypegraphqlAsync)
  .then(measureTypeGraphqlMiddleware);
