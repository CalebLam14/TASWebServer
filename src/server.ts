import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { parse as urlParse } from "url";

const PORT: number = 8080;

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    const path: string = urlParse(req.url, true).pathname;
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write((path !== "/") ? path : "Hello! Feel free to add a path to the URL!");
    res.end();
});

console.log(`Serving HTTP on port ${PORT}`);
server.listen(PORT);
