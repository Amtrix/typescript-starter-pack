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


// Access from customer-client from here on:
app.all('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});



console.log("Running on port: " + PORT);
server.listen(PORT);