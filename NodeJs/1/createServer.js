console.log("Hello World");

const http = require("http");

http.createServer((req, res) => {
    res.write("<h1>Hello world</h1>");
    res.end("<p>Server running</p>");
}).listen(8080, () => {
    console.log("서버 대기중");
});
