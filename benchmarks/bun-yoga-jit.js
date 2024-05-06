"use strict";
const { exec } = require("child_process");
const path = require("path");

const forked = exec(
  "~/.bun/bin/bun run server-jit.ts",
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
    if (stdout) {
      console.log(`stdout: ${stdout}`);
      return;
    }
  },
);
process.on("SIGINT", () => forked.kill());
forked.on("exit", () => console.log("bun-yoga-jit exited"));
