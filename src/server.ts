import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const PORT: number = 8080;

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    res.write("Hello, World!");
    res.end();
});

console.log(`Serving HTTP on port ${PORT}`);
server.listen(PORT);
