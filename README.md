# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance
- type-graphql adds overhead

# Explanation

For further details, please check out [this video](https://www.youtube.com/watch?v=JbV7MCeEPb8).

# Usage

```
git clone https://github.com/benawad/benchmarks
cd benchmarks
npm install
npm start
```

# Benchmarks
duration: 60.14s
connections: 100
pipelining: 5

| Server                                                                                                                                                                                          | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                                                                             | --:        | :-:     | --:           |
| [rust-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/rust-graphql.js)                                                                                       | 66804.8    | 7.00    | 391.47        |
| [bun-yoga-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/bun-yoga-jit.js)                                                                                       | 13934.5    | 35.38   | 94.31         |
| [go-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/go-graphql.js)                                                                                           | 13567.7    | 36.36   | 79.78         |
| [uWebSockets-graphql+jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit.js)                                                                 | 12364.5    | 39.93   | 83.33         |
| [core-graphql-jit-str](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-str.js)                                                                       | 9154.3     | 54.11   | 61.95         |
| [core-graphql-jit-buf](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf.js)                                                                       | 9120.5     | 54.31   | 61.73         |
| [benzene-jit-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-jit-http.js)                                                                               | 8756.6     | 56.58   | 59.69         |
| [apollo-schema+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-schema+async.js)                                                                         | 8589.9     | 57.69   | 2.38          |
| [graphql-http+middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http+middleware.js)                                                                 | 8576.5     | 57.78   | 2.37          |
| [graphql-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http.js)                                                                                       | 8567.2     | 57.85   | 2.37          |
| [graphql-http+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http+type-graphql.js)                                                             | 8566.9     | 57.84   | 2.37          |
| [graphql-http+async-middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http+async-middleware.js)                                                     | 8429.6     | 58.80   | 2.33          |
| [graphql-compose+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-compose+async.js)                                                                     | 8415.9     | 58.90   | 2.33          |
| [graphql-http+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http+graphql-jit+type-graphql.js)                                     | 8415.1     | 58.90   | 2.33          |
| [graphql-http+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http+async.js)                                                                           | 8388.3     | 59.09   | 2.32          |
| [graphql-http+graphql-jit+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http+graphql-jit+graphql-compose.js)                               | 8350.7     | 59.35   | 2.31          |
| [core-graphql-jit-buf-fjs](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf-fjs.js)                                                               | 8251.5     | 60.06   | 55.85         |
| [fastify-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-REST.js)                                                                                       | 8247.3     | 60.11   | 76.00         |
| [graphql-http+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http+graphql-compose.js)                                                       | 8227.7     | 60.25   | 2.28          |
| [graphql-http+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http+graphql-jit.js)                                                               | 8157.3     | 60.77   | 2.26          |
| [bun-yoga](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/bun-yoga.js)                                                                                               | 8132.2     | 60.96   | 55.04         |
| [graphql-http-dd-trace-no-plugin](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http-dd-trace-no-plugin.js)                                                 | 7920.7     | 62.60   | 2.19          |
| [mercurius+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-jit.js)                                                                     | 7624.2     | 65.06   | 51.95         |
| [mercurius+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-jit+type-graphql.js)                                           | 6446.1     | 77.03   | 43.92         |
| [graphql-http-dd-trace](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http-dd-trace.js)                                                                     | 5410.9     | 91.85   | 1.50          |
| [graphql-http-dd-trace-less](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-http-dd-trace-less.js)                                                           | 5313.5     | 93.52   | 1.47          |
| [express-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-REST.js)                                                                                       | 4988.7     | 99.66   | 46.28         |
| [benzene-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-http.js)                                                                                       | 4776.6     | 104.11  | 32.56         |
| [mercurius+graphql-jit+otel-instrumentation](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-jit+otel-instrumentation.js)                           | 4717.1     | 105.42  | 32.14         |
| [mercurius+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-compose.js)                                                             | 4468.4     | 111.31  | 30.44         |
| [mercurius](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius.js)                                                                                             | 4400.1     | 113.05  | 29.98         |
| [graphql-api-koa+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa+graphql-jit.js)                                                         | 4223.8     | 117.78  | 28.75         |
| [yoga-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/yoga-graphql.js)                                                                                       | 3815.7     | 130.43  | 25.99         |
| [graphql-api-koa](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa.js)                                                                                 | 3046.7     | 163.43  | 20.73         |
| [apollo-as-integrations-fastify+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-as-integrations-fastify+graphql-jit.js)                           | 2722.3     | 182.94  | 18.61         |
| [apollo-as-integrations-fastify+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-as-integrations-fastify+graphql-jit+type-graphql.js) | 2652.8     | 187.71  | 18.14         |
| [apollo-as-integrations-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-as-integrations-fastify.js)                                                   | 2578.5     | 192.82  | 17.63         |
| [apollo-as-koa-integrations+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-as-koa-integrations+graphql-jit+type-graphql.js)         | 2385.0     | 207.45  | 16.41         |
| [apollo-server-express-tracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express-tracing.js)                                                     | 2131.1     | 230.22  | 14.77         |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)                                                                     | 2116.2     | 231.06  | 14.67         |
| [apollo-opentracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-opentracing.js)                                                                           | 0.0        | 0.00    | 0.00          |
| [express-gql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-gql.js)                                                                                         | 0.0        | 0.00    | 0.00          |
| [fastify-express-graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-express-graphql-jit.js)                                                         | 0.0        | 0.00    | 0.00          |
| [fastify-express-graphql-typed-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-express-graphql-typed-jit.js)                                             | 0.0        | 0.00    | 0.00          |
| [fastify-express-grapql-typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-express-grapql-typed.js)                                                       | 0.0        | 0.00    | 0.00          |
