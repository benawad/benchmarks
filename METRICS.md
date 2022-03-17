
# Metrics
* __Machine:__ darwin x64 | 16 vCPUs | 16.0GB Mem
* __Node:__ `v14.16.1`
* __Run:__ Thu Mar 17 2022 13:53:18 GMT+0800 (Philippine Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

|                                                | startup(ms) | listen(ms) |
| -                                              | -           | -          |
| apollo-opentracing.js                          | 548.86      | 550.67     |
| apollo-schema+async.js                         | 506.58      | 508.20     |
| apollo-server-express-tracing.js               | 509.39      | 511.00     |
| apollo-server-express.js                       | 510.17      | 511.84     |
| apollo-server-koa+graphql-jit+type-graphql.js  | 573.12      | 574.78     |
| benzene-http.js                                | 502.85      | 504.74     |
| core-graphql-jit-buf-fjs.js                    | 547.71      | 549.56     |
| core-graphql-jit-buf.js                        | 513.71      | 515.57     |
| core-graphql-jit-str.js                        | 513.02      | 514.88     |
| express-gql.js                                 | 521.66      | 523.33     |
| express-graphql+graphql-compose.js             | 443.51      | 445.17     |
| express-graphql+graphql-jit+graphql-compose.js | 473.19      | 474.80     |
| express-graphql+graphql-jit+type-graphql.js    | 519.19      | 520.90     |
| express-graphql+graphql-jit.js                 | 537.05      | 539.09     |
| express-graphql+type-graphql.js                | 477.65      | 479.37     |
| express-graphql-dd-trace-less.js               | 821.93      | 822.98     |
| express-graphql-dd-trace-no-plugin.js          | 695.21      | 696.38     |
| express-graphql-dd-trace.js                    | 919.16      | 920.38     |
| express-graphql.js                             | 557.07      | 558.85     |
| fastify-REST.js                                | 405.13      | 413.20     |
| fastify-express-graphql-jit.js                 | 622.93      | 630.83     |
| fastify-express-graphql-typed-jit.js           | 530.00      | 537.38     |
| fastify-express-grapql-typed.js                | 511.11      | 520.59     |
| graphql-api-koa+graphql-jit.js                 | 551.53      | 553.34     |
| graphql-api-koa.js                             | 516.00      | 517.73     |
| graphql-compose+async.js                       | 442.16      | 443.79     |
| mercurius+graphql-compose.js                   | 555.85      | 584.94     |
| mercurius+graphql-jit+type-graphql.js          | 572.82      | 603.11     |
| mercurius+graphql-jit.js                       | 759.33      | 791.84     |
| mercurius.js                                   | 639.21      | 669.88     |
| type-graphql+async-middleware.js               | 481.93      | 483.67     |
| type-graphql+async.js                          | 487.05      | 488.79     |
| type-graphql+middleware.js                     | 479.51      | 481.17     |
| yoga-graphql-trace.js                          | 597.79      | 601.64     |
| yoga-graphql.js                                | 607.10      | 611.01     |
