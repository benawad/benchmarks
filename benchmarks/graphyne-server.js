const { createServer } = require('http');
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { GraphyneServer } = require('graphyne-server');

const schema = createApolloSchema();

const graphyne = new GraphyneServer({ schema });

const server = createServer(
  graphyne.createHandler()
);

server.listen(4001);
