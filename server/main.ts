import Express = require("express");
import Path = require("path");

var PORT: number = process.env.PORT || 8090;
var app = Express();
var server = require("http").createServer(app);

app.get("/example", (req: Express.Request, res: Express.Response, next: Express.NextFunction) =>
{
    res.write("Hello!");
    res.end();
});

app.use(Express.static(Path.join(__dirname, "../client")));

console.log("Running on port: " + PORT);
server.listen(PORT);