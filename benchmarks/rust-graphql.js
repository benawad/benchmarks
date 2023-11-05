"use strict";
const { exec } = require("child_process");
const path = require("path");

const forked = exec(
  "./target/release/rust-gql",
  { cwd: path.join(__dirname, "..", "other-benchmarks/rust-gql/") },
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

forked.on("exit", () => console.log("exited"));