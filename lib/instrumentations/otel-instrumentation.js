const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const {
  SemanticResourceAttributes,
} = require("@opentelemetry/semantic-conventions");
const { Resource } = require("@opentelemetry/resources");
const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");
const {
  FastifyInstrumentation,
} = require("@opentelemetry/instrumentation-fastify");
const {
  GraphQLInstrumentation,
} = require("@opentelemetry/instrumentation-graphql");
const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-grpc");

const provider = new NodeTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "graphql-service",
  }),
});

provider.addSpanProcessor(new BatchSpanProcessor(new OTLPTraceExporter()));
provider.register();

registerInstrumentations({
  instrumentations: [
    new GraphQLInstrumentation({}),
    new HttpInstrumentation(),
    new FastifyInstrumentation(),
  ],
});
