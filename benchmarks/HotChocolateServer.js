
const { join } = require("path");
var hcDir = join(__dirname, "HotChocolateServer/HotChocolateServer.csproj");

var dotnetProcess = require('child_process').spawn('dotnet run -c Release --project ' + hcDir, [], {
    shell: true,
    detached: true
});

process.on('SIGINT', function () {
    process.kill(-dotnetProcess.pid)
  });