const { readdirSync } = require("fs");
const { join } = require("path");

module.exports.choices = readdirSync(
  join(__dirname, "..", "benchmarks")
).filter(x => x.endsWith(".js")).map(x => x.replace(".js", ""));
