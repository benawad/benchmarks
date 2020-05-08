const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const express = require("express");
const { GraphyneServer } = require('graphyne-server');
const { graphqlUploadExpress } = require("graphql-upload");

const schema = createApolloSchema();

const graphyne = new GraphyneServer({ schema });

const app = express();
app.post(
  "/graphql",
  graphqlUploadExpress(),
  graphyne.createHandler({
    onNoMatch: (req, res, next) => next()
  })
);
app.listen(4001);
