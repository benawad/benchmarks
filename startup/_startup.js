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

const mercuriusGraphQLjit = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./mercurius+graphql-jit.js")).on(
      "exit",
      resolve,
    );
  });
});

mercuriusGraphQLjit();
