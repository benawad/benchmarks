"use strict";
const { exec } = require("child_process");
const path = require("path");

const forked = exec(
  "~/.bun/bin/bun run server.ts",
  { cwd: path.join(__dirname, "..", "other-benchmarks/bun/") },
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  },
);
console.log(path.join(__dirname, "..", "other-benchmarks/bun/server.ts"));
forked.on("exit", () => console.log("exited"));
