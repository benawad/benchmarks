
# Metrics
* __Machine:__ darwin x64 | 16 vCPUs | 16.0GB Mem
* __Node:__ `v14.16.1`
* __Run:__ Thu Mar 17 2022 13:22:00 GMT+0800 (Philippine Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

|                                                | startup(ms) | listen(ms) |
| -                                              | -           | -          |
| apollo-opentracing.js                          | 512.76      | 514.42     |
| apollo-schema+async.js                         | 501.24      | 502.92     |
| apollo-server-express-tracing.js               | 508.91      | 510.55     |
| apollo-server-express.js                       | 504.11      | 505.77     |
| apollo-server-koa+graphql-jit+type-graphql.js  | 566.50      | 568.22     |
| benzene-http.js                                | 497.66      | 499.50     |
| core-graphql-jit-buf-fjs.js                    | 539.65      | 541.54     |
| core-graphql-jit-buf.js                        | 513.82      | 515.66     |
| core-graphql-jit-str.js                        | 513.18      | 514.99     |
| express-gql.js                                 | 522.13      | 523.78     |
| express-graphql+graphql-compose.js             | 441.22      | 442.92     |
| express-graphql+graphql-jit+graphql-compose.js | 466.42      | 468.08     |
| express-graphql+graphql-jit+type-graphql.js    | 501.40      | 503.08     |
| express-graphql+graphql-jit.js                 | 527.03      | 528.69     |
| express-graphql+type-graphql.js                | 474.71      | 476.36     |
| express-graphql-dd-trace-less.js               | 787.69      | 788.71     |
| express-graphql-dd-trace-no-plugin.js          | 666.93      | 668.06     |
| express-graphql-dd-trace.js                    | 778.31      | 779.34     |
| express-graphql.js                             | 500.32      | 501.97     |
| fastify-REST.js                                | 403.77      | 411.48     |
| fastify-express-graphql-jit.js                 | 584.59      | 592.61     |
| fastify-express-graphql-typed-jit.js           | 520.27      | 527.67     |
| fastify-express-grapql-typed.js                | 505.67      | 514.87     |
| graphql-api-koa+graphql-jit.js                 | 536.36      | 538.13     |
| graphql-api-koa.js                             | 507.84      | 509.57     |
| graphql-compose+async.js                       | 441.47      | 443.22     |
| mercurius+graphql-compose.js                   | 551.93      | 580.99     |
| mercurius+graphql-jit+type-graphql.js          | 572.38      | 602.95     |
| mercurius+graphql-jit.js                       | 661.78      | 693.80     |
| mercurius.js                                   | 633.72      | 664.19     |
| type-graphql+async-middleware.js               | 471.69      | 473.38     |
| type-graphql+async.js                          | 472.77      | 474.39     |
| type-graphql+middleware.js                     | 474.01      | 475.60     |
| yoga-graphql-trace.js                          | 561.18      | 564.83     |
| yoga-graphql.js                                | 565.37      | 569.04     |
