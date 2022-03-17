"use strict";
const start = process.hrtime();

const express = require("express");
const { graphqlUploadExpress } = require("graphql-upload");
const md5 = require("md5");
const { data } = require("../lib/data");

const app = express();
app.post("/graphql", graphqlUploadExpress(), (_, res) => {
  res.send(data.map((x) => ({ ...x, md5: md5(x.name) })));
});
const loadingTime = process.hrtime(start);
const svr = app.listen(4001);
const listenTime = process.hrtime(start);
require("fs").writeFileSync(
  `${__filename}.txt`,
  `${loadingTime} | ${listenTime}\n`,
  { encoding: "utf-8", flag: "a" },
);
svr.close();
