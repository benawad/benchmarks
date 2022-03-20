
# Metrics
* __Machine:__ darwin x64 | 16 vCPUs | 16.0GB Mem
* __Node:__ `v14.16.1`
* __Run:__ Sun Mar 20 2022 09:27:38 GMT+0800 (Philippine Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

|                                                | startup(ms) | listen(ms) |
| -                                              | -           | -          |
| apollo-opentracing.js                          | 212.43      | 214.08     |
| apollo-schema+async.js                         | 196.15      | 197.78     |
| apollo-server-express-tracing.js               | 203.97      | 206.19     |
| apollo-server-express.js                       | 205.61      | 208.38     |
| apollo-server-koa+graphql-jit+type-graphql.js  | 479.62      | 481.30     |
| benzene-http.js                                | 192.59      | 194.33     |
| core-graphql-jit-buf-fjs.js                    | 232.71      | 234.52     |
| core-graphql-jit-buf.js                        | 206.86      | 208.61     |
| core-graphql-jit-str.js                        | 208.47      | 210.20     |
| express-gql.js                                 | 213.72      | 215.24     |
| express-graphql+graphql-compose.js             | 291.05      | 292.68     |
| express-graphql+graphql-jit+graphql-compose.js | 314.30      | 316.24     |
| express-graphql+graphql-jit+type-graphql.js    | 354.01      | 355.60     |
| express-graphql+graphql-jit.js                 | 217.15      | 218.77     |
| express-graphql+type-graphql.js                | 325.19      | 326.79     |
| express-graphql-dd-trace-less.js               | 445.16      | 446.24     |
| express-graphql-dd-trace-no-plugin.js          | 334.27      | 335.48     |
| express-graphql-dd-trace.js                    | 421.87      | 422.90     |
| express-graphql.js                             | 193.83      | 195.55     |
| fastify-REST.js                                | 251.61      | 259.61     |
| fastify-express-graphql-jit.js                 | 278.52      | 286.33     |
| fastify-express-graphql-typed-jit.js           | 374.27      | 381.91     |
| fastify-express-grapql-typed.js                | 355.04      | 364.08     |
| graphql-api-koa+graphql-jit.js                 | 229.05      | 230.64     |
| graphql-api-koa.js                             | 203.76      | 205.46     |
| graphql-compose+async.js                       | 289.47      | 291.04     |
| mercurius+graphql-compose.js                   | 399.89      | 429.18     |
| mercurius+graphql-jit+type-graphql.js          | 420.21      | 447.94     |
| mercurius+graphql-jit.js                       | 376.04      | 405.23     |
| mercurius.js                                   | 326.85      | 355.44     |
| type-graphql+async-middleware.js               | 326.13      | 327.73     |
| type-graphql+async.js                          | 329.21      | 330.84     |
| type-graphql+middleware.js                     | 326.71      | 328.27     |
| yoga-graphql-trace.js                          | 259.48      | 263.15     |
| yoga-graphql.js                                | 269.48      | 273.16     |
