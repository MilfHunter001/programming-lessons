const fs = require("fs");
const http = require("http");


const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>hello world</h2>");
        fs.appendFileSync("hello.txt", 'переход в hello\n');
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");

    } else if (request.url == "/image/1") {
        let content = fs.readFileSync("image/1.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);
    } else if (request.url == "/image/2") {
        let content = fs.readFileSync("image/2.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);
    } else if (request.url == "/image/3") {
            let content = fs.readFileSync("image/3.jpg");
            response.writeHead(200, {
                'Content-Type': 'image/jpeg'
            })
            response.end(content);
    } else if (request.url == "/image/4") {
        let content = fs.readFileSync("image/4.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);
    } else if (request.url == "/image/5") {
        let content = fs.readFileSync("image/5.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);
    } else if (request.url == "/image/6") {
        let content = fs.readFileSync("image/6.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);
    } else if (request.url == "/image/7") {
        let content = fs.readFileSync("image/7.jpg");
        response.writeHead(200, {
            'Content-Type': 'image/jpeg'
        })
        response.end(content);
    }


};

http.createServer(requestHandler).listen(12000);