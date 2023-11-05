const { readdirSync } = require("fs");
const { join } = require("path");

module.exports.choices = readdirSync(join(__dirname, "..", "benchmarks")).map(
  (x) => x.replace(".js", ""),
);
