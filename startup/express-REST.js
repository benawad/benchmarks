"use strict";

const express = require("express");
const { graphqlUploadExpress } = require("graphql-upload");
const md5 = require("md5");
const { data } = require("../lib/data");

const app = express();
app.post("/graphql", graphqlUploadExpress(), (_, res) => {
  res.send(data.map((x) => ({ ...x, md5: md5(x.name) })));
});
app.listen(4001);
